document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    let currentPage = window.location.pathname.split('/').pop();
    if (currentPage === '') {
        currentPage = 'index.html';
    }

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        link.classList.remove('text-navy');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    const downloadButton = document.getElementById('download-pdf');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            // Set font styles
            doc.setFont('Inter', 'normal');

            // Add content to the PDF
            doc.text("Resego Mmolawa", 20, 20);
            doc.text("Aspiring IT Professional", 20, 30);
            
            doc.text("Email: resego.mmolawa@example.com", 20, 40);
            doc.text("Phone: (123) 456-7890", 20, 50);
            doc.text("LinkedIn: linkedin.com/in/resego-mmolawa", 20, 60);

            doc.text("Education", 20, 80);
            doc.text("Bachelor of Information Technology in Business Systems", 20, 90);
            doc.text("IIE Rosebank College | Feb 2024 – Dec 2026", 20, 100);

            doc.text("Experience", 20, 120);
            doc.text("Junior Cloud Engineer - Praesignis", 20, 130);
            doc.text("Sep 2021 – Nov 2022", 20, 140);

            // Save the PDF
            doc.save('Resego-Mmolawa-Resume.pdf');
        });
    }

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');

    const setDarkMode = (isDark) => {
        if (isDark) {
            body.classList.add('dark');
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        } else {
            body.classList.remove('dark');
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        }
    };

    // Check for saved preference, otherwise use system preference
    const userPreference = localStorage.getItem('darkMode');
    if (userPreference === 'enabled') {
        setDarkMode(true);
    } else if (userPreference === 'disabled') {
        setDarkMode(false);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true);
    }

    darkModeToggle.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark');
        setDarkMode(isDark);
        localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    });

    // Listen for changes in system preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('darkMode') === null) {
            setDarkMode(e.matches);
        }
    });

    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
});
