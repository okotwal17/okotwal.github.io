// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animated typing effect for header text
const typeEffect = (element, text, speed) => {
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
};

const headerTitle = document.querySelector('header h1');
headerTitle.textContent = ''; // Clear initial text
typeEffect(headerTitle, 'Om Kotwal', 150);

// Fade-in effects for sections on scroll
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden'); // Initially hide sections
    observer.observe(section);
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggle.textContent = document.body.classList.contains('dark-theme')
        ? 'Switch to Light Mode'
        : 'Switch to Dark Mode';
});
