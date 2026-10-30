// MOBILE NAVBAR
const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    });
  });
}

// SCROLL ANIMATION
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach(function (element) {
  observer.observe(element);
});

const changingText = document.getElementById("changing-text");
const words = [
  "brands memorable.",
  "brand identities.",
  "brand presentations.",
  "social media.",
  "creative campaigns.",
  "digital experiences."
];

if (changingText) {
  let index = 0;

  setInterval(() => {
    changingText.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % words.length;
      changingText.textContent = words[index];
      changingText.classList.remove("fade-out");
    }, 300);
  }, 1000);
}

// AUTOMATED CHATBOT
const chatbotWidget = document.getElementById("chatbotWidget");
const chatbotLaunch = document.getElementById("chatbotLaunch");
const chatbotClose = document.getElementById("chatbotClose");
const chatbotForm = document.getElementById("chatbotForm");
const chatbotInput = document.getElementById("chatbotInput");
const chatbotBody = document.getElementById("chatbotBody");
const chatbotOptions = document.querySelectorAll(".chatbot-options button");

function addChatMessage(message, isUser = false) {
  if (!chatbotBody) return;

  const messageElement = document.createElement("div");
  messageElement.className = `chatbot-message ${isUser ? "user" : "bot"}`;
  messageElement.textContent = message;
  chatbotBody.appendChild(messageElement);
  chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

function getBotReply(message) {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("brand") || lowerMessage.includes("branding")) {
    return "Perfect! We design memorable brand identities and visual systems that help businesses stand out.";
  }

  if (lowerMessage.includes("photo") || lowerMessage.includes("camera") || lowerMessage.includes("shoot")) {
    return "We can create a tailored photography session for your brand, product, or event. Tell us the vibe and purpose.";
  }

  if (lowerMessage.includes("video") || lowerMessage.includes("videography")) {
    return "Our videography service includes brand films, social media storytelling, and event coverage with a cinematic look.";
  }

  if (lowerMessage.includes("event") || lowerMessage.includes("coverage")) {
    return "Absolutely. We support event coverage, creative direction, and visual storytelling from planning to execution.";
  }

  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return "Hello! Welcome to Adkoodo. How can we help your brand grow today?";
  }

  if (lowerMessage.includes("price") || lowerMessage.includes("quote") || lowerMessage.includes("cost")) {
    return "We create custom pricing based on your project scope, timeline, and deliverables. Share a few details and we’ll guide you.";
  }

  return "Thanks for reaching out! We’d love to learn more about your project and help build something memorable.";
}

if (chatbotLaunch && chatbotWidget) {
  chatbotLaunch.addEventListener("click", function () {
    chatbotWidget.classList.toggle("open");
  });
}

if (chatbotClose && chatbotWidget) {
  chatbotClose.addEventListener("click", function () {
    chatbotWidget.classList.remove("open");
  });
}

chatbotOptions.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedText = button.dataset.option || "I need help";
    addChatMessage(selectedText, true);

    setTimeout(function () {
      addChatMessage(getBotReply(selectedText));
    }, 400);
  });
});

if (chatbotForm && chatbotInput) {
  chatbotForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = chatbotInput.value.trim();
    if (!text) return;

    addChatMessage(text, true);
    chatbotInput.value = "";

    setTimeout(function () {
      addChatMessage(getBotReply(text));
    }, 400);
  });
}

window.addEventListener("load", function () {
  if (chatbotWidget) {
    setTimeout(function () {
      chatbotWidget.classList.add("open");
    }, 700);
  }
});

