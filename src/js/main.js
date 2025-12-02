// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      header.classList.toggle("nav-open");
    });
  }

  // Update copyright year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});

async function loadZillowReviews() {
  const container = document.getElementById("reviews-container");
  if (!container) return;

  try {
    const res = await fetch("https://mortgageapi.zillow.com/reviews?screenname=loran089");
    const data = await res.json();

    if (!data.reviews || data.reviews.length === 0) {
      container.innerHTML = "<p>No reviews available yet.</p>";
      return;
    }

    // Show the 3 latest reviews
    const latest = data.reviews.slice(0, 3);

    container.innerHTML = latest.map(review => `
      <div class="review-card">
        <div class="review-rating">
          ${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}
        </div>
        <div class="review-date">${new Date(review.date).toLocaleDateString()}</div>
        <div class="review-comment">"${review.comment}"</div>
        <div class="review-author" style="margin-top: .6rem; font-weight: 600;">
          — ${review.reviewerName || "Verified Client"}
        </div>
      </div>
    `).join("");

  } catch (error) {
    console.error("Error loading Zillow reviews:", error);
    container.innerHTML = "<p>Unable to load reviews right now.</p>";
  }
}

// Load reviews on page load
document.addEventListener("DOMContentLoaded", loadZillowReviews);

// AI Chat Widget Logic

const chatBtn = document.getElementById("ai-chat-button");
const chatBox = document.getElementById("ai-chat-widget");
const chatClose = document.getElementById("chat-close");
const chatSend = document.getElementById("chat-send");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

chatBtn.addEventListener("click", () => {
  chatBox.style.display = "flex";
});

chatClose.addEventListener("click", () => {
  chatBox.style.display = "none";
});

chatSend.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  chatInput.value = "";

  // ❗ DEMO AI RESPONSE — Replace this with your API call later
  setTimeout(() => {
    addMessage("Thanks for your message! A full AI-powered version will be connected soon. I can help answer questions about mortgages, loans, credit, or the process.", "ai");
  }, 600);
}

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
