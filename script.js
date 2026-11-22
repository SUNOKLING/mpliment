const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); });
  cards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
}));
document.getElementById('year').textContent = new Date().getFullYear();
