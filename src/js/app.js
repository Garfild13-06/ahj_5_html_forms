const button = document.getElementById('popoverButton');
const popover = document.getElementById('popover');

button.addEventListener('click', () => {
  popover.classList.toggle('active');
});
