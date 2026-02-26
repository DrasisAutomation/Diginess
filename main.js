// ========== BAG MANAGEMENT ==========
let bag = JSON.parse(localStorage.getItem('diginess_bag')) || [];

function saveBag() {
  localStorage.setItem('diginess_bag', JSON.stringify(bag));
}

function updateBagUI() {
  const bagCountElement = document.getElementById('bagCount');
  const bagBody = document.getElementById('bagBody');
  const bagFooter = document.getElementById('bagFooter');
  
  if (!bagCountElement || !bagBody) return;
  
  const totalItems = bag.reduce((sum, i) => sum + i.quantity, 0);
  bagCountElement.textContent = totalItems;

  if (bag.length === 0) {
    bagBody.innerHTML = '<div class="bag-empty">Your bag is empty</div>';
    if (bagFooter) bagFooter.innerHTML = '';
    return;
  }

  let bagHTML = '';
  let totalAmount = 0;
  
  bag.forEach((item, idx) => {
    const itemTotal = item.quantity * item.priceNum;
    totalAmount += itemTotal;
    
    bagHTML += `
      <div class="bag-item">
        <img src="${item.img}" alt="${item.name}">
        <div class="bag-item-info">
          <span class="bag-item-title">${item.name}</span>
          <span class="bag-item-price">${item.price}</span>
          <div class="bag-quantity">
            <button class="bag-qty-btn" onclick="changeQty(${idx}, -1)">−</button>
            <span class="bag-qty-num">${item.quantity}</span>
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
      <button class="btn-primary" style="background:var(--primary); color:#000;" onclick="alert('Checkout coming soon!')">
        <i class="fas fa-credit-card"></i> Checkout
      </button>
    `;
  }
}

function changeQty(index, delta) {
  const newQty = bag[index].quantity + delta;
  if (newQty < 1) {
    removeFromBag(index);
  } else {
    bag[index].quantity = newQty;
    bag[index].priceNum = productData.find(p => p.name === bag[index].name)?.priceNum || 0;
    saveBag();
    updateBagUI();
  }
}

function removeFromBag(index) {
  bag.splice(index, 1);
  saveBag();
  updateBagUI();
}

function addToBag(name, price, img) {
  const product = productData.find(p => p.name === name);
  const priceNum = product ? product.priceNum : 0;
  
  const existing = bag.find(item => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    bag.push({ name, price, img, quantity: 1, priceNum });
  }
  saveBag();
  updateBagUI();
}

function openBag() {
  document.getElementById('bagOverlay').classList.add('active');
  document.getElementById('bagSidebar').classList.add('active');
}

function closeBag() {
  document.getElementById('bagOverlay').classList.remove('active');
  document.getElementById('bagSidebar').classList.remove('active');
}

// ========== MENU MANAGEMENT ==========
function openMenu() {
  document.getElementById('menuOverlay').classList.add('active');
  document.getElementById('menuSidebar').classList.add('active');
}

function closeMenu() {
  document.getElementById('menuOverlay').classList.remove('active');
  document.getElementById('menuSidebar').classList.remove('active');
}

// ========== SEARCH MANAGEMENT ==========
function openSearch() {
  document.getElementById('searchOverlay').classList.add('active');
  setTimeout(() => document.getElementById('searchInput')?.focus(), 100);
}

function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('active');
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  document.getElementById('searchResults').innerHTML = '';
}

function handleSearch() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const res = document.getElementById('searchResults');
  
  if (!q) {
    res.innerHTML = '';
    return;
  }
  
  const matches = productData.filter(p => p.name.toLowerCase().includes(q));
  
  if (matches.length) {
    res.innerHTML = matches.map(m => 
      `<div class="search-result-item" onclick="selectSearchItem('${m.slug}')">${m.name}</div>`
    ).join('');
  } else {
    res.innerHTML = '<div class="no-results">No products found</div>';
  }
}

function selectSearchItem(slug) {
  window.location.href = '/product-detail.html?product=' + slug;
}

// ========== UTILITY FUNCTIONS ==========
function goToProduct(slug) {
  window.location.href = '/product-detail.html?product=' + slug;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  updateBagUI();
  
  // ESC key handler
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeSearch();
      closeBag();
      closeMenu();
    }
  });
});