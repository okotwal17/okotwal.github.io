document.addEventListener('DOMContentLoaded', () => {
    // Animated typing effect for header text
    const nameTitle = document.getElementById('name-title');
    const originalText = nameTitle.textContent;
    nameTitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < originalText.length) {
            nameTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Fade-in effect for sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-card').forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        observer.observe(section);
    });

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        themeToggle.textContent = body.classList.contains('dark-theme') 
            ? 'Switch to Light Mode' 
            : 'Switch to Dark Mode';
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Interactive skill bars
    const skills = [
        { name: 'Web Development', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Problem Solving', level: 95 }
    ];

    const skillsSection = document.getElementById('skills');
    const skillsList = skillsSection.querySelector('ul');

    skills.forEach(skill => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${skill.name}</span>
            <div class="skill-bar">
                <div class="skill-level" style="width: 0%"></div>
            </div>
        `;
        skillsList.appendChild(li);

        setTimeout(() => {
            li.querySelector('.skill-level').style.width = `${skill.level}%`;
        }, 200);
    });
});
