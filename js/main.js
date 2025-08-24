/**
 * IMI Motorsports - Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        
        // If mobile menu doesn't exist, create it
        let mobileMenu = document.querySelector('.mobile-menu');
        if (!mobileMenu) {
            mobileMenu = document.createElement('div');
            mobileMenu.className = 'mobile-menu';
            
            const navClone = nav.querySelector('ul').cloneNode(true);
            mobileMenu.appendChild(navClone);
            
            header.after(mobileMenu);
        }
        
        mobileMenu.classList.toggle('active');
    });
    
    // Animation on scroll
    const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-fade-in');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
        );
    }
    
    // Initial check for elements in viewport
    animatedElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('animated');
        }
    });
    
    // Check on scroll
    window.addEventListener('scroll', function() {
        animatedElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        });
    });
    
    // FAQ accordions
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.toggle-icon i');
            const isActive = this.classList.contains('active');
            
            // Close all other FAQs
            faqQuestions.forEach(item => {
                const itemIcon = item.querySelector('.toggle-icon i');
                item.classList.remove('active');
                item.nextElementSibling.style.maxHeight = '0';
                
                if (itemIcon) {
                    itemIcon.classList.remove('fa-minus');
                    itemIcon.classList.add('fa-plus');
                }
            });
            
            // Toggle current FAQ
            if (!isActive) {
                this.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                
                if (icon) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                }
            }
        });
    });
    
    // Track item hover effect
    const trackItems = document.querySelectorAll('.track-item');
    
    trackItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Add smooth scrolling for all hash links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll indicator click event
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const introSection = document.querySelector('.intro');
            if (introSection) {
                window.scrollTo({
                    top: introSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Add active class to current nav item
    function setActiveNavItem() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.main-nav a, .footer-nav a');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            const linkHref = link.getAttribute('href');
            
            // Add active class if link href matches current path
            // or if we're on home page and link is to index
            // or if the page name in the URL matches the link href
            if (
                linkHref === currentPath ||
                (currentPath === '/' && linkHref === 'index.html') ||
                (currentPath.endsWith('index.html') && linkHref === 'index.html') ||
                (currentPath.includes(linkHref) && linkHref !== 'index.html')
            ) {
                link.classList.add('active');
            }
        });
    }
    
    setActiveNavItem();
    
    // Custom animation for primary buttons
    const primaryButtons = document.querySelectorAll('.primary-btn');
    
    primaryButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add CSS class to detect animation support
    if ('IntersectionObserver' in window && 
        'requestAnimationFrame' in window && 
        'CustomEvent' in window) {
        document.documentElement.classList.add('animations-enabled');
    }
});

// Add animation to hero content on load
window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 200);
    }
});

// Handle video loading
document.addEventListener('DOMContentLoaded', function() {
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.addEventListener('loadeddata', function() {
            heroVideo.play();
            heroVideo.classList.add('loaded');
        });
        
        // Fallback if video can't play
        heroVideo.addEventListener('error', function() {
            const heroSection = document.querySelector('.hero');
            if (heroSection) {
                heroSection.classList.add('video-fallback');
            }
        });
    }
    
    // Testimonial Slider functionality
    initTestimonialSlider();
    
    // Price option hover effect
    initPriceOptionHover();
    
    // Initialize form validation if contact form exists
    initFormValidation();
});

// Testimonial Slider functionality
function initTestimonialSlider() {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (!testimonialSlider) return;
    
    const testimonials = testimonialSlider.querySelectorAll('.testimonial');
    const dots = testimonialSlider.querySelectorAll('.testimonial-dots .dot');
    const prevBtn = testimonialSlider.querySelector('.prev-btn');
    const nextBtn = testimonialSlider.querySelector('.next-btn');
    
    if (testimonials.length <= 1) return;
    
    let currentIndex = 0;
    
    // Show testimonial at index
    function showTestimonial(index) {
        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.style.display = 'none';
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current testimonial and activate dot
        testimonials[index].style.display = 'block';
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }
    
    // Initialize first testimonial
    showTestimonial(currentIndex);
    
    // Add click event to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showTestimonial(currentIndex);
        });
    });
    
    // Add click events to navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentIndex);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        });
    }
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 5000);
}

// Price option hover effect
function initPriceOptionHover() {
    const priceOptions = document.querySelectorAll('.price-option:not(.featured)');
    
    priceOptions.forEach(option => {
        option.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
        
        option.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });
}

// Form validation
function initFormValidation() {
    const contactForm = document.querySelector('.contact-form form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(event) {
        let isValid = true;
        const requiredFields = contactForm.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
                
                // Add error message if it doesn't exist
                let errorMessage = field.nextElementSibling;
                if (!errorMessage || !errorMessage.classList.contains('error-message')) {
                    errorMessage = document.createElement('div');
                    errorMessage.className = 'error-message';
                    errorMessage.textContent = 'This field is required';
                    field.parentNode.insertBefore(errorMessage, field.nextSibling);
                }
            } else {
                field.classList.remove('error');
                
                // Remove error message if it exists
                const errorMessage = field.nextElementSibling;
                if (errorMessage && errorMessage.classList.contains('error-message')) {
                    errorMessage.remove();
                }
            }
        });
        
        // Validate email format if email field exists
        const emailField = contactForm.querySelector('input[type="email"]');
        if (emailField && emailField.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailField.value.trim())) {
                isValid = false;
                emailField.classList.add('error');
                
                // Add error message if it doesn't exist
                let errorMessage = emailField.nextElementSibling;
                if (!errorMessage || !errorMessage.classList.contains('error-message')) {
                    errorMessage = document.createElement('div');
                    errorMessage.className = 'error-message';
                    errorMessage.textContent = 'Please enter a valid email address';
                    emailField.parentNode.insertBefore(errorMessage, emailField.nextSibling);
                }
            }
        }
        
        if (!isValid) {
            event.preventDefault();
        }
    });
    
    // Remove error styling on input
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('error');
            
            // Remove error message if it exists
            const errorMessage = this.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains('error-message')) {
                errorMessage.remove();
            }
        });
    });
}
