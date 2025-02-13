import './js/modal.js';
import './js/mobile-menu.js';

document.addEventListener('DOMContentLoaded', async () => {
  const elements = document.querySelectorAll('[data-include]');
  const fetches = Array.from(elements).map(async el => {
    const file = el.getAttribute('data-include');

    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Помилка завантаження ${file}`);
      const data = await response.text();
      el.outerHTML = data;
    } catch (error) {
      console.error(error);
    }
  });

  await Promise.all(fetches);

  const event = new Event('partialsLoaded');
  document.dispatchEvent(event);
});
