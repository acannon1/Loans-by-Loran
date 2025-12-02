// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.main-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });
  }

  // Dynamic year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // AI widget toggle
  const aiToggle = document.querySelector('.ai-widget-toggle');
  const aiWidget = document.getElementById('ai-widget');
  const aiClose = document.querySelector('.ai-widget-close');

  if (aiToggle && aiWidget) {
    aiToggle.addEventListener('click', () => {
      aiWidget.classList.toggle('open');
    });
  }

  if (aiClose && aiWidget) {
    aiClose.addEventListener('click', () => {
      aiWidget.classList.remove('open');
    });
  }

  // Reviews placeholder:
  // If you later build a Netlify function that fetches Zillow reviews,
  // you can call it here and populate #reviews-list with the results.
  //
  // Example (pseudo-code):
  //
  // fetch('/.netlify/functions/zillow-reviews')
  //   .then(res => res.json())
  //   .then(data => {
  //     const list = document.getElementById('reviews-list');
  //     list.innerHTML = '';
  //     data.reviews.forEach(r => {
  //       const div = document.createElement('div');
  //       div.className = 'review-item';
  //       div.innerHTML = `
  //         <p><strong>${r.reviewer}</strong> • ${r.rating}★</p>
  //         <p>${r.text}</p>
  //       `;
  //       list.appendChild(div);
  //     });
  //   })
  //   .catch(() => {
  //     const list = document.getElementById('reviews-list');
  //     if (list) list.innerHTML = '<p class="loading">Unable to load reviews at this time.</p>';
  //   });
});
