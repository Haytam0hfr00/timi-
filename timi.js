// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(108, 99, 255, 0.95)';
        } else {
            navbar.style.backgroundColor = 'var(--primary-color)';
        }
    });

    // Image upload functionality
    const uploadArea = document.querySelector('.upload-area');
    const imageUpload = document.getElementById('imageUpload');

    if (uploadArea && imageUpload) {
        uploadArea.addEventListener('click', () => {
            imageUpload.click();
        });

        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('upload-area-drag');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('upload-area-drag');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('upload-area-drag');
            handleFiles(e.dataTransfer.files);
        });

        imageUpload.addEventListener('change', (e) => {
            handleFiles(e.target.files);
        });
    }

    function handleFiles(files) {
        const file = files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.classList.add('uploaded-image', 'img-fluid', 'mt-3');
                uploadArea.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation on scroll
    const animateElements = document.querySelectorAll('.animate-fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(element => {
        observer.observe(element);
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });

    // Form validation for CV builder
    const cvForm = document.getElementById('cvForm');
    if (cvForm) {
        cvForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add form validation and submission logic here
            alert('CV submission functionality will be implemented soon!');
        });
    }

    // Dynamic content loading
    function loadContent(section) {
        // Add dynamic content loading logic here
        console.log(`Loading content for ${section}`);
    }

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
