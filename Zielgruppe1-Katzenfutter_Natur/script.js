document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const nextBtn = document.getElementById('nextBtn');

    if (carousel && nextBtn) {
        nextBtn.addEventListener('click', () => {
            const firstCard = carousel.querySelector('.product-card');
            
            if (firstCard) {
                // Breite der Karte + Gap (Abstand) berechnen
                const cardWidth = firstCard.offsetWidth;
                const style = window.getComputedStyle(carousel);
                const gap = parseInt(style.gap) || parseInt(style.columnGap) || 20;
                
                const scrollAmount = cardWidth + gap;

                // Aktuelle Scroll-Position und maximal möglicher Scroll-Bereich
                const currentScroll = carousel.scrollLeft;
                const maxScroll = carousel.scrollWidth - carousel.clientWidth;

                // Wenn wir fast am Ende sind (Toleranz von 10px), springe zum Anfang
                if (currentScroll >= maxScroll - 10) {
                    carousel.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    // Ansonsten scrolle um ein Produkt weiter
                    carousel.scrollBy({
                        left: scrollAmount,
                        behavior: 'smooth'
                    });
                }
            }
        });
    } else {
        // Hilfreiche Fehlermeldung, falls die IDs im HTML doch anders heißen
        console.error("JavaScript Fehler: Element mit ID 'carousel' oder 'nextBtn' nicht gefunden.");
    }
});