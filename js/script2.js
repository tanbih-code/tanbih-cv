// This file can be used for any future interactive features.
// For a simple CV like this, JS is not needed.

document.addEventListener('DOMContentLoaded', () => {
    // Example: You could add a button that toggles between light and dark mode.
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
});