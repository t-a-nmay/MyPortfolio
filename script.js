// Navigate to a page when a card is clicked
function navigateTo(page) {
    window.location.href = page;
}

// Highlight the active link in the navigation bar
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
