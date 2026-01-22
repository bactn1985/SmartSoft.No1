// ===================================
// MOBILE MENU TOGGLE
// ===================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===================================
// SMOOTH SCROLL FOR NAVIGATION
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements
const animatedElements = document.querySelectorAll(
    '.product-card, .feature-card, .process-step, .testimonial-card'
);

animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===================================
// FORM HANDLING WITH GOOGLE SHEETS
// ===================================
const contactForm = document.getElementById('contactForm');

// QUAN TRỌNG: Thay YOUR_GOOGLE_SCRIPT_URL_HERE bằng URL từ Google Apps Script deployment
// URL có dạng: https://script.google.com/macros/s/AKfycby.../exec
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        product: document.getElementById('product').value,
        message: document.getElementById('message').value
    };

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.product) {
        alert('Vui lòng điền đầy đủ các trường bắt buộc (*)');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Email không hợp lệ');
        return;
    }

    // Phone validation (Vietnamese phone numbers)
    const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
        alert('Số điện thoại không hợp lệ');
        return;
    }

    // Disable submit button và hiển thị loading
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Đang gửi...';

    try {
        // Gửi dữ liệu đến Google Sheets
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Quan trọng cho Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        // Do mode no-cors, ta không thể đọc response
        // Nhưng nếu không có lỗi throw, nghĩa là request đã được gửi
        alert('✅ Cảm ơn bạn đã liên hệ!\n\nChúng tôi sẽ phản hồi trong vòng 24 giờ qua:\n📧 Email: ' + formData.email + '\n📞 SĐT: ' + formData.phone);

        // Reset form
        contactForm.reset();

    } catch (error) {
        console.error('Error:', error);
        alert('⚠️ Có lỗi xảy ra khi gửi form.\n\nVui lòng liên hệ trực tiếp qua:\n📞 Hotline: 0984 939929\n📧 Email: bactn@level.io.vn');
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});

// ===================================
// DYNAMIC BACKGROUND ANIMATION (OPTIONAL)
// ===================================
// Add subtle parallax effect to hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');

    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===================================
// STATS COUNTER ANIMATION
// ===================================
function animateCounter(element, target, suffix = '') {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 30);
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach((stat, index) => {
                const originalText = stat.textContent;
                const numberMatch = originalText.match(/\d+/);
                const suffix = originalText.replace(/\d+/, '');

                if (numberMatch) {
                    const target = parseInt(numberMatch[0]);
                    stat.textContent = '0' + suffix;
                    setTimeout(() => {
                        animateCounter(stat, target, suffix);
                    }, index * 200);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===================================
// PRELOAD IMAGES
// ===================================
window.addEventListener('load', () => {
    // Add any additional initialization here
    console.log('Website loaded successfully!');
});

// ===================================
// SMOOTH REVEAL ON PAGE LOAD
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
