// ============================================
// PORTFOLIO - ĐỒNG HỒ TRÒN ANALOG REAL-TIME
// ============================================

// 🎯 Mobile menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        // Đóng mobile menu
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Navbar effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255,255,255,0.98)';
            navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255,255,255,0.95)';
        }
    }
});

// 🔥 ĐỒNG HỒ TRÒN ANALOG + DIGITAL - CHẠY REAL-TIME
function updateAnalogClock() {
    const now = new Date();
    
    // Lấy thời gian
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    // Tính góc kim (90deg vì CSS bắt đầu từ trên)
    const secondDeg = (seconds / 60) * 360 + 90;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30 + 90;
    
    // Cập nhật kim đồng hồ
    const secondHand = document.getElementById('secondHand');
    const minuteHand = document.getElementById('minuteHand');
    const hourHand = document.getElementById('hourHand');
    
    if (secondHand) secondHand.style.transform = `rotate(${secondDeg}deg)`;
    if (minuteHand) minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    if (hourHand) hourHand.style.transform = `rotate(${hourDeg}deg)`;
    
    // Digital time
    const digitalHour = document.getElementById('digitalHour');
    const digitalMinute = document.getElementById('digitalMinute');
    const digitalSecond = document.getElementById('digitalSecond');
    
    if (digitalHour) digitalHour.textContent = hours.toString().padStart(2, '0');
    if (digitalMinute) digitalMinute.textContent = minutes.toString().padStart(2, '0');
    if (digitalSecond) digitalSecond.textContent = seconds.toString().padStart(2, '0');
    
    // Ngày tháng tiếng Việt
    const weekdays = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const months = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
                    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
    
    const dateString = `${weekdays[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
    const clockDate = document.getElementById('clockDate');
    if (clockDate) clockDate.textContent = dateString;
}

// 🔥 CHẠY ĐỒNG HỒ - MỌI 100ms
setInterval(updateAnalogClock, 100);
updateAnalogClock(); // Chạy ngay lập tức

// 📝 Contact form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('🎉 Tin nhắn đã gửi! Cảm ơn bạn ❤️');
        contactForm.reset();
    });
}

// ✨ Hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Social buttons
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => btn.style.transform = 'translateY(-8px) scale(1.05)');
        btn.addEventListener('mouseleave', () => btn.style.transform = 'translateY(0) scale(1)');
    });
    
    // Avatar
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        avatar.addEventListener('mouseenter', () => {
            avatar.style.transform = 'scale(1.08) rotate(3deg)';
        });
        avatar.addEventListener('mouseleave', () => {
            avatar.style.transform = 'scale(1) rotate(0)';
        });
    }
});

// ✅ Console log để debug
console.log('✅ Portfolio loaded! Đồng hồ analog đang chạy...');
console.log('🕐 Kiểm tra F12 Console nếu có lỗi');
