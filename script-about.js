document.addEventListener('DOMContentLoaded', function () {
    // Navigation Burger Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    // Toggle navigation menu visibility on burger click
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Hide the menu if a nav link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });

    // Typing Effect for Header Text
    const text = "Web Developer | Crafting modern websites with a professional touch."; 
    const typingSpeed = 100;
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typed-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }
    typeWriter(); // Start typing effect

    // Service Carousel
    const services = document.querySelectorAll('.service');
    const serviceImage = document.getElementById('service-image');
    const prevButton = document.getElementById('prev-arrow');
    const nextButton = document.getElementById('next-arrow');
    let currentIndex = 0;
    let autoSlide;

    // Function to update service and image
    function updateService(index) {
        services.forEach((service, idx) => {
            if (idx === index) {
                service.classList.add('active');
                const newImage = service.getAttribute('data-image');
                serviceImage.src = newImage;
                serviceImage.alt = service.querySelector('.service-title').textContent;
            } else {
                service.classList.remove('active');
            }
        });
    }

    // Next Service
    function nextService() {
        currentIndex = (currentIndex + 1) % services.length;
        updateService(currentIndex);
    }

    // Previous Service
    function prevService() {
        currentIndex = (currentIndex - 1 + services.length) % services.length;
        updateService(currentIndex);
    }

    // Add event listeners for manual navigation
    nextButton.addEventListener('click', nextService);
    prevButton.addEventListener('click', prevService);

    // Keyboard accessibility for carousel navigation
    nextButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            nextService();
        }
    });
    prevButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            prevService();
        }
    });

    // Auto-run carousel every 5 seconds
    autoSlide = setInterval(nextService, 5000);

    // Pause carousel on hover
    document.querySelector('#services').addEventListener('mouseover', () => {
        clearInterval(autoSlide);
    });

    // Resume carousel when hover ends
    document.querySelector('#services').addEventListener('mouseout', () => {
        autoSlide = setInterval(nextService, 5000);
    });

    // Initialize the first service
    updateService(currentIndex);

    // Handle Contact Button Clicks
    const contactButtons = document.querySelectorAll('.contact-button');
    contactButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Contact form coming soon!'); // Placeholder action
        });
    });

     // Scroll Animation for Timeline
     const timelineItems = document.querySelectorAll('.timeline-item');

     const isInViewport = (el) => {
         const rect = el.getBoundingClientRect();
         return (
             rect.top >= 0 &&
             rect.left >= 0 &&
             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
         );
     };
 
     const runAnimation = () => {
         timelineItems.forEach(item => {
             if (isInViewport(item)) {
                 item.classList.add('show');
             }
         });
     };
 
     // Add 'show' class when in viewport
     window.addEventListener('scroll', runAnimation);
     runAnimation();
});