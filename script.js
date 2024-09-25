document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("videoElement");

  // Play video automatically when page loads
  video.play();

  window.handleClick = function (answer) {
    const message = document.getElementById("message");
    
    if (answer === 'yes') {
      message.textContent = "You clicked Yes!";
      message.style.backgroundColor = "green";
      // Add additional Yes action here
    } else if (answer === 'no') {
      message.textContent = "You clicked No!";
      message.style.backgroundColor = "red";
      // Add additional No action here
    }
  };
});
