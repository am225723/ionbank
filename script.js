// IonBank Deal Discussions Generator - Modern JavaScript

class IonBankWebsite {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.navToggle = document.getElementById('nav-toggle');
    this.navMenu = document.getElementById('nav-menu');
    this.navLinks = document.querySelectorAll('.nav-link');
    
    this.init();
  }
  
  init() {
    this.setupEventListeners();
    this.setupScrollEffects();
    this.setupAnimations();
    this.setupAccessibility();
    this.setupPerformanceOptimizations();
    
    console.log('IonBank website initialized successfully');
  }
  
  setupEventListeners() {
    // Mobile navigation toggle
    if (this.navToggle && this.navMenu) {
      this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
    }
    
    // Smooth scrolling for navigation links
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => this.handleNavClick(e));
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => this.handleOutsideClick(e));
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => this.handleKeyboardNav(e));
    
    // Window resize handler
    window.addEventListener('resize', this.debounce(() => this.handleResize(), 250));
    
    // Scroll handler with throttling
    window.addEventListener('scroll', this.throttle(() => this.handleScroll(), 16));
    
    // Form submissions
    this.setupFormHandlers();
    
    // Button interactions
    this.setupButtonHandlers();
  }
  
  toggleMobileMenu() {
    const isActive = this.navMenu.classList.contains('active');
    
    if (isActive) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }
  
  openMobileMenu() {
    this.navMenu.classList.add('active');
    this.navToggle.classList.add('active');
    this.navToggle.setAttribute('aria-expanded', 'true');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Focus management
    const firstLink = this.navMenu.querySelector('.nav-link');
    if (firstLink) {
      setTimeout(() => firstLink.focus(), 100);
    }
  }
  
  closeMobileMenu() {
    this.navMenu.classList.remove('active');
    this.navToggle.classList.remove('active');
    this.navToggle.setAttribute('aria-expanded', 'false');
    
    // Restore body scroll
    document.body.style.overflow = '';
  }
  
  handleNavClick(e) {
    const href = e.target.getAttribute('href');
    
    if (href && href.startsWith('#')) {
      e.preventDefault();
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        this.smoothScrollTo(targetElement);
        this.updateActiveNavLink(href);
        this.closeMobileMenu();
      }
    }
  }
  
  smoothScrollTo(element) {
    const headerHeight = this.navbar.offsetHeight;
    const targetPosition = element.offsetTop - headerHeight - 20;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
  
  updateActiveNavLink(activeHref) {
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === activeHref) {
        link.classList.add('active');
      }
    });
  }
  
  handleOutsideClick(e) {
    if (this.navMenu.classList.contains('active') && 
        !this.navMenu.contains(e.target) && 
        !this.navToggle.contains(e.target)) {
      this.closeMobileMenu();
    }
  }
  
  handleKeyboardNav(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && this.navMenu.classList.contains('active')) {
      this.closeMobileMenu();
      this.navToggle.focus();
    }
    
    // Tab navigation within mobile menu
    if (e.key === 'Tab' && this.navMenu.classList.contains('active')) {
      this.handleTabNavigation(e);
    }
  }
  
  handleTabNavigation(e) {
    const focusableElements = this.navMenu.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }
  
  handleResize() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768 && this.navMenu.classList.contains('active')) {
      this.closeMobileMenu();
    }
    
    // Update any size-dependent calculations
    this.updateScrollSpy();
  }
  
  handleScroll() {
    this.updateNavbarBackground();
    this.updateScrollSpy();
    this.handleScrollAnimations();
  }
  
  updateNavbarBackground() {
    const scrolled = window.scrollY > 50;
    this.navbar.classList.toggle('scrolled', scrolled);
  }
  
  updateScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        this.updateActiveNavLink(`#${sectionId}`);
      }
    });
  }
  
  setupScrollEffects() {
    // Intersection Observer for scroll animations
    this.observeElements();
    
    // Parallax effects for hero section
    this.setupParallaxEffects();
  }
  
  observeElements() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Special handling for counters
          if (entry.target.classList.contains('stat-number')) {
            this.animateCounter(entry.target);
          }
        }
      });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
      '.feature-card, .template-card, .process-step, .stat-number'
    );
    
    animatedElements.forEach(el => observer.observe(el));
  }
  
  animateCounter(element) {
    const target = element.textContent.trim();
    const isNumber = /^\d+/.test(target);
    
    if (isNumber) {
      const targetNumber = parseInt(target.match(/\d+/)[0]);
      const suffix = target.replace(/^\d+/, '');
      let current = 0;
      const increment = targetNumber / 60; // 60 frames for 1 second at 60fps
      
      const updateCounter = () => {
        current += increment;
        if (current >= targetNumber) {
          element.textContent = targetNumber + suffix;
        } else {
          element.textContent = Math.floor(current) + suffix;
          requestAnimationFrame(updateCounter);
        }
      };
      
      requestAnimationFrame(updateCounter);
    }
  }
  
  setupParallaxEffects() {
    const heroPattern = document.querySelector('.hero-pattern');
    const floatingElements = document.querySelectorAll('.floating-card');
    
    if (heroPattern || floatingElements.length > 0) {
      window.addEventListener('scroll', this.throttle(() => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroPattern) {
          heroPattern.style.transform = `translateY(${rate}px)`;
        }
        
        floatingElements.forEach((element, index) => {
          const speed = 0.2 + (index * 0.1);
          element.style.transform = `translateY(${scrolled * speed}px)`;
        });
      }, 16));
    }
  }
  
  handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .template-card, .process-step');
    
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }
  
  setupAnimations() {
    // Initialize CSS animations
    this.initializeScrollAnimations();
    
    // Setup hover effects
    this.setupHoverEffects();
    
    // Setup loading animations
    this.setupLoadingAnimations();
  }
  
  initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .template-card, .process-step');
    
    animatedElements.forEach((element, index) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    });
  }
  
  setupHoverEffects() {
    // Enhanced hover effects for cards
    const cards = document.querySelectorAll('.feature-card, .template-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
      });
    });
  }
  
  setupLoadingAnimations() {
    // Simulate interface loading in hero section
    const statusItems = document.querySelectorAll('.status-item');
    
    if (statusItems.length > 0) {
      this.simulateLoadingSequence(statusItems);
    }
  }
  
  simulateLoadingSequence(statusItems) {
    let currentIndex = 0;
    
    const updateStatus = () => {
      if (currentIndex < statusItems.length) {
        // Reset all items
        statusItems.forEach(item => {
          item.classList.remove('completed', 'active');
        });
        
        // Set completed items
        for (let i = 0; i < currentIndex; i++) {
          statusItems[i].classList.add('completed');
        }
        
        // Set active item
        if (currentIndex < statusItems.length) {
          statusItems[currentIndex].classList.add('active');
        }
        
        currentIndex++;
        
        if (currentIndex <= statusItems.length) {
          setTimeout(updateStatus, 2000);
        } else {
          // Reset and start over
          setTimeout(() => {
            currentIndex = 0;
            updateStatus();
          }, 3000);
        }
      }
    };
    
    // Start the sequence after a delay
    setTimeout(updateStatus, 1000);
  }
  
  setupAccessibility() {
    // Add skip link
    this.addSkipLink();
    
    // Enhance button accessibility
    this.enhanceButtonAccessibility();
    
    // Add ARIA labels where needed
    this.addAriaLabels();
    
    // Setup focus management
    this.setupFocusManagement();
  }
  
  addSkipLink() {
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
      padding: 8px 16px;
      text-decoration: none;
      border-radius: 4px;
      z-index: 1070;
      transition: top 0.3s;
      font-weight: 500;
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
  }
  
  enhanceButtonAccessibility() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
    
    buttons.forEach(button => {
      if (!button.getAttribute('aria-label') && button.querySelector('i')) {
        const text = button.textContent.trim();
        if (text) {
          button.setAttribute('aria-label', text);
        }
      }
    });
  }
  
  addAriaLabels() {
    // Add aria-expanded to mobile toggle
    if (this.navToggle) {
      this.navToggle.setAttribute('aria-expanded', 'false');
      this.navToggle.setAttribute('aria-controls', 'nav-menu');
    }
    
    // Add role to navigation
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
      navMenu.setAttribute('role', 'navigation');
    }
  }
  
  setupFocusManagement() {
    // Visible focus indicators
    const focusableElements = document.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
      element.addEventListener('focus', function() {
        this.classList.add('focused');
      });
      
      element.addEventListener('blur', function() {
        this.classList.remove('focused');
      });
    });
  }
  
  setupFormHandlers() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => this.handleFormSubmit(e));
    });
  }
  
  handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
    
    if (submitButton) {
      this.showLoadingState(submitButton);
      
      // Simulate form processing
      setTimeout(() => {
        this.hideLoadingState(submitButton);
        this.showNotification('Form submitted successfully!', 'success');
      }, 2000);
    }
  }
  
  showLoadingState(button) {
    const originalText = button.textContent;
    button.dataset.originalText = originalText;
    button.textContent = 'Processing...';
    button.disabled = true;
    button.classList.add('loading');
  }
  
  hideLoadingState(button) {
    const originalText = button.dataset.originalText;
    button.textContent = originalText;
    button.disabled = false;
    button.classList.remove('loading');
  }
  
  setupButtonHandlers() {
    // Track button clicks for analytics
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
    
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        this.trackButtonClick(button);
        this.addRippleEffect(e);
      });
    });
  }
  
  trackButtonClick(button) {
    const buttonText = button.textContent.trim();
    const buttonType = button.className.includes('btn-primary') ? 'primary' : 
                      button.className.includes('btn-secondary') ? 'secondary' : 'outline';
    
    // Analytics tracking (placeholder)
    console.log('Button clicked:', {
      text: buttonText,
      type: buttonType,
      timestamp: new Date().toISOString()
    });
  }
  
  addRippleEffect(e) {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
  
  setupPerformanceOptimizations() {
    // Lazy load images
    this.setupLazyLoading();
    
    // Preload critical resources
    this.preloadCriticalResources();
    
    // Setup service worker
    this.setupServiceWorker();
  }
  
  setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });
      
      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for older browsers
      images.forEach(img => {
        img.src = img.dataset.src;
      });
    }
  }
  
  preloadCriticalResources() {
    const criticalResources = [
      '../IonBankLogo.png'
    ];
    
    criticalResources.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }
  
  setupServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('ServiceWorker registration successful');
          })
          .catch(err => {
            console.log('ServiceWorker registration failed');
          });
      });
    }
  }
  
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-${this.getNotificationIcon(type)}"></i>
        <span>${message}</span>
      </div>
      <button class="notification-close" aria-label="Close notification">
        <i class="fas fa-times"></i>
      </button>
    `;
    
    // Add notification styles
    this.addNotificationStyles();
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto remove
    setTimeout(() => this.removeNotification(notification), 5000);
    
    // Manual close
    notification.querySelector('.notification-close').addEventListener('click', () => {
      this.removeNotification(notification);
    });
  }
  
  getNotificationIcon(type) {
    const icons = {
      success: 'check-circle',
      error: 'exclamation-circle',
      warning: 'exclamation-triangle',
      info: 'info-circle'
    };
    return icons[type] || icons.info;
  }
  
  removeNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }
  
  addNotificationStyles() {
    if (document.querySelector('#notification-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'notification-styles';
    styles.textContent = `
      .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        z-index: 1060;
        min-width: 320px;
        transform: translateX(100%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border-left: 4px solid var(--ion-blue-600);
      }
      
      .notification.show {
        transform: translateX(0);
      }
      
      .notification-success {
        border-left-color: var(--ion-green-600);
      }
      
      .notification-error {
        border-left-color: var(--error);
      }
      
      .notification-warning {
        border-left-color: var(--warning);
      }
      
      .notification-content {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
      }
      
      .notification-content i {
        color: var(--ion-blue-600);
      }
      
      .notification-success .notification-content i {
        color: var(--ion-green-600);
      }
      
      .notification-error .notification-content i {
        color: var(--error);
      }
      
      .notification-warning .notification-content i {
        color: var(--warning);
      }
      
      .notification-close {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--gray-400);
        padding: 4px;
        border-radius: 4px;
        transition: color 0.15s ease;
      }
      
      .notification-close:hover {
        color: var(--gray-600);
        background: var(--gray-100);
      }
      
      @media (max-width: 640px) {
        .notification {
          left: 20px;
          right: 20px;
          min-width: auto;
        }
      }
    `;
    document.head.appendChild(styles);
  }
  
  // Utility functions
  debounce(func, wait, immediate) {
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
  
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Add ripple animation keyframes
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .focused {
    outline: 2px solid var(--ion-blue-500);
    outline-offset: 2px;
  }
`;
document.head.appendChild(rippleStyles);

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new IonBankWebsite();
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = IonBankWebsite;
}