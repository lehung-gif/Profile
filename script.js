// ============================================
// PORTFOLIO CÁ NHÂN - SCRIPT HOÀN CHỈNH
// Đồng hồ real-time + Mobile menu + Effects
// ============================================

// 🎯 Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Đóng menu khi click link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 🔗 Smooth scrolling cho tất cả link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 🌅 Navbar scroll effect (background thay đổi)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255,255,255,0.98)';
        navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255,255,255,0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
    }
});

// 🔥 ĐỒNG HỒ TRÒN ANALOG + DIGITAL REAL-TIME
function updateAnalogClock() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    // Tính toán góc kim đồng hồ
    const secondDeg = (seconds / 60) * 360 + 90;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
    
    // Cập nhật kim
    document.getElementById('secondHand').style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById('minuteHand').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('hourHand').style.transform = `rotate(${hourDeg}deg)`;
    
    // Digital time
    document.getElementById('digitalHour').textContent = hours.toString().padStart(2, '0');
    document.getElementById('digitalMinute').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('digitalSecond').textContent = seconds.toString().padStart(2, '0');
    
    // Ngày tháng tiếng Việt
    const weekdays = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const months = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
                   'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
    
    const dateString = `${weekdays[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
    document.getElementById('clockDate').textContent = dateString;
}

// Cập nhật mỗi 100ms cho mượt mà
setInterval(updateAnalogClock, 100);
updateAnalogClock(); // Chạy ngay
    
    // Ngày tháng đầy đủ tiếng Việt
    const dateString = now.toLocaleDateString('vi-VN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Cập nhật DOM
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    if (timeElement) timeElement.textContent = timeString;
    if (dateElement) dateElement.textContent = dateString;
}

// Cập nhật đồng hồ mỗi GIÂY 1 lần
setInterval(updateClock, 1000);
// Chạy ngay lần đầu khi load trang
updateClock();

// 📱 Contact form submit
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('🎉 Cảm ơn! Tin nhắn đã được gửi thành công!\nTôi sẽ liên hệ lại sớm nhất.');
        this.reset(); // Reset form
    });
}

// ✨ Typing effect cho tên (Hero section)
function typeWriter() {
    const nameElement = document.querySelector('.highlight');
    if (!nameElement) return;
    
    const nameText = nameElement.textContent;
    let i = 0;
    
    function type() {
        if (i < nameText.length) {
            nameElement.textContent = nameText.slice(0, i + 1);
            i++;
            setTimeout(type, 120);
        }
    }
    type();
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe các section
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease';
    observer.observe(section);
});

// 🎨 Social buttons hover effect
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.05)';
    });
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// 📱 Avatar hover effect
const avatar = document.querySelector('.avatar');
if (avatar) {
    avatar.addEventListener('mouseenter', () => {
        avatar.style.transform = 'scale(1.08) rotate(5deg)';
    });
    avatar.addEventListener('mouseleave', () => {
        avatar.style.transform = 'scale(1) rotate(0deg)';
    });
}

// 🌟 Page load animations
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    typeWriter(); // Bắt đầu typing effect
    
    // Clock ready notification (optional)
    console.log('✅ Portfolio loaded! Đồng hồ real-time đang chạy...');
});

// 💾 Auto-save scroll position (bonus)
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPos', window.scrollY);
});

window.addEventListener('load', () => {
    const savedScroll = sessionStorage.getItem('scrollPos');
    if (savedScroll) {
        window.scrollTo(0, parseInt(savedScroll));
    }
});
