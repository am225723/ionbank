// IonBank Website - Interactive Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Toggle hamburger icon
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Smooth Scrolling for Navigation Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active Navigation Link Highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Header Background on Scroll
    const header = document.querySelector('.header');
    function updateHeaderBackground() {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    }
    
    // Scroll Event Listeners
    window.addEventListener('scroll', function() {
        updateActiveNavLink();
        updateHeaderBackground();
        animateOnScroll();
    });
    
    // Animation on Scroll
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('.feature-card, .step, .hero-stats .stat');
        
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize animations
    function initializeAnimations() {
        const animatedElements = document.querySelectorAll('.feature-card, .step, .hero-stats .stat');
        
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
    }
    
    // Counter Animation for Stats
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = counter.textContent;
            const isNumber = /^\d+$/.test(target);
            
            if (isNumber) {
                const targetNumber = parseInt(target);
                let current = 0;
                const increment = targetNumber / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= targetNumber) {
                        counter.textContent = target;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                }, 30);
            }
        });
    }
    
    // Intersection Observer for Counter Animation
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
    
    // Form Validation and Enhancement
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state to submit button
            const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Processing...';
                submitBtn.disabled = true;
                
                // Simulate form processing
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    
                    // Show success message
                    showNotification('Form submitted successfully!', 'success');
                }, 2000);
            }
        });
    });
    
    // Notification System
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Add notification styles if not already present
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
                    padding: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    z-index: 1060;
                    min-width: 300px;
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                }
                
                .notification.show {
                    transform: translateX(0);
                }
                
                .notification-success {
                    border-left: 4px solid var(--ion-success);
                }
                
                .notification-error {
                    border-left: 4px solid var(--ion-error);
                }
                
                .notification-info {
                    border-left: 4px solid var(--ion-info);
                }
                
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .notification-content i {
                    color: var(--ion-${type});
                }
                
                .notification-close {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: var(--ion-gray-400);
                    padding: 4px;
                }
                
                .notification-close:hover {
                    color: var(--ion-gray-600);
                }
            `;
            document.head.appendChild(styles);
        }
        
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
        
        // Manual close
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        });
    }
    
    // Keyboard Navigation
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Performance Optimization - Throttle scroll events
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply throttling to scroll events
    window.removeEventListener('scroll', updateActiveNavLink);
    window.removeEventListener('scroll', updateHeaderBackground);
    window.removeEventListener('scroll', animateOnScroll);
    
    const throttledScrollHandler = throttle(function() {
        updateActiveNavLink();
        updateHeaderBackground();
        animateOnScroll();
    }, 16); // ~60fps
    
    window.addEventListener('scroll', throttledScrollHandler);
    
    // Initialize
    initializeAnimations();
    updateHeaderBackground();
    updateActiveNavLink();
    
    // Preload critical images
    const criticalImages = [
        '../IonBankLogo.png'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Service Worker Registration (for PWA capabilities)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    console.log('ServiceWorker registration successful');
                })
                .catch(function(err) {
                    console.log('ServiceWorker registration failed');
                });
        });
    }
    
    // Analytics and Performance Monitoring
    function trackPageView() {
        // Placeholder for analytics tracking
        console.log('Page view tracked:', window.location.pathname);
    }
    
    function trackUserInteraction(action, element) {
        // Placeholder for interaction tracking
        console.log('User interaction:', action, element);
    }
    
    // Track button clicks
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            trackUserInteraction('button_click', this.textContent.trim());
        });
    });
    
    // Track initial page view
    trackPageView();
    
    // Accessibility Enhancements
    function enhanceAccessibility() {
        // Add skip link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--ion-blue-600);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1070;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', function() {
            this.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add main content landmark
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.id = 'main-content';
            heroSection.setAttribute('role', 'main');
        }
        
        // Enhance button accessibility
        document.querySelectorAll('.btn').forEach(btn => {
            if (!btn.getAttribute('aria-label') && btn.querySelector('i')) {
                const text = btn.textContent.trim();
                if (text) {
                    btn.setAttribute('aria-label', text);
                }
            }
        });
    }
    
    enhanceAccessibility();
    
    console.log('IonBank website initialized successfully');
});

// Utility Functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        debounce,
        throttle: (func, wait) => {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }
    };
}