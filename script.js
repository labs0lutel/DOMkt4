const slider = document.querySelector('.slider');
const handle = document.querySelector('.slider-handle');
const value = document.querySelector('.slider-value');
let isDragging = false;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  updateSlider(e);
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    updateSlider(e);
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

function updateSlider(e) {
  const sliderRect = slider.getBoundingClientRect();
  let x = e.clientX - sliderRect.left;
  x = Math.max(0, x);
  x = Math.min(sliderRect.width, x);

  handle.style.left = `${x - 10}px`;

  const percent = x / sliderRect.width;
  const range = 100;
  const val = Math.round(percent * range);

  value.textContent = val;
}
