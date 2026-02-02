let messageIndex = 0;

const messages = [
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Last chance!",
  "Okay… 😢"
];

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );

  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  // Redirect to YES page
  window.location.href = "yes_page.html";
}
