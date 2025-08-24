/**
 * IMI Motorsports - Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Enhanced header scroll effect with smooth transition
    const header = document.querySelector('header');
    const scrollThreshold = 100;
    let lastScrollTop = 0;
    let ticking = false;
    
    function updateHeaderOnScroll(scrollPos) {
        // Add or remove scrolled class based on scroll position
        if (scrollPos > scrollThreshold) {
            header.classList.add('scrolled');
            
            // Hide header when scrolling down rapidly
            if (scrollPos > lastScrollTop + 50 && scrollPos > 300) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        } else {
            header.classList.remove('scrolled');
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollPos;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY;
        
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateHeaderOnScroll(scrollPos);
            });
            ticking = true;
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
    
    // Enhanced track item hover effects
    const trackItems = document.querySelectorAll('.track-item');
    
    trackItems.forEach(item => {
        // Add a chevron icon for better visual indication
        const icon = document.createElement('i');
        icon.className = 'fas fa-chevron-right track-icon';
        item.appendChild(icon);
        
        item.addEventListener('mouseenter', function() {
            // Apply enhanced hover effects
            const image = this.querySelector('.track-image');
            const heading = this.querySelector('h3');
            
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
            
            if (image) {
                image.style.transform = 'scale(1.1)';
            }
            
            if (heading) {
                heading.style.color = 'var(--primary)';
            }
            
            // Animate the chevron
            icon.style.opacity = '1';
            icon.style.right = '15px';
        });
        
        item.addEventListener('mouseleave', function() {
            const image = this.querySelector('.track-image');
            const heading = this.querySelector('h3');
            
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
            
            if (image) {
                image.style.transform = 'scale(1)';
            }
            
            if (heading) {
                heading.style.color = 'white';
            }
            
            // Reset the chevron
            icon.style.opacity = '0';
            icon.style.right = '25px';
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
    
    // Enhanced button animations
    const allButtons = document.querySelectorAll('.btn');
    
    allButtons.forEach(button => {
        // Create shine effect element
        const shine = document.createElement('span');
        shine.className = 'btn-shine';
        button.appendChild(shine);
        
        button.addEventListener('mouseenter', function() {
            if (this.classList.contains('primary-btn') || this.classList.contains('secondary-btn')) {
                this.style.transform = 'translateY(-3px)';
                this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
            } else if (this.classList.contains('ghost-btn')) {
                this.style.transform = 'translateY(-2px)';
            }
            
            // Trigger the shine effect
            shine.style.left = '150%';
            setTimeout(() => {
                shine.style.left = '-50%';
            }, 300);
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            if (this.classList.contains('primary-btn') || this.classList.contains('secondary-btn')) {
                this.style.boxShadow = '';
            }
        });
    });
    
    // Add CSS for the shine effect
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        .btn-shine {
            position: absolute;
            top: 0;
            left: -50%;
            width: 50%;
            height: 100%;
            background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
            transform: skewX(-25deg);
            transition: left 0.5s ease-out;
        }
    `;
    document.head.appendChild(style);

    // Add CSS class to detect animation support
    if ('IntersectionObserver' in window && 
        'requestAnimationFrame' in window && 
        'CustomEvent' in window) {
        document.documentElement.classList.add('animations-enabled');
    }
    
    // Add intersection observer for more efficient animations
    if ('IntersectionObserver' in window) {
        const options = {
            root: null, // use viewport
            rootMargin: '0px',
            threshold: 0.1 // trigger when at least 10% of the element is visible
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    // Once animated, no need to observe anymore
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        
        // Observe all animated elements
        document.querySelectorAll('.animate-fade-up, .animate-fade-in').forEach(element => {
            observer.observe(element);
        });
    }
});

// Add animation to hero content on load with sequenced animations
window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        // Add the animated class to trigger CSS animations
        heroContent.classList.add('animated');
        
        // Sequentially animate child elements
        const h2 = heroContent.querySelector('h2');
        const h1 = heroContent.querySelector('h1');
        const buttons = heroContent.querySelector('.hero-buttons');
        
        if (h2) setTimeout(() => h2.classList.add('animated'), 200);
        if (h1) setTimeout(() => h1.classList.add('animated'), 400);
        if (buttons) setTimeout(() => buttons.classList.add('animated'), 600);
    }
    
    // Add parallax effect to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            if (scrollPosition < window.innerHeight) {
                const heroOverlay = document.querySelector('.hero-overlay');
                if (heroOverlay) {
                    heroOverlay.style.transform = `translateY(${scrollPosition * 0.05}px)`;
                }
            }
        });
    }
});

// Enhanced video loading with subtle effects
document.addEventListener('DOMContentLoaded', function() {
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.addEventListener('loadeddata', function() {
            heroVideo.play();
            
            // Fade in video with animation
            setTimeout(() => {
                heroVideo.classList.add('loaded');
                
                // Add subtle zoom effect
                heroVideo.style.transition = 'opacity 1s ease, transform 30s ease-out';
                setTimeout(() => {
                    // This will trigger a very slow zoom effect over time
                    heroVideo.style.transform = 'scale(1.15)';
                }, 1000);
            }, 300);
            
            // Add subtle floating movement to award badge
            const awardBadge = document.querySelector('.award-badge');
            if (awardBadge) {
                awardBadge.style.animation = 'float 3s ease-in-out infinite, subtleRotate 6s ease-in-out infinite';
            }
        });
        
        // Fallback if video can't play
        heroVideo.addEventListener('error', function() {
            const heroSection = document.querySelector('.hero');
            if (heroSection) {
                heroSection.classList.add('video-fallback');
                
                // Add a slight parallax effect to fallback background
                window.addEventListener('scroll', function() {
                    const scrollPosition = window.pageYOffset;
                    if (scrollPosition < window.innerHeight) {
                        heroSection.style.backgroundPosition = `center ${50 + (scrollPosition * 0.05)}%`;
                    }
                });
            }
        });
    }
    
    // Add subtle rotation animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes subtleRotate {
            0% { transform: rotate(-1deg); }
            50% { transform: rotate(1deg); }
            100% { transform: rotate(-1deg); }
        }
    `;
    document.head.appendChild(style);
    
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
