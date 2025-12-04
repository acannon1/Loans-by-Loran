// Loans by Loran - Thank You Page JS

// Set dynamic year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// Optional: Track conversions in GA4 automatically
// Fires on thank-you page load as a conversion event
if (typeof gtag === "function") {
  gtag('event', 'form_submission', {
    'event_category': 'lead',
    'event_label': 'Contact Form Submitted',
    'value': 1
  });
}
