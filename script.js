// Markiert das Dokument als JavaScript-fähig, damit die Einblend-Elemente
// nur dann versteckt starten, wenn das Skript auch läuft.
document.documentElement.classList.add('js');

// Elemente einblenden, sobald sie sichtbar werden.
// IntersectionObserver ist sparsam und braucht kein Scroll-Event.
const items = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // nur einmal animieren
      }
    });
  }, { threshold: 0.15 });

  items.forEach((el) => observer.observe(el));
} else {
  // Alte Browser: einfach alles sofort zeigen
  items.forEach((el) => el.classList.add('is-visible'));
}
