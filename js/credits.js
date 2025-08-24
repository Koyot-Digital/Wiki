// Expand / collapse descriptions on individual cards
document.querySelectorAll('.dev-card').forEach(card => {
    card.addEventListener('click', () => {
        const desc = card.querySelector('.description');
        desc.style.display = desc.style.display === "block" ? "none" : "block";
    });
});
