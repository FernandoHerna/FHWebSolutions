document.addEventListener('DOMContentLoaded', function () {
    // Navigation Burger Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

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
    const text = "Web Developer | Find our Services below."; 
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

     // Smooth Scroll Animation
     const links = document.querySelectorAll('a[href^="#"]');
     links.forEach(link => {
         link.addEventListener('click', function (e) {
             e.preventDefault();
             const targetId = this.getAttribute('href');
             const targetSection = document.querySelector(targetId);
             targetSection.scrollIntoView({ behavior: 'smooth' });
         });
     });
 
     // Reveal Animation on Scroll
     const services = document.querySelectorAll('.service');
 
     function reveal() {
         const windowHeight = window.innerHeight;
         services.forEach(service => {
             const serviceTop = service.getBoundingClientRect().top;
             if (serviceTop < windowHeight - 100) { // Adjust threshold for visibility
                 service.classList.add('active');
             }
         });
     }
 
     window.addEventListener('scroll', reveal);
 
     // Add initial reveal effect on load
     reveal();
 
     // Existing code for services carousel and other interactions...
 
     // Service Carousel (keeping your previous carousel code intact)
     const serviceTitles = document.querySelectorAll('.service-title');
     const serviceImage = document.getElementById('service-image');
     const prevButton = document.getElementById('prev-arrow');
     const nextButton = document.getElementById('next-arrow');
     let currentIndex = 0;
     let autoSlide;
 
     function updateService(index) {
         services.forEach((service, idx) => {
             if (idx === index) {
                 service.classList.add('active');
                 const newImage = service.getAttribute('data-image');
                 serviceImage.src = newImage;
             } else {
                 service.classList.remove('active');
             }
         });
     }
 
     function nextService() {
         currentIndex = (currentIndex + 1) % services.length;
         updateService(currentIndex);
     }
 
     function prevService() {
         currentIndex = (currentIndex - 1 + services.length) % services.length;
         updateService(currentIndex);
     }
 
     nextButton.addEventListener('click', nextService);
     prevButton.addEventListener('click', prevService);
 
     autoSlide = setInterval(nextService, 5000);
 
     document.querySelector('#services').addEventListener('mouseover', () => {
         clearInterval(autoSlide);
     });
 
     document.querySelector('#services').addEventListener('mouseout', () => {
         autoSlide = setInterval(nextService, 5000);
     });
 
     serviceTitles.forEach((title, index) => {
         title.addEventListener('click', () => {
             currentIndex = index;
             updateService(index);
         });
     });
 
     updateService(currentIndex);
 });


