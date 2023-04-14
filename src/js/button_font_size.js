const increaseButton = document.getElementById('font-increase-button-1');
const decreaseButton = document.getElementById('font-decrease-button-1');

// Add event listeners to the buttons
increaseButton.addEventListener('click', function() {
  // Increase the font size of the body element
  document.body.style.fontSize = 'larger';
});

decreaseButton.addEventListener('click', function() {
  // Decrease the font size of the body element
  document.body.style.fontSize = 'smaller';
});