document.addEventListener('DOMContentLoaded', () => {
    // Filtro de búsqueda por especies de tiburones
    const searchInput = document.querySelector('#searchInput');
    const speciesCards = document.querySelectorAll('.species');

    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase();
        speciesCards.forEach(card => {
            const speciesName = card.querySelector('h3').textContent.toLowerCase();
            if (speciesName.includes(searchValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Cambio de tema oscuro/claro
    const toggleThemeBtn = document.querySelector('#toggleTheme');
    const body = document.body;

    toggleThemeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
    });
});
