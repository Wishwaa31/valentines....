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
  // Show GIF dynamically after clicking YES
  const gifContainer = document.getElementById("gif-container");
  gifContainer.innerHTML = `
    <img 
      src="https://media1.tenor.com/m/HTxTrwitNJ0AAAAC/samantha-dhanush.gif"
      alt="Valentine GIF"
      width="300"
    />
  `;

  // Hide buttons after click
  document.querySelector(".yes-button").style.display = "none";
  document.querySelector(".no-button").style.display = "none";
}
