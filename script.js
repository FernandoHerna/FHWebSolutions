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
    const headerText = "Web Developer | Crafting modern websites with a professional touch."; 
    const typingSpeedHeader = 100;
    let i = 0;

    function typeWriterHeader() {
        if (i < headerText.length) {
            document.getElementById("typed-text").innerHTML += headerText.charAt(i);
            i++;
            setTimeout(typeWriterHeader, typingSpeedHeader);
        }
    }
    typeWriterHeader(); // Start typing effect for header

    // Typing Effect for About Section
    const aboutTextElement = document.getElementById('about-text');
    const aboutTextContent = aboutTextElement.innerHTML.trim(); // Get HTML content (including <br> tags)
    aboutTextElement.innerHTML = ''; // Clear content to start typing animation

    const typingDurationAbout = 6000; // 6 seconds
    const typingIntervalAbout = typingDurationAbout / aboutTextContent.replace(/<br\s*\/?>/gi, '').length; // Adjust interval, ignoring <br> tags

    function typeWriterAbout() {
        let index = 0;
        const typing = setInterval(() => {
            aboutTextElement.innerHTML += aboutTextContent.charAt(index) === "<" ? "<br>" : aboutTextContent.charAt(index);
            index++;
            if (index === aboutTextContent.length) {
                clearInterval(typing); // Stop when done typing
            }
        }, typingIntervalAbout);
    }

    // Intersection Observer for About Typing Effect
    const aboutObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the section is in view
    };

    const aboutObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriterAbout(); // Start typing effect for about section
                observer.unobserve(aboutTextElement); // Stop observing once animation starts
            }
        });
    }, aboutObserverOptions);

    aboutObserver.observe(aboutTextElement); // Start observing the text element

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
});



