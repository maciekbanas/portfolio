const filters = [...document.querySelectorAll('[data-filter]')];
const artworks = [...document.querySelectorAll('.artwork')];
const empty = document.querySelector('.empty');
const status = document.querySelector('#gallery-status');
function filterGallery(category) {
  let count = 0;
  for (const work of artworks) {
    work.hidden = category !== 'all' && work.dataset.category !== category;
    if (!work.hidden) count++;
  }
  for (const button of filters) {
    const selected = button.dataset.filter === category;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  }
  empty.hidden = count > 0;
  status.textContent = `Liczba wyświetlonych prac: ${count}.`;
}
filters.forEach(button => button.addEventListener('click', () => filterGallery(button.dataset.filter)));
document.querySelector('#show-all').addEventListener('click', () => {
  filterGallery('all');
  filters[0].focus();
});
const dialog = document.querySelector('.lightbox');
const image = dialog.querySelector('img');
let currentWork;
function displayWork(work) {
  currentWork = work;
  const source = work.querySelector('img');
  image.src = source.getAttribute('src');
  image.alt = source.alt;
  document.querySelector('#lightbox-title').textContent = work.dataset.title;
  document.querySelector('#lightbox-category').textContent = work.dataset.categoryLabel;
}
function moveWork(direction) {
  const visible = artworks.filter(work => !work.hidden).map(work => work.querySelector('.art-image'));
  const index = visible.indexOf(currentWork);
  displayWork(visible[(index + direction + visible.length) % visible.length]);
}
document.querySelectorAll('.art-image').forEach(work => work.addEventListener('click', () => {
  displayWork(work);
  dialog.showModal();
  document.body.classList.add('modal-open');
}));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.querySelector('.previous').addEventListener('click', () => moveWork(-1));
dialog.querySelector('.next').addEventListener('click', () => moveWork(1));
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    moveWork(event.key === 'ArrowRight' ? 1 : -1);
  }
});
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
document.querySelector('#year').textContent = new Date().getFullYear();
