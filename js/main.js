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

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');

        // Save dark mode preference
        if (body.classList.contains('dark')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.removeItem('darkMode');
        }
    });
});
