
        // Global variables
        let operatorUser = null;
        let operatorRole = null; // 'admin' or 'staff'
        let activeTabName = 'dashboard';
        let stockDataMap = {}; // Local stock cache synced with Firestore
        let ordersHistoryList = []; // Sync with Firestore orders collection
        let activePOSBillItems = []; // POS billing table items
        let selectedPOSPaymentMode = 'Cash'; // Cash, UPI, Card
        let currentAdjustingProductSlug = ''; // Stock manager modal target
        let viewingInvoiceObject = null; // Target invoice for reprint/PDF
        // ------------------ INITIALIZE & CLOCK ------------------
        document.addEventListener('DOMContentLoaded', () => {
            // Live clock logic
            setInterval(() => {
                const now = new Date();
                let hrs = now.getHours();
                let mins = now.getMinutes();
                let secs = now.getSeconds();
                let ampm = hrs >= 12 ? 'PM' : 'AM';
                hrs = hrs % 12;
                hrs = hrs ? hrs : 12; // 12 instead of 0
                mins = mins < 10 ? '0' + mins : mins;
                secs = secs < 10 ? '0' + secs : secs;
                document.getElementById('liveClock').textContent = `${hrs}:${mins}:${secs} ${ampm}`;
            }, 1000);
            // Auth state observer for login guard
            auth.onAuthStateChanged((user) => {
                const loginOverlay = document.getElementById('loginOverlay');
                const errorDiv = document.getElementById('loginErrorMsg');
                if (user) {
                    const email = user.email ? user.email.toLowerCase().trim() : '';
                    if (email !== 'admin@diginess.store' && email !== 'staff@diginess.store') {
                        auth.signOut();
                        errorDiv.textContent = 'Access Denied: Only admin@diginess.store and staff@diginess.store are authorized to access the POS portal.';
                        operatorUser = null;
                        operatorRole = null;
                        loginOverlay.style.display = 'flex';
                        return;
                    }
                    operatorUser = user;
                    operatorRole = (email === 'admin@diginess.store') ? 'admin' : 'staff';
                    loginOverlay.style.display = 'none';
                    
                    // Setup operator identity
                    const opInitial = email.charAt(0).toUpperCase();
                    document.getElementById('operatorInitial').textContent = opInitial;
                    document.getElementById('operatorName').textContent = email;
                    
                    const roleText = (operatorRole === 'admin') ? 'System Store Admin' : 'POS Billing Staff';
                    document.querySelector('.operator-role').textContent = roleText;

                    // Sync interface features based on permissions
                    applyRolePermissions();

                    // Launch databases & sync listeners
                    initializeSystemData();
                } else {
                    operatorUser = null;
                    operatorRole = null;
                    loginOverlay.style.display = 'flex';
                }
            });
            // Close autoclose dropdowns if clicking elsewhere
            window.addEventListener('click', (e) => {
                const dropdown = document.getElementById('billingSuggestions');
                if (!e.target.closest('.search-autocomplete-container') && dropdown) {
                    dropdown.style.display = 'none';
                }
            });
        });
        // ------------------ AUTHENTICATION FUNCTIONS ------------------
        function applyRolePermissions() {
            if (!operatorUser) return;
            const isStaff = (operatorRole === 'staff');
            
            // 1. CSV Export button control
            const csvExportBtn = document.querySelector('.dashboard-row button[onclick="exportSalesCSV()"]');
            if (csvExportBtn) {
                if (isStaff) {
                    csvExportBtn.disabled = true;
                    csvExportBtn.style.opacity = '0.5';
                    csvExportBtn.style.cursor = 'not-allowed';
                    csvExportBtn.title = 'Admin privileges required to export CSV reports';
                } else {
                    csvExportBtn.disabled = false;
                    csvExportBtn.style.opacity = '1';
                    csvExportBtn.style.cursor = 'pointer';
                    csvExportBtn.title = '';
                }
            }
            
            // 2. Refresh tables to adapt display elements
            if (activeTabName === 'stock') {
                renderStockTable();
            } else if (activeTabName === 'delivery') {
                renderDeliveryTable();
            }
        }
        async function handleAdminLogin() {
            const email = document.getElementById('adminEmail').value.trim();
            const password = document.getElementById('adminPassword').value;
            const errorDiv = document.getElementById('loginErrorMsg');
            errorDiv.textContent = '';
            if (!email || !password) {
                errorDiv.textContent = 'Please fill in all email and password fields.';
                return;
            }
            try {
                await auth.signInWithEmailAndPassword(email, password);
                showToast('Authenticated successfully!', 'success');
            } catch (err) {
                console.error(err);
                errorDiv.textContent = 'Login authentication failed: ' + err.message;
            }
        }
        async function handleLogout() {
            try {
                await auth.signOut();
                showToast('Portal secured and locked.', 'success');
                // Clear state
                activePOSBillItems = [];
                ordersHistoryList = [];
                stockDataMap = {};
                operatorRole = null;
            } catch (err) {
                console.error(err);
            }
        }
        // ------------------ TAB CONTROLLER ------------------
        function switchTab(tabId, element) {
            activeTabName = tabId;
            
            // Hide all tab panels
            document.querySelectorAll('.tab-panel').forEach(panel => {
                panel.style.display = 'none';
            });
            // Show target tab panel
            document.getElementById('panel-' + tabId).style.display = 'block';
            
            // Auto close mobile sidebar menu if it is active
            const sidebar = document.querySelector('.sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            if (sidebar && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
            }

            // Reset navigation highlight states
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            if (element) {
                element.classList.add('active');
            } else {
                // Find correct sidebar element manually
                document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
                    const text = item.textContent.toLowerCase();
                    if (text.includes(tabId)) {
                        item.classList.add('active');
                    }
                });
            }
            // Update page headers
            const headerTitle = document.getElementById('pageTitleText');
            const headerDesc = document.getElementById('pageDescriptionText');
            if (tabId === 'dashboard') {
                headerTitle.textContent = 'Dashboard';
                headerDesc.textContent = 'Overview of website sales, POS billing, and stock analytics.';
                renderDashboardMetrics();
            } else if (tabId === 'billing') {
                headerTitle.textContent = 'POS Billing Terminal';
                headerDesc.textContent = 'Create sales transactions, calculate totals, and print invoices.';
            } else if (tabId === 'stock') {
                headerTitle.textContent = 'Stock Manager';
                headerDesc.textContent = 'Track and update current physical warehouse stock and available sellable stock.';
                renderStockTable();
            } else if (tabId === 'delivery') {
                headerTitle.textContent = 'Delivery Status Manager';
                headerDesc.textContent = 'Monitor, track, and update delivery status for e-commerce website shipments.';
                renderDeliveryTable();
            } else if (tabId === 'history') {
                headerTitle.textContent = 'Order History & Invoices';
                headerDesc.textContent = 'Search invoices, download PDFs, and print receipts for in-store & online orders.';
                renderHistoryTable();
            }
        }
        // ------------------ DYNAMIC PRODUCT HELPER DETAILS ------------------
        function getProductBarcode(slug) {
            const index = productData.findIndex(p => p.slug === slug);
            if (index === -1) return '890000000000';
            return '89000000' + String(index).padStart(4, '0');
        }
        function getProductModel(slug) {
            const index = productData.findIndex(p => p.slug === slug);
            if (index === -1) return 'DG-MOD-GEN';
            return 'DG-MOD-' + String(index + 1).padStart(3, '0');
        }
        // ------------------ FIRESTORE INITIALIZATION & SYSTEM LISTENERS ------------------
        async function initializeSystemData() {
            if (typeof productData === 'undefined' || !productData.length) {
                console.error('productData from product-data.js not loaded!');
                showToast('Error: Product definitions missing.', 'error');
                return;
            }
            // 1. Initialise stocks database for missing entries
            try {
                const stockSnap = await db.collection('stocks').get();
                const existingSlugs = new Set();
                stockSnap.forEach(doc => existingSlugs.add(doc.id));
                const batch = db.batch();
                let initialNeeded = false;
                
                productData.forEach(p => {
                    if (!existingSlugs.has(p.slug)) {
                        console.log('Stock init triggered for product slug:', p.slug);
                        const stockDocRef = db.collection('stocks').doc(p.slug);
                        batch.set(stockDocRef, {
                            productId: p.slug,
                            productName: p.name,
                            currentStock: 15, // Default physical warehouse stock
                            availableStock: 15, // Default available sellable stock
                            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
                        });
                        initialNeeded = true;
                    }
                });
                if (initialNeeded) {
                    await batch.commit();
                    showToast('Sync completed: Stock database initialized.', 'success');
                }
            } catch (err) {
                console.error('Error verifying stock database integrity:', err);
            }
            // 2. Attach Live Listener to Stocks collection
            db.collection('stocks').onSnapshot((snapshot) => {
                snapshot.forEach(doc => {
                    stockDataMap[doc.id] = doc.data();
                });
                console.log('Realtime Stocks synchronized successfully');
                
                // Refresh active dashboard metric counts and tables
                if (activeTabName === 'dashboard') {
                    renderDashboardMetrics();
                } else if (activeTabName === 'stock') {
                    renderStockTable();
                }
            }, (err) => {
                console.error('Error synchronizing real-time inventory updates:', err);
            });
            // 3. Attach Live Listener to Orders collection
            db.collection('orders').orderBy('createdAt', 'desc').onSnapshot((snapshot) => {
                ordersHistoryList = [];
                snapshot.forEach(doc => {
                    ordersHistoryList.push({ id: doc.id, ...doc.data() });
                });
                console.log('Realtime Orders database synchronized successfully');
                
                // Refresh active dashboard metrics and order history list
                if (activeTabName === 'dashboard') {
                    renderDashboardMetrics();
                } else if (activeTabName === 'history') {
                    renderHistoryTable();
                } else if (activeTabName === 'delivery') {
                    renderDeliveryTable();
                }
            }, (err) => {
                console.error('Error synchronizing orders logs:', err);
            });
        }
        // ------------------ TOAST NOTIFICATIONS ------------------
        function showToast(message, type = 'success') {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            
            const icon = type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation';
            toast.innerHTML = `
                <i class="fas ${icon}"></i>
                <span>${message}</span>
            `;
            
            container.appendChild(toast);
            
            // Remove toast after 3.5 seconds
            setTimeout(() => {
                toast.style.animation = 'toastSlideIn 0.3s ease reverse';
                setTimeout(() => toast.remove(), 250);
            }, 3500);
        }
        // ------------------ MODAL ACTIONS ------------------
        function openModal(modalId) {
            document.getElementById(modalId).classList.add('active');
        }
        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }
        // ------------------ TAB 1: DASHBOARD AND ANALYTICS LOGIC ------------------
        function renderDashboardMetrics() {
            let totalSalesAmount = 0;
            let posSalesAmount = 0;
            let onlineSalesAmount = 0;
            let totalOrdersCount = ordersHistoryList.length;
            let lowStockCount = 0;
            // Calculate totals
            ordersHistoryList.forEach(order => {
                const total = order.total || 0;
                totalSalesAmount += total;
                
                const isPOSOrder = order.isPOS || order.orderType === 'POS';
                if (isPOSOrder) {
                    posSalesAmount += total;
                } else {
                    onlineSalesAmount += total;
                }
            });
            // Count low stock products from Firestore cache map
            let lowStockHTML = '';
            let lowStockList = [];
            productData.forEach(p => {
                const stockInfo = stockDataMap[p.slug] || { currentStock: 0, availableStock: 0 };
                const available = stockInfo.availableStock || 0;
                if (available < 5) {
                    lowStockCount++;
                    lowStockList.push({
                        name: p.name,
                        slug: p.slug,
                        available: available,
                        status: available === 0 ? 'Out of Stock' : 'Low'
                    });
                }
            });
            // Update stats cards
            document.getElementById('statTotalSales').textContent = `₹${totalSalesAmount.toLocaleString()}`;
            document.getElementById('statPOSSales').textContent = `₹${posSalesAmount.toLocaleString()}`;
            document.getElementById('statOnlineSales').textContent = `₹${onlineSalesAmount.toLocaleString()}`;
            document.getElementById('statTotalOrders').textContent = totalOrdersCount;
            document.getElementById('statLowStock').textContent = lowStockCount;
            // Render Low Stock Alert Table
            const lowStockBody = document.getElementById('dashboardLowStockBody');
            if (lowStockList.length === 0) {
                lowStockBody.innerHTML = `
                    <tr>
                        <td colspan="4" style="text-align: center; color: var(--accent); font-weight: 500; padding: 24px;">
                            <i class="fas fa-circle-check" style="margin-right: 6px;"></i> All inventory levels are healthy!
                        </td>
                    </tr>
                `;
            } else {
                lowStockHTML = lowStockList.map(item => `
                    <tr>
                        <td>
                            <div class="product-name-info">
                                <span class="product-name-title">${item.name}</span>
                                <span class="product-subtext">ID: ${item.slug}</span>
                            </div>
                        </td>
                        <td><code>${getProductModel(item.slug)}</code></td>
                        <td>${item.available} pcs</td>
                        <td>
                            <span class="badge ${item.available === 0 ? 'error' : 'warning'}">
                                ${item.status}
                            </span>
                        </td>
                    </tr>
                `).join('');
                lowStockBody.innerHTML = lowStockHTML;
            }
        }
        // CSV Exporter for Dashboard
        function exportSalesCSV() {
            if (ordersHistoryList.length === 0) {
                showToast('No sales order data available to export.', 'error');
                return;
            }
            let csvContent = "data:text/csv;charset=utf-8,";
            csvContent += "Invoice No,Date,Customer Name,Customer Email/Contact,Order Type,Payment Method,Subtotal (INR),Grand Total (INR),Status\r\n";
            ordersHistoryList.forEach(order => {
                const invoiceNo = order.orderId || "";
                const date = order.date || "";
                const customer = order.customerName || order.userName || "Walk-in Customer";
                const contact = order.userEmail || order.shippingInfo?.phone || "";
                const isPOS = order.isPOS || order.orderType === 'POS';
                const orderType = isPOS ? "POS" : "Online Website";
                const payment = isPOS ? (order.paymentMode || "Cash") : "Razorpay Online";
                const total = order.total || 0;
                // Since subtotal is total, let's approximate subtotal minus estimated tax/discount if needed
                const subtotal = total; 
                const status = order.status || "Delivered";
                const row = `"${invoiceNo}","${date}","${customer.replace(/"/g, '""')}","${contact}","${orderType}","${payment}",${subtotal},${total},"${status}"`;
                csvContent += row + "\r\n";
            });
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", `diginess_sales_report_${new Date().toISOString().slice(0,10)}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast('Sales Report CSV generated successfully!', 'success');
        }
        // ------------------ TAB 2: POS BILLING TERMINAL LOGIC ------------------
        function handleBillingSearch() {
            const input = document.getElementById('billingSearchInput');
            const dropdown = document.getElementById('billingSuggestions');
            const query = input.value.trim().toLowerCase();
            if (!query) {
                dropdown.style.display = 'none';
                return;
            }
            // Find matches in productData
            const matches = productData.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.category.toLowerCase().includes(query) ||
                getProductModel(p.slug).toLowerCase().includes(query) ||
                getProductBarcode(p.slug).includes(query)
            );
            if (matches.length === 0) {
                dropdown.innerHTML = `
                    <div style="padding: 16px; text-align: center; color: var(--muted); font-size:12px;">
                        No matching products found matching "${query}"
                    </div>
                `;
                } else {
                dropdown.innerHTML = matches.map(p => {
                    const stockInfo = stockDataMap[p.slug] || { currentStock: 0, availableStock: 0 };
                    const available = stockInfo.availableStock || 0;
                    const isOut = available <= 0;
                    const onclickAttr = isOut ? '' : "addProductToBill('" + p.slug + "');";
                    
                    return `
                        <div class="suggestion-item" onclick="${onclickAttr}">
                            <div class="suggestion-product-info">
                                <img src="${p.img}" alt="" onerror="this.src='https://placehold.co/30x40/121212/ffffff?text=Image'">
                                <div>
                                    <div class="suggestion-title">${p.name}</div>
                                    <div class="suggestion-model">Model: ${getProductModel(p.slug)} · Price: ₹${p.priceNum}</div>
                                </div>
                            </div>
                            <span class="badge ${isOut ? 'error' : 'success'} suggestion-stock-badge">
                                ${isOut ? 'Out of Stock' : `${available} Left`}
                            </span>
                        </div>
                    `;
                }).join('');
            }
            
            dropdown.style.display = 'block';
        }
        function addProductToBill(slug) {
            const dropdown = document.getElementById('billingSuggestions');
            const input = document.getElementById('billingSearchInput');
            
            dropdown.style.display = 'none';
            input.value = '';
            const product = productData.find(p => p.slug === slug);
            if (!product) return;
            // Check if already in bill table
            const existing = activePOSBillItems.find(item => item.slug === slug);
            if (existing) {
                const stockInfo = stockDataMap[slug] || { currentStock: 0, availableStock: 0 };
                if (existing.quantity >= stockInfo.availableStock) {
                    showToast(`Cannot add more. Limit of ${stockInfo.availableStock} sellable items reached for ${product.name}.`, 'error');
                    return;
                }
                existing.quantity += 1;
            } else {
                activePOSBillItems.push({
                    slug: product.slug,
                    name: product.name,
                    priceNum: product.priceNum,
                    model: getProductModel(product.slug),
                    barcode: getProductBarcode(product.slug),
                    quantity: 1
                });
            }
            showToast(`Added ${product.name} to bill`, 'success');
            renderActiveBill();
        }
        function changeBillItemQty(index, delta) {
            const item = activePOSBillItems[index];
            if (!item) return;
            const stockInfo = stockDataMap[item.slug] || { currentStock: 0, availableStock: 0 };
            const newQty = item.quantity + delta;
            if (newQty < 1) {
                removeBillItem(index);
                return;
            }
            if (newQty > stockInfo.availableStock) {
                showToast(`Cannot increase. Only ${stockInfo.availableStock} sellable items available.`, 'error');
                return;
            }
            item.quantity = newQty;
            renderActiveBill();
        }
        function removeBillItem(index) {
            const item = activePOSBillItems[index];
            if (!item) return;
            activePOSBillItems.splice(index, 1);
            showToast(`Removed ${item.name} from bill`, 'warning');
            renderActiveBill();
        }
        function clearActiveBill() {
            activePOSBillItems = [];
            document.getElementById('posCustomerName').value = '';
            document.getElementById('posCustomerContact').value = '';
            document.getElementById('posDiscount').value = '0';
            document.getElementById('posTax').value = '18';
            renderActiveBill();
        }
        function renderActiveBill() {
            const body = document.getElementById('activeBillBody');
            
            if (activePOSBillItems.length === 0) {
                body.innerHTML = `
                    <tr id="emptyBillRow">
                        <td colspan="6" style="text-align: center; padding: 48px; color: var(--muted);">
                            <i class="fas fa-cash-register" style="font-size: 28px; color: var(--border); display: block; margin-bottom: 12px;"></i>
                            Type and select a product above to add it to the bill.
                        </td>
                    </tr>
                `;
                calculateBillTotals();
                return;
            }
            body.innerHTML = activePOSBillItems.map((item, idx) => `
                <tr>
                    <td>
                        <div class="product-name-info">
                            <span class="product-name-title">${item.name}</span>
                            <span class="product-subtext">Barcode: ${item.barcode}</span>
                        </div>
                    </td>
                    <td><code>${item.model}</code></td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 4px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); border-radius: 4px; padding: 4px 8px; width: fit-content;">
                            <span>₹</span>
                            <input type="number" value="${item.priceNum}" min="0" onchange="updateBillItemPrice(${idx}, this.value)" style="width: 80px; color: #fff; background: transparent; border: none; outline: none; font-weight: 600; font-size: 13px;">
                        </div>
                    </td>
                    <td>
                        <div class="qty-controls">
                            <span class="qty-btn" onclick="changeBillItemQty(${idx}, -1)">-</span>
                            <span class="qty-input">${item.quantity}</span>
                            <span class="qty-btn" onclick="changeBillItemQty(${idx}, 1)">+</span>
                        </div>
                    </td>
                    <td>₹${(item.priceNum * item.quantity).toLocaleString()}</td>
                    <td>
                        <span class="btn-remove" onclick="removeBillItem(${idx})"><i class="fas fa-trash"></i></span>
                    </td>
                </tr>
            `).join('');
            calculateBillTotals();
        }
        function updateBillItemPrice(index, value) {
            const parsedPrice = parseFloat(value);
            if (isNaN(parsedPrice) || parsedPrice < 0) {
                showToast('Please enter a valid price.', 'error');
                renderActiveBill();
                return;
            }
            activePOSBillItems[index].priceNum = parsedPrice;
            renderActiveBill();
        }
        function calculateBillTotals() {
            let subtotal = 0;
            activePOSBillItems.forEach(item => {
                subtotal += (item.priceNum * item.quantity);
            });
            // Discount
            const discountPct = parseFloat(document.getElementById('posDiscount').value) || 0;
            const discountVal = (subtotal * discountPct) / 100;
            // Tax/GST
            const taxPct = parseFloat(document.getElementById('posTax').value) || 0;
            const subtotalAfterDiscount = subtotal - discountVal;
            const taxVal = (subtotalAfterDiscount * taxPct) / 100;
            // Grand Total
            const grandTotal = subtotalAfterDiscount + taxVal;
            // Update UI Sidebar
            document.getElementById('summarySubtotal').textContent = `₹${subtotal.toFixed(2)}`;
            document.getElementById('summaryDiscount').textContent = `₹${discountVal.toFixed(2)}`;
            document.getElementById('summaryTax').textContent = `₹${taxVal.toFixed(2)}`;
            document.getElementById('summaryGrandTotal').textContent = `₹${grandTotal.toFixed(2)}`;
        }
        function selectPaymentMode(mode, element) {
            selectedPOSPaymentMode = mode;
            document.querySelectorAll('.payment-option').forEach(opt => {
                opt.classList.remove('active');
            });
            element.classList.add('active');
        }
        // POS Order checkout flow
        async function checkoutBill() {
            if (activePOSBillItems.length === 0) {
                showToast('Cannot checkout. Bill table is empty.', 'error');
                return;
            }
            const customerName = document.getElementById('posCustomerName').value.trim() || 'Walk-in Customer';
            const customerContact = document.getElementById('posCustomerContact').value.trim() || 'No details provided';
            const discountPct = parseFloat(document.getElementById('posDiscount').value) || 0;
            const taxPct = parseFloat(document.getElementById('posTax').value) || 0;
            // Compute totals
            let subtotal = 0;
            const itemsList = activePOSBillItems.map(item => {
                subtotal += (item.priceNum * item.quantity);
                return {
                    name: item.name,
                    quantity: item.quantity,
                    price: `₹${item.priceNum}`,
                    priceNum: item.priceNum,
                    model: item.model,
                    barcode: item.barcode
                };
            });
            const discountVal = (subtotal * discountPct) / 100;
            const subtotalAfterDiscount = subtotal - discountVal;
            const taxVal = (subtotalAfterDiscount * taxPct) / 100;
            const grandTotal = Math.round(subtotalAfterDiscount + taxVal);
            // Generate deterministic order id for POS
            const orderId = `POS-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random()*900)}`;
            const currentDate = new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            const invoiceDetails = {
                orderId: orderId,
                date: currentDate,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                customerName: customerName,
                customerContact: customerContact,
                items: itemsList,
                subtotal: subtotal,
                discountPercent: discountPct,
                discountVal: discountVal,
                taxPercent: taxPct,
                taxVal: taxVal,
                total: grandTotal,
                paymentMode: selectedPOSPaymentMode,
                isPOS: true,
                status: 'Delivered', // POS is delivered immediately
                operatorEmail: operatorUser ? operatorUser.email : 'admin@diginess.com'
            };
            // Deduct stock in Firestore using a Transaction
            try {
                console.log('POS Checkout: Reducing inventory...');
                for (const item of activePOSBillItems) {
                    const stockRef = db.collection('stocks').doc(item.slug);
                    await db.runTransaction(async (transaction) => {
                        const doc = await transaction.get(stockRef);
                        if (!doc.exists) {
                            // Initialize default stock level minus ordered
                            transaction.set(stockRef, {
                                productId: item.slug,
                                productName: item.name,
                                currentStock: Math.max(0, 15 - item.quantity),
                                availableStock: Math.max(0, 15 - item.quantity),
                                lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
                            });
                        } else {
                            const data = doc.data();
                            const current = data.currentStock || 0;
                            const available = data.availableStock || 0;
                            
                            transaction.update(stockRef, {
                                currentStock: Math.max(0, current - item.quantity),
                                availableStock: Math.max(0, available - item.quantity),
                                lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
                            });
                        }
                    });
                }
                // Save POS Order document to orders collection
                await db.collection('orders').add(invoiceDetails);
                showToast('Sale transaction recorded successfully!', 'success');
                
                // Show printable invoice popup
                showInvoiceModal(invoiceDetails);
                
                // Reset terminal
                clearActiveBill();
            } catch (err) {
                console.error('Error completing POS billing transaction:', err);
                showToast('Error during checkout: ' + err.message, 'error');
            }
        }
        // ------------------ INVOICE MODAL POPUP & PRINT/DOWNLOAD ------------------
        function showInvoiceModal(orderObject) {
            viewingInvoiceObject = orderObject;
            const container = document.getElementById('invoicePaper');
            
            const isPOS = orderObject.isPOS || orderObject.orderType === 'POS';
            const invoiceNo = orderObject.orderId || 'N/A';
            const dateStr = orderObject.date || 'N/A';
            const customerName = orderObject.customerName || orderObject.userName || 'Walk-in Customer';
            const contactDetails = orderObject.customerContact || orderObject.userEmail || orderObject.shippingInfo?.phone || 'N/A';
            
            // Numbers
            const totalVal = orderObject.total || 0;
            const subtotal = orderObject.subtotal || totalVal;
            const discountVal = orderObject.discountVal || 0;
            const taxVal = orderObject.taxVal || 0;
            const paymentMode = isPOS ? (orderObject.paymentMode || 'Cash') : 'Razorpay Online';
            
            // Format Billing Details
            let billingDetailsHTML = '';
            if (orderObject.shippingInfo) {
                const s = orderObject.shippingInfo;
                billingDetailsHTML = `
                    <p><strong>${s.fullName || customerName}</strong></p>
                    <p>${s.address || ''}</p>
                    <p>${s.city || ''}, ${s.state || ''} - ${s.zip || ''}</p>
                    <p>Phone: ${s.phone || contactDetails}</p>
                `;
            } else {
                billingDetailsHTML = `
                    <p><strong>${customerName}</strong></p>
                    <p>Contact Details: ${contactDetails}</p>
                `;
            }

            // Items table rows
            let rowsHTML = '';
            const items = orderObject.items || [];
            items.forEach((item, index) => {
                const model = item.model || getProductModel(productData.find(p => p.name === item.name)?.slug || '');
                const qty = item.quantity || 1;
                const unitPrice = item.priceNum || parseInt(item.price?.replace(/[^0-9]/g, '')) || 0;
                rowsHTML += `
                    <tr>
                        <td style="text-align: center;">${index + 1}</td>
                        <td>
                            <span class="invoice-table-desc">${item.name}</span>
                            <div class="invoice-table-sub">Model: ${model}</div>
                        </td>
                        <td style="text-align: center;">${qty}</td>
                        <td style="text-align: right;">₹${unitPrice.toFixed(2)}</td>
                        <td style="text-align: right;">₹${(unitPrice * qty).toFixed(2)}</td>
                    </tr>
                `;
            });

            container.innerHTML = `
                <!-- Top Block: Logo and Title -->
                <div class="invoice-header-block">
                    <div class="invoice-logo-area">
                        <h2>DIGINESS</h2>
                        <p>SMART TECH REVOLUTION</p>
                        <p>12/4 Main Commercial St, Chennai, TN</p>
                        <p>Support: support@diginess.store | Phone: +91 9845012345</p>
                    </div>
                    <div class="invoice-title-area">
                        <h1>TAX INVOICE</h1>
                        <p><strong>Invoice ID:</strong> ${invoiceNo}</p>
                        <p><strong>Date:</strong> ${dateStr}</p>
                    </div>
                </div>
                
                <!-- Info Grid: Billing details and Meta details -->
                <div class="invoice-details-grid">
                    <div class="invoice-col">
                        <h3>Billed To (Customer Details)</h3>
                        ${billingDetailsHTML}
                    </div>
                    <div class="invoice-col" style="border-left: 1px solid #eee; padding-left: 40px;">
                        <h3>Transaction Details</h3>
                        <p><strong>Order Type:</strong> ${isPOS ? 'POS Offline Billing' : 'eCommerce Online Store'}</p>
                        <p><strong>Payment Status:</strong> PAID</p>
                        <p><strong>Payment Method:</strong> ${paymentMode.toUpperCase()}</p>
                        <p><strong>Operator Email:</strong> ${orderObject.operatorEmail || 'admin@diginess.store'}</p>
                    </div>
                </div>
                
                <!-- Table of Items -->
                <table class="invoice-table">
                    <thead>
                        <tr>
                            <th style="text-align: center; width: 8%;">S.No</th>
                            <th style="text-align: left; width: 47%;">Product Details</th>
                            <th style="text-align: center; width: 10%;">Qty</th>
                            <th style="text-align: right; width: 15%;">Unit Rate</th>
                            <th style="text-align: right; width: 20%;">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHTML}
                    </tbody>
                </table>
                
                <!-- Bottom Block: Terms Summary and Totals -->
                <div class="invoice-summary-block">
                    <div class="invoice-payment-details">
                        <h4>Notes & Declaration</h4>
                        <p style="margin-bottom: 6px;">This is a computer generated invoice and requires no physical signature.</p>
                        <p>Goods once sold cannot be returned without verified defects. Please inspect items upon receipt.</p>
                    </div>
                    <div class="invoice-totals">
                        <div class="invoice-totals-row">
                            <span>Subtotal:</span>
                            <span>₹${subtotal.toFixed(2)}</span>
                        </div>
                        ${discountVal > 0 ? `
                            <div class="invoice-totals-row">
                                <span>Discount Deducted:</span>
                                <span style="color: #d32f2f;">-₹${discountVal.toFixed(2)}</span>
                            </div>
                        ` : ''}
                        ${taxVal > 0 ? `
                            <div class="invoice-totals-row">
                                <span>Estimated GST / Tax:</span>
                                <span>+₹${taxVal.toFixed(2)}</span>
                            </div>
                        ` : ''}
                        <div class="invoice-totals-row grand">
                            <span>GRAND TOTAL:</span>
                            <span>₹${totalVal.toLocaleString()}.00</span>
                        </div>
                    </div>
                </div>
                
                <!-- Invoice Footer -->
                <div class="invoice-footer-block">
                    <p>Thank you for choosing DIGINESS for your smart tech gadgets!</p>
                    <p>For support, please visit www.diginess.store or reach out to our service helpdesk.</p>
                </div>
            `;
            openModal('modalInvoice');
        }
        // Direct client print utility
        function printInvoiceThermal() {
            window.print();
        }
        // Client side PDF downloader via html2pdf library
        function downloadInvoicePDF() {
            if (!viewingInvoiceObject) return;
            
            const element = document.getElementById('invoicePaper');
            const options = {
                margin:       10,
                filename:     `invoice_${viewingInvoiceObject.orderId}.pdf`,
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2, useCORS: true, letterRendering: true },
                jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };
            // Temporarily apply white background to print properly if browser theme affects canvas
            element.style.background = '#ffffff';
            element.style.color = '#000000';
            html2pdf().set(options).from(element).save().then(() => {
                showToast('Invoice PDF downloaded successfully!', 'success');
            }).catch(err => {
                console.error(err);
                showToast('Error generating PDF.', 'error');
            });
        }
        // ------------------ TAB 3: STOCK MANAGER TABLE LOGIC ------------------
        function renderStockTable() {
            const body = document.getElementById('stockTableBody');
            const query = document.getElementById('stockSearchInput').value.trim().toLowerCase();
            // Filter products
            const filtered = productData.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.category.toLowerCase().includes(query) ||
                getProductModel(p.slug).toLowerCase().includes(query)
            );
            if (filtered.length === 0) {
                body.innerHTML = `
                    <tr>
                        <td colspan="6" style="text-align: center; color: var(--muted); padding: 32px;">
                            No matching inventory products found.
                        </td>
                    </tr>
                `;
                return;
            }
            body.innerHTML = filtered.map(p => {
                const stockInfo = stockDataMap[p.slug] || { currentStock: 0, availableStock: 0 };
                const current = stockInfo.currentStock || 0;
                const available = stockInfo.availableStock || 0;
                const isLow = available < 5;
                const isOut = available === 0;
                let stockStatusBadge = `<span class="badge success">Healthy</span>`;
                if (isOut) {
                    stockStatusBadge = `<span class="badge error">Out of Stock</span>`;
                } else if (isLow) {
                    stockStatusBadge = `<span class="badge warning">Low Stock</span>`;
                }
                return `
                    <tr>
                        <td>
                            <div class="product-thumbnail-cell">
                                <img src="${p.img}" alt="" onerror="this.src='https://placehold.co/36x48/121212/ffffff?text=Product'">
                                <div class="product-name-info">
                                    <span class="product-name-title">${p.name}</span>
                                    <span class="product-subtext">Category: ${p.category}</span>
                                </div>
                            </div>
                        </td>
                        <td><code>${getProductModel(p.slug)}</code></td>
                        <td><code>${getProductBarcode(p.slug)}</code></td>
                        <td>
                            <strong style="font-size:14px; color:#fff;">${current} pcs</strong>
                        </td>
                        <td>
                            <strong style="font-size:14px; color:#fff; margin-right:8px;">${available} pcs</strong>
                            ${stockStatusBadge}
                        </td>
                        <td style="text-align: right;">
                            <div class="stock-adjust-actions" style="justify-content: flex-end;">
                                <button class="btn-adjust-qty inc" onclick="openStockAdjustModal('${p.slug}', 'add')">
                                    <i class="fas fa-plus"></i> Add
                                </button>
                                <button class="btn-adjust-qty dec" onclick="openStockAdjustModal('${p.slug}', 'reduce')">
                                    <i class="fas fa-minus"></i> Reduce
                                </button>
                                <button class="btn-adjust-qty" style="color:var(--primary);" onclick="openStockAdjustModal('${p.slug}', 'set')">
                                    <i class="fas fa-sliders"></i> Override
                                </button>
                            </div>
                        </td>
                    </tr>
                `;
            }).join('');
        }
        // Open stock manual adjust modal
        function openStockAdjustModal(slug, preSelectAction) {
            if (operatorRole !== 'admin') {
                showToast('Access Denied: Only administrators can adjust stock levels.', 'error');
                return;
            }
            currentAdjustingProductSlug = slug;
            const product = productData.find(p => p.slug === slug);
            if (!product) return;
            const stockInfo = stockDataMap[slug] || { currentStock: 0, availableStock: 0 };
            document.getElementById('adjustProductMeta').innerHTML = `
                Product: <strong>${product.name}</strong><br>
                Current Physical: <strong>${stockInfo.currentStock} pcs</strong> | Sellable Available: <strong>${stockInfo.availableStock} pcs</strong>
            `;
            // Preset selects
            document.getElementById('adjustActionType').value = preSelectAction;
            document.getElementById('adjustTarget').value = 'both';
            document.getElementById('adjustQuantityInput').value = '5';
            openModal('modalStockAdjust');
        }
        // Commit stock adjustment to Firestore
        async function submitStockAdjustment() {
            if (operatorRole !== 'admin') {
                showToast('Access Denied: Only administrators can adjust stock levels.', 'error');
                return;
            }
            if (!currentAdjustingProductSlug) return;
            const target = document.getElementById('adjustTarget').value; // current, available, both
            const action = document.getElementById('adjustActionType').value; // add, reduce, set
            const deltaQty = parseInt(document.getElementById('adjustQuantityInput').value);
            if (isNaN(deltaQty) || deltaQty < 0) {
                showToast('Please enter a valid positive quantity.', 'error');
                return;
            }
            const product = productData.find(p => p.slug === currentAdjustingProductSlug);
            const stockRef = db.collection('stocks').doc(currentAdjustingProductSlug);
            try {
                await db.runTransaction(async (transaction) => {
                    const doc = await transaction.get(stockRef);
                    let current = 15;
                    let available = 15;
                    if (doc.exists) {
                        current = doc.data().currentStock || 0;
                        available = doc.data().availableStock || 0;
                    }
                    let newCurrent = current;
                    let newAvailable = available;
                    // Apply current updates
                    if (target === 'current' || target === 'both') {
                        if (action === 'add') newCurrent = current + deltaQty;
                        else if (action === 'reduce') newCurrent = Math.max(0, current - deltaQty);
                        else if (action === 'set') newCurrent = deltaQty;
                    }
                    // Apply available updates
                    if (target === 'available' || target === 'both') {
                        if (action === 'add') newAvailable = available + deltaQty;
                        else if (action === 'reduce') newAvailable = Math.max(0, available - deltaQty);
                        else if (action === 'set') newAvailable = deltaQty;
                    }
                    // Write changes
                    transaction.set(stockRef, {
                        productId: currentAdjustingProductSlug,
                        productName: product.name,
                        currentStock: newCurrent,
                        availableStock: newAvailable,
                        lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
                    });
                });
                showToast(`Inventory updated for ${product.name}!`, 'success');
                closeModal('modalStockAdjust');
                renderStockTable();
            } catch (err) {
                console.error(err);
                showToast('Adjustment failed: ' + err.message, 'error');
            }
        }
        // ------------------ TAB 5: MANAGE DELIVERY STATUS & ACTIONS ------------------
        let activeDeliveryStatusFilter = 'all';
        function filterDeliveryStatus(status, btnElement) {
            activeDeliveryStatusFilter = status;
            document.querySelectorAll('#deliveryStatusFilters .history-filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            btnElement.classList.add('active');
            renderDeliveryTable();
        }
        function renderDeliveryTable() {
            const body = document.getElementById('deliveryTableBody');
            if (!body) return;
            const query = document.getElementById('deliverySearchInput').value.trim().toLowerCase();
            
            // Filter orders containing shippingInfo (which denotes online orders)
            let deliveries = ordersHistoryList.filter(order => {
                const hasShipping = !!order.shippingInfo;
                if (!hasShipping) return false;
                
                // Status filter
                const orderStatus = (order.status || 'Processing').toLowerCase();
                if (activeDeliveryStatusFilter === 'processing' && orderStatus !== 'processing' && orderStatus !== 'pending') return false;
                if (activeDeliveryStatusFilter === 'shipped' && orderStatus !== 'shipped') return false;
                if (activeDeliveryStatusFilter === 'delivered' && orderStatus !== 'delivered') return false;
                
                // Search filter query
                const orderId = (order.orderId || '').toLowerCase();
                const customer = (order.customerName || order.userName || '').toLowerCase();
                const phone = (order.shippingInfo?.phone || '').toLowerCase();
                const state = (order.shippingInfo?.state || '').toLowerCase();
                const city = (order.shippingInfo?.city || '').toLowerCase();
                
                return orderId.includes(query) || customer.includes(query) || phone.includes(query) || state.includes(query) || city.includes(query);
            });
            
            if (deliveries.length === 0) {
                body.innerHTML = `
                    <tr>
                        <td colspan="7" style="text-align: center; color: var(--muted); padding: 32px;">
                            No shipments found matching filters.
                        </td>
                    </tr>
                `;
                return;
            }
            
            body.innerHTML = deliveries.map(order => {
                const s = order.shippingInfo || {};
                const invoiceNo = order.orderId || 'N/A';
                const customer = s.fullName || order.customerName || order.userName || 'Customer';
                const contact = s.phone || order.userEmail || 'N/A';
                
                const addressStr = `${s.address || ''}, ${s.city || ''}, ${s.state || ''} - ${s.zip || ''}`;
                
                // Items Summary
                const itemsSummary = (order.items || []).map(it => `${it.name} (x${it.quantity})`).join(', ');
                const total = order.total || 0;
                const status = order.status || 'Processing';
                const isStaff = (operatorRole === 'staff');
                
                // Status Badge CSS
                let badgeClass = 'warning'; // processing / pending
                if (status.toLowerCase() === 'shipped') badgeClass = 'info';
                else if (status.toLowerCase() === 'delivered') badgeClass = 'success';
                
                // Status update actions
                let actionHTML = '';
                if (isStaff) {
                    actionHTML = `<span class="badge warning" style="background: rgba(245, 158, 11, 0.05); color: var(--warning); border: 1px solid rgba(245, 158, 11, 0.15);">View Only</span>`;
                } else {
                    actionHTML = `
                        <select onchange="updateDeliveryStatus('${order.id}', this.value)" style="background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 4px; padding: 6px 10px; color: #fff; font-size: 12px; cursor: pointer; outline: none; border-color: rgba(255,255,255,0.1);">
                            <option value="Processing" ${status === 'Processing' ? 'selected' : ''}>Processing</option>
                            <option value="Shipped" ${status === 'Shipped' ? 'selected' : ''}>Shipped</option>
                            <option value="Delivered" ${status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                        </select>
                    `;
                }
                
                return `
                    <tr>
                        <td><strong style="color:var(--primary);">${invoiceNo}</strong></td>
                        <td>
                            <div class="product-name-info">
                                <span class="product-name-title">${customer}</span>
                                <span class="product-subtext">${contact}</span>
                            </div>
                        </td>
                        <td style="max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${addressStr}">
                            ${addressStr}
                        </td>
                        <td style="max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${itemsSummary}">
                            ${itemsSummary}
                        </td>
                        <td><strong style="color:var(--primary);">₹${total.toLocaleString()}</strong></td>
                        <td>
                            <span class="badge ${badgeClass}">${status}</span>
                        </td>
                        <td style="text-align: right;">
                            ${actionHTML}
                        </td>
                    </tr>
                `;
            }).join('');
        }
        async function updateDeliveryStatus(docId, newStatus) {
            if (operatorRole !== 'admin') {
                showToast('Access Denied: Admin role required to edit delivery status.', 'error');
                return;
            }
            try {
                await db.collection('orders').doc(docId).update({
                    status: newStatus,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                });
                showToast(`Delivery status updated to ${newStatus}`, 'success');
            } catch (err) {
                console.error(err);
                showToast('Failed to update status: ' + err.message, 'error');
            }
        }
        // ------------------ TAB 4: ORDER HISTORY & REPRINT INVOICE ------------------
        let activeHistoryTypeFilter = 'all';
        function filterHistoryType(type, buttonElement) {
            activeHistoryTypeFilter = type;
            document.querySelectorAll('.history-filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            buttonElement.classList.add('active');
            renderHistoryTable();
        }
        function renderHistoryTable() {
            const body = document.getElementById('historyTableBody');
            const query = document.getElementById('historySearchInput').value.trim().toLowerCase();
            // Filter history lists
            let filtered = ordersHistoryList.filter(order => {
                const isPOS = order.isPOS || order.orderType === 'POS';
                
                // 1. Filter by order type tabs
                if (activeHistoryTypeFilter === 'pos' && !isPOS) return false;
                if (activeHistoryTypeFilter === 'online' && isPOS) return false;
                // 2. Filter by search query keywords
                const orderId = (order.orderId || '').toLowerCase();
                const customer = (order.customerName || order.userName || '').toLowerCase();
                const date = (order.date || '').toLowerCase();
                const payment = isPOS ? (order.paymentMode || '').toLowerCase() : 'razorpay online';
                
                return orderId.includes(query) || customer.includes(query) || date.includes(query) || payment.includes(query);
            });
            if (filtered.length === 0) {
                body.innerHTML = `
                    <tr>
                        <td colspan="7" style="text-align: center; color: var(--muted); padding: 32px;">
                            No matching invoices or orders found.
                        </td>
                    </tr>
                `;
                return;
            }
            body.innerHTML = filtered.map(order => {
                const isPOS = order.isPOS || order.orderType === 'POS';
                const invoiceNo = order.orderId || 'N/A';
                const dateStr = order.date || 'N/A';
                const customer = order.customerName || order.userName || 'Walk-in Customer';
                const payment = isPOS ? (order.paymentMode || 'Cash') : 'Razorpay Online';
                const total = order.total || 0;
                
                return `
                    <tr>
                        <td><strong style="color:var(--primary);">${invoiceNo}</strong></td>
                        <td>${dateStr}</td>
                        <td>
                            <div class="product-name-info">
                                <span class="product-name-title">${customer}</span>
                                <span class="product-subtext">${order.userEmail || order.shippingInfo?.phone || ''}</span>
                            </div>
                        </td>
                        <td>
                            <span class="badge ${isPOS ? 'info' : 'success'}">
                                <i class="fas ${isPOS ? 'fa-store' : 'fa-globe'}" style="margin-right: 4px;"></i>
                                ${isPOS ? 'POS' : 'Online'}
                            </span>
                        </td>
                        <td>${payment}</td>
                        <td><strong style="color:var(--accent);">₹${total.toLocaleString()}</strong></td>
                        <td style="text-align: right;">
                            <div class="action-row-btns" style="justify-content: flex-end;">
                                <button class="btn-row-action print" title="Reprint Receipt" onclick="reprintInvoice('${order.orderId}')">
                                    <i class="fas fa-print"></i>
                                </button>
                                <button class="btn-row-action pdf" title="Download PDF" onclick="downloadInvoicePDFDirect('${order.orderId}')">
                                    <i class="fas fa-file-pdf"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                `;
            }).join('');
        }
        // Find and trigger receipt modal for history reprint
        function reprintInvoice(orderId) {
            const order = ordersHistoryList.find(o => o.orderId === orderId);
            if (!order) {
                showToast('Order invoice details not found.', 'error');
                return;
            }
            showInvoiceModal(order);
        }
        // Direct PDF download without opening modal (for row actions)
        function downloadInvoicePDFDirect(orderId) {
            const order = ordersHistoryList.find(o => o.orderId === orderId);
            if (!order) {
                showToast('Order invoice details not found.', 'error');
                return;
            }
            // Temporarily build modal HTML content inside offscreen area to generate PDF
            showInvoiceModal(order);
            downloadInvoicePDF();
            closeModal('modalInvoice');
        }
        // Mobile Sidebar menu toggler helper
        function toggleMobileSidebar() {
            const sidebar = document.querySelector('.sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            if (sidebar && overlay) {
                const isOpen = sidebar.classList.toggle('active');
                overlay.classList.toggle('active', isOpen);
            }
        }
    