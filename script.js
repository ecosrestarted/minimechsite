// script.js

// Data bikes for shop page
const bikes = [
  {
    id: 1,
    title: "Yamaha PW50",
    price: "€550",
    status: "Tweedehands",
    desc: "Kleine, betrouwbare minibike, perfect voor beginners en kinderen.",
    img: "https://cdn.pixabay.com/photo/2016/04/13/19/41/motorcycle-1327405_960_720.jpg"
  },
  {
    id: 2,
    title: "Honda Monkey Z50",
    price: "€750",
    status: "Nieuw",
    desc: "Iconische minibike met vintage stijl en moderne prestaties.",
    img: "https://cdn.pixabay.com/photo/2018/01/29/08/47/motorcycle-3116934_960_720.jpg"
  }
];

function renderBikes(gridId, modalBgId, modalIds) {
  const grid = document.getElementById(gridId);
  if (!grid) return; // Not on shop page

  const modalBg = document.getElementById(modalBgId);
  const modalClose = modalBg.querySelector('.modal-close');
  const modalImg = modalBg.querySelector('.modal-img');
  const modalTitle = modalBg.querySelector('.modal-title');
  const modalDesc = modalBg.querySelector('.modal-desc');
  const modalPrice = modalBg.querySelector('.modal-price');
  const modalStatus = modalBg.querySelector('.modal-status');

  // Render cards
  grid.innerHTML = '';
  bikes.forEach(bike => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-id', bike.id);
    card.innerHTML = `
      <img src="${bike.img}" alt="${bike.title}" />
      <div class="card-body">
        <h3 class="card-title">${bike.title}</h3>
        <p class="card-price">${bike.price}</p>
      </div>
    `;
    card.addEventListener('click', () => openModal(bike));
    grid.appendChild(card);
  });

  // Open modal with details
  function openModal(bike) {
    modalImg.src = bike.img;
    modalImg.alt = bike.title;
    modalTitle.textContent = bike.title;
    modalDesc.textContent = bike.desc;
    modalPrice.textContent = bike.price;
    modalStatus.textContent = bike.status;
    modalBg.classList.add('active');
  }

  // Close modal
  function closeModal() {
    modalBg.classList.remove('active');
  }
  modalClose.addEventListener('click', closeModal);
  modalBg.addEventListener('click', e => {
    if (e.target === modalBg) closeModal();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Run renderBikes only if on shop page (has stock-grid)
  if (document.getElementById('stock-grid')) {
    renderBikes('stock-grid', 'modal-bg', {
      img: 'modal-img',
      title: 'modal-title',
      desc: 'modal-desc',
      price: 'modal-price',
      status: 'modal-status',
    });
  }
});
