// script.js

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.transform = 'scale(1.05)';
            section.style.transition = 'transform 0.3s';
        });

        section.addEventListener('mouseout', () => {
            section.style.transform = 'scale(1)';
        });
    });

    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#FF79C6';
            link.style.transition = 'color 0.3s';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = '#03DAC6';
        });
    });
});
