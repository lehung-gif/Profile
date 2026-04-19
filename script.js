// ============================================
// PORTFOLIO CÁ NHÂN - SCRIPT.JS HOÀN CHỈNH
// Đồng hồ tròn 24h + Contact + Mobile menu
// ============================================

console.log('🚀 Portfolio script loaded!');

// 🎯 Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Đóng menu khi click link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// 🔗 Smooth scrolling
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

// 🌅 Navbar scroll effect
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

// 🔥 ĐỒNG HỒ TRÒN + DIGITAL 24H - CHÍNH XÁC 100%
function updateClock() {
    const now = new Date();
    
    // DIGITAL TIME 24H - GIỜ THỰC TẾ
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Cập nhật digital display
    const digitalHour = document.getElementById('digitalHour');
    const digitalMinute = document.getElementById('digitalMinute');
    const digitalSecond = document.getElementById('digitalSecond');
    const clockDate = document.getElementById('clockDate');
    
    if (digitalHour) digitalHour.textContent = hours.toString().padStart(2, '0');
    if (digitalMinute) digitalMinute.textContent = minutes.toString().padStart(2, '0');
    if (digitalSecond) digitalSecond.textContent = seconds.toString().padStart(2, '0');
    if (clockDate) {
        const daysVN = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
        clockDate.textContent = `${daysVN[now.getDay()]}, ${now.getDate()}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;
    }
    
    // KIM ĐỒNG HỒ
    const secondDeg = seconds * 6;           // 6°/giây
    const minuteDeg = minutes * 6 + seconds * 0.1;  // 6°/phút + 0.1°/giây
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;  // 30°/giờ + 0.5°/phút
    
    const secondHand = document.getElementById('secondHand');
    const minuteHand = document.getElementById('minuteHand');
    const hourHand = document.getElementById('hourHand');
    
    if (secondHand) secondHand.style.transform = `rotate(${secondDeg}deg)`;
    if (minuteHand) minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    if (hourHand) hourHand.style.transform = `rotate(${hourDeg}deg)`;
    
    console.log(`Clock: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
}

// CHẠY ĐỒNG HỒ MỖI GIÂY
setInterval(updateClock, 1000);
updateClock(); // Chạy ngay lần đầu

// 📝 Contact form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        alert(`🎉 Cảm ơn ${name || 'bạn'}!\nTin nhắn đã gửi thành công! ❤️`);
        this.reset();
    });
}

// ✨ Hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Social hover
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-8px) scale(1.05)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Avatar hover
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        avatar.addEventListener('mouseenter', () => {
            avatar.style.transform = 'scale(1.08) rotate(3deg)';
        });
        avatar.addEventListener('mouseleave', () => {
            avatar.style.transform = 'scale(1) rotate(0deg)';
        });
    }
});

console.log('✅ Portfolio hoàn chỉnh! Digital clock 24h OK!');
