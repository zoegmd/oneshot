// context-menu.js

// Get the custom context menu elemente
const customMenu = document.getElementById("customMenu");

// Prevent the default right-click menu and show the custom one
document.addEventListener("contextmenu", function (event) {
  event.preventDefault(); // Prevent the default right-click menu (Google's context menu)

  // Position the custom menu at the mouse cursor
  customMenu.style.left = `${event.pageX}px`;
  customMenu.style.top = `${event.pageY}px`;
  
  // Show the custom menu
  customMenu.style.display = "block";
});

// Hide the custom menu when clicking anywhere else
document.addEventListener("click", function () {
  customMenu.style.display = "none";
});
