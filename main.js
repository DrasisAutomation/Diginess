// ========== GLOBAL VARIABLES ==========
var bag = [];
var currentUser = null;

// ========== FIREBASE INITIALIZATION ==========
if (typeof firebase !== 'undefined' && firebase.apps && firebase.apps.length) {
  console.log('Firebase already initialized');
}

// ========== BAG MANAGEMENT WITH FIRESTORE ==========

// Load cart from Firestore
async function loadCartFromFirestore(user) {
  if (!user || !firebase.firestore) return false;
  
  try {
    const cartRef = firebase.firestore().collection('carts').doc(user.uid);
    const cartDoc = await cartRef.get();
    
    if (cartDoc.exists) {
      const cartData = cartDoc.data();
      if (cartData.items && Array.isArray(cartData.items)) {
        bag = cartData.items;
        saveBagToLocal(); // Save to localStorage as backup
        updateBagUI();
        return true;
      }
    } else {
      // Create empty cart document
      await cartRef.set({ 
        items: [], 
        userId: user.uid, 
        email: user.email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      bag = [];
      saveBagToLocal();
      updateBagUI();
    }
  } catch (error) {
    console.error('Error loading cart from Firestore:', error);
    // Fallback to localStorage
    loadBagFromLocal();
  }
  return false;
}

// Save cart to Firestore
async function saveCartToFirestore() {
  if (!currentUser || !firebase.firestore) return;
  
  try {
    const cartRef = firebase.firestore().collection('carts').doc(currentUser.uid);
    await cartRef.set({
      items: bag,
      userId: currentUser.uid,
      email: currentUser.email,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    console.log('Cart saved to Firestore');
  } catch (error) {
    console.error('Error saving cart to Firestore:', error);
  }
}

// Save bag to localStorage
function saveBagToLocal() {
  localStorage.setItem('diginess_bag', JSON.stringify(bag));
  console.log('Bag saved to localStorage:', bag);
}

// Load bag from localStorage
function loadBagFromLocal() {
  const savedBag = localStorage.getItem('diginess_bag');
  bag = savedBag ? JSON.parse(savedBag) : [];
  updateBagUI();
}

// ========== FIXED: Clear bag completely ==========
function clearBagCompletely() {
  // Clear the bag array
  bag = [];
  
  // Clear from localStorage
  localStorage.removeItem('diginess_bag');
  
  // Clear from Firestore if user is logged in
  if (currentUser && firebase.firestore) {
    firebase.firestore().collection('carts').doc(currentUser.uid).delete()
      .then(() => console.log('Cart cleared from Firestore'))
      .catch(err => console.log('Error clearing cart from Firestore:', err));
  }
  
  // Update UI
  updateBagUI();
  
  console.log('Bag completely cleared');
}

// Clear bag on logout
function clearBagOnLogout() {
  clearBagCompletely();
}

// Update bag UI
function updateBagUI() {
  const bagCountElement = document.getElementById('bagCount');
  const bagBody = document.getElementById('bagBody');
  const bagFooter = document.getElementById('bagFooter');
  
  if (!bagCountElement || !bagBody) return;
  
  const totalItems = bag.reduce((sum, i) => sum + (i.quantity || 1), 0);
  bagCountElement.textContent = totalItems;

  if (bag.length === 0) {
    bagBody.innerHTML = '<div class="bag-empty">Your bag is empty</div>';
    if (bagFooter) bagFooter.innerHTML = '';
    return;
  }

  let bagHTML = '';
  let totalAmount = 0;
  
  bag.forEach((item, idx) => {
    const priceNum = item.priceNum || parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
    const quantity = item.quantity || 1;
    const itemTotal = priceNum * quantity;
    totalAmount += itemTotal;
    
    bagHTML += `
      <div class="bag-item">
        <img src="${item.img}" alt="${item.name}">
        <div class="bag-item-info">
          <span class="bag-item-title">${item.name}</span>
          <span class="bag-item-price">${item.price}</span>
          <div class="bag-quantity">
            <button class="bag-qty-btn" onclick="changeQty(${idx}, -1)">−</button>
            <span class="bag-qty-num">${quantity}</span>
            <button class="bag-qty-btn" onclick="changeQty(${idx}, 1)">+</button>
          </div>
          <span class="bag-item-remove" onclick="removeFromBag(${idx})">Remove</span>
        </div>
      </div>
    `;
  });

  bagBody.innerHTML = bagHTML;
  
  if (bagFooter) {
    bagFooter.innerHTML = `
      <div class="bag-total">
        <span>Total:</span>
        <span>₹${totalAmount.toLocaleString()}</span>
      </div>
      <button class="btn-primary" style="background:var(--primary); color:#000;" onclick="proceedToCheckout()">
        <i class="fas fa-credit-card"></i> Checkout
      </button>
    `;
  }
}

// Check if user is signed in
function isUserSignedIn() {
  return currentUser !== null;
}

// Show sign-in prompt
function showSignInPrompt(action) {
  // Remove existing notification if any
  const existing = document.querySelector('.signin-prompt');
  if (existing) existing.remove();
  
  const prompt = document.createElement('div');
  prompt.className = 'signin-prompt';
  prompt.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    background: #1a1a1a;
    border: 1px solid var(--primary);
    border-radius: 12px;
    padding: 16px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 1000;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    backdrop-filter: blur(10px);
    animation: slideUp 0.3s ease;
    max-width: 90%;
    flex-wrap: wrap;
    justify-content: center;
  `;
  
  prompt.innerHTML = `
    <span class="bag-text" style="color: #fff; font-size: 13px; letter-spacing: 0.5px;">
      <i class="fas fa-exclamation-circle" style="color: var(--primary); margin-right: 8px;"></i>
      Please sign in to ${action}
    </span>
    <a href="account.html" style="
      background: var(--primary);
      color: #000;
      padding: 10px 14px;
      border-radius: 40px;
      font-size: 9px;
      letter-spacing: .12em;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 500;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: opacity 0.3s;
    " onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
      <i class="fas fa-sign-in-alt"></i> Sign In
    </a>
    <button onclick="this.parentElement.remove()" style="
      background: transparent;
      border: none;
      color: #888;
      font-size: 18px;
      cursor: pointer;
      display:none;
      padding: 5px;
    "><i class="fas fa-times"></i></button>
  `;
  
  document.body.appendChild(prompt);
  
  setTimeout(() => {
    if (prompt.parentElement) {
      prompt.style.animation = 'slideDown 0.3s ease';
      setTimeout(() => prompt.remove(), 300);
    }
  }, 5000);
}

// Add to bag with sign-in check
window.addToBag = function(name, price, img) {
  if (!isUserSignedIn()) {
    showSignInPrompt('add items to bag');
    event.stopPropagation();
    return false;
  }
  
  // Find product in productData if available
  let priceNum = 0;
  if (typeof productData !== 'undefined') {
    const product = productData.find(p => p.name === name);
    if (product) priceNum = product.priceNum;
  } else {
    priceNum = parseInt(price.replace(/[^0-9]/g, '')) || 0;
  }
  
  const existing = bag.find(item => item.name === name);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    bag.push({ name, price, img, quantity: 1, priceNum });
  }
  
  saveBagToLocal();
  if (currentUser) {
    saveCartToFirestore();
  }
  updateBagUI();
  
  // Show success message
  showNotification('Added to bag!');
  
  // Open bag sidebar
  openBag();
  
  // Prevent event bubbling
  event.stopPropagation();
  return false;
};

// Change quantity
window.changeQty = function(index, delta) {
  if (!isUserSignedIn()) {
    showSignInPrompt('modify your bag');
    closeBag();
    return;
  }
  
  if (!bag[index]) return;
  
  const newQty = (bag[index].quantity || 1) + delta;
  if (newQty < 1) {
    removeFromBag(index);
  } else {
    bag[index].quantity = newQty;
    saveBagToLocal();
    if (currentUser) {
      saveCartToFirestore();
    }
    updateBagUI();
  }
};

// Remove from bag
window.removeFromBag = function(index) {
  if (!isUserSignedIn()) {
    showSignInPrompt('modify your bag');
    closeBag();
    return;
  }
  
  bag.splice(index, 1);
  saveBagToLocal();
  if (currentUser) {
    saveCartToFirestore();
  }
  updateBagUI();
};

// ========== FIXED: Proceed to checkout ==========
window.proceedToCheckout = function() {
  if (!isUserSignedIn()) {
    showSignInPrompt('proceed to checkout');
    closeBag();
    return;
  }
  
  if (bag.length === 0) {
    showNotification('Your bag is empty');
    return;
  }
  
  // Save to localStorage before redirect
  saveBagToLocal();
  window.location.href = 'checkout.html';
};

// Checkout function (legacy)
window.checkout = function() {
  proceedToCheckout();
};

// Show notification
function showNotification(message) {
  // Remove existing notification if any
  const existing = document.querySelector('.bag-notification');
  if (existing) existing.remove();
  
  const notification = document.createElement('div');
  notification.className = 'bag-notification';
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary);
    color: #000;
    padding: 12px 24px;
    border-radius: 40px;
    font-size: 12px;
    letter-spacing: .12em;
    text-transform: uppercase;
    z-index: 1000;
    animation: slideUp 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideDown 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// Add animation styles
if (!document.getElementById('notification-styles')) {
  const style = document.createElement('style');
  style.id = 'notification-styles';
  style.textContent = `
    @keyframes slideUp {
      from { transform: translate(-50%, 100%); opacity: 0; }
      to { transform: translate(-50%, 0); opacity: 1; }
    }
    @keyframes slideDown {
      from { transform: translate(-50%, 0); opacity: 1; }
      to { transform: translate(-50%, 100%); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

// ========== MENU MANAGEMENT ==========
window.openMenu = function() {
  const overlay = document.getElementById('menuOverlay');
  const sidebar = document.getElementById('menuSidebar');
  if (overlay) overlay.classList.add('active');
  if (sidebar) sidebar.classList.add('active');
  return false;
};

window.closeMenu = function() {
  const overlay = document.getElementById('menuOverlay');
  const sidebar = document.getElementById('menuSidebar');
  if (overlay) overlay.classList.remove('active');
  if (sidebar) sidebar.classList.remove('active');
  return false;
};

// ========== SEARCH MANAGEMENT ==========
window.openSearch = function() {
  const overlay = document.getElementById('searchOverlay');
  if (overlay) {
    overlay.classList.add('active');
    setTimeout(() => {
      const input = document.getElementById('searchInput');
      if (input) {
        input.focus();
        input.value = ''; // Clear previous search
      }
    }, 100);
  }
  return false;
};

window.closeSearch = function() {
  const overlay = document.getElementById('searchOverlay');
  if (overlay) overlay.classList.remove('active');
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  const searchResults = document.getElementById('searchResults');
  if (searchResults) searchResults.innerHTML = '';
  return false;
};

// ========== BAG MANAGEMENT ==========
window.openBag = function() {
  const overlay = document.getElementById('bagOverlay');
  const sidebar = document.getElementById('bagSidebar');
  if (overlay) overlay.classList.add('active');
  if (sidebar) sidebar.classList.add('active');
  
  // Refresh bag UI
  updateBagUI();
  
  // If not signed in, show prompt in bag
  if (!isUserSignedIn() && bag.length > 0) {
    const bagBody = document.getElementById('bagBody');
    const bagFooter = document.getElementById('bagFooter');
    if (bagBody) {
      bagBody.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
          <i class="fas fa-lock" style="font-size: 40px; color: var(--primary); margin-bottom: 20px;"></i>
          <p style="color: #fff; margin-bottom: 20px; font-size: 14px;">Please sign in to view your bag</p>
          <a href="account.html" style="
            background: var(--primary);
            color: #000;
            padding: 12px 30px;
            border-radius: 40px;
            font-size: 11px;
            letter-spacing: .12em;
            text-transform: uppercase;
            text-decoration: none;
            font-weight: 500;
            display: inline-block;
          ">Sign In</a>
        </div>
      `;
      if (bagFooter) bagFooter.innerHTML = '';
    }
  }
  
  return false;
};

window.closeBag = function() {
  const overlay = document.getElementById('bagOverlay');
  const sidebar = document.getElementById('bagSidebar');
  if (overlay) overlay.classList.remove('active');
  if (sidebar) sidebar.classList.remove('active');
  return false;
};

// ========== FIXED SEARCH FUNCTIONALITY ==========
window.handleSearch = function() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  
  if (!searchInput || !searchResults) return;
  
  const query = searchInput.value.trim().toLowerCase();
  
  // Clear results if query is empty
  if (query.length === 0) {
    searchResults.innerHTML = '';
    return;
  }

  // Check if productData is available
  if (typeof productData === 'undefined' || !productData.length) {
    console.log('Product data not loaded yet');
    searchResults.innerHTML = '<div class="no-results">Loading products...</div>';
    return;
  }

  console.log('Searching for:', query);
  console.log('Available products:', productData.length);

  // Search in product names (case insensitive)
  const matches = productData.filter(product => 
    product.name.toLowerCase().includes(query)
  );

  console.log('Matches found:', matches.length);

  if (matches.length === 0) {
    searchResults.innerHTML = '<div class="no-results">No products found matching "' + query + '"</div>';
    return;
  }

  // Display results with better formatting
  let resultsHTML = '';
  matches.forEach(product => {
    resultsHTML += `
      <div class="search-result-item" onclick="selectSearchItem('${product.slug}')">
        <div style="display: flex; align-items: center; gap: 12px; cursor: pointer;">
          <img src="${product.img}" alt="${product.name}" style="width: 40px; height: 50px; object-fit: cover; border-radius: 4px; border: 1px solid #333;">
          <div>
            <div style="font-size: 13px; margin-bottom: 4px; color: #fff;">${product.name}</div>
            <div style="font-size: 11px; color: var(--primary);">${product.price}</div>
          </div>
        </div>
      </div>
    `;
  });
  
  searchResults.innerHTML = resultsHTML;
};

// ========== FIXED: Single selectSearchItem function ==========
window.selectSearchItem = function(slug) {
  console.log('Navigating to product:', slug);
  window.location.href = 'product-detail.html?product=' + slug;
  closeSearch();
};

// ========== PRODUCT NAVIGATION ==========
window.goToProduct = function(slug) {
  window.location.href = 'product-detail.html?product=' + slug;
  return false;
};

// ========== FIXED: AUTH STATE LISTENER ==========
if (typeof firebase !== 'undefined' && firebase.auth) {
  firebase.auth().onAuthStateChanged(async (user) => {
    const wasLoggedIn = currentUser !== null;
    currentUser = user;
    
    if (user) {
      console.log('User signed in:', user.email);
      await loadCartFromFirestore(user);
    } else {
      console.log('User signed out');
      if (wasLoggedIn) {
        // User just logged out - clear bag completely
        clearBagCompletely();
      } else {
        // No user, load from localStorage only
        loadBagFromLocal();
      }
    }
  });
} else {
  console.warn('Firebase auth not available, using localStorage only');
  loadBagFromLocal();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Load bag from localStorage as fallback
  loadBagFromLocal();
  
  // Debug: Check if productData is loaded
  console.log('DOM loaded - checking productData:', 
    typeof productData !== 'undefined' ? productData.length + ' products found' : 'productData not found');
  
  // ESC key handler
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeSearch();
      closeBag();
      closeMenu();
    }
  });
  
  // Close overlays when clicking on overlay
  const menuOverlay = document.getElementById('menuOverlay');
  if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMenu);
  }
  
  const bagOverlay = document.getElementById('bagOverlay');
  if (bagOverlay) {
    bagOverlay.addEventListener('click', closeBag);
  }
  
  // Close search when clicking outside results
  const searchOverlay = document.getElementById('searchOverlay');
  if (searchOverlay) {
    searchOverlay.addEventListener('click', function(e) {
      if (e.target === searchOverlay) {
        closeSearch();
      }
    });
  }
});