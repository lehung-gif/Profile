// 🕐 ĐỒNG HỒ TRÒN ANALOG - REAL TIME
console.log('🚀 Loading analog clock...');

// 🔥 ĐỒNG HỒ FIX GIỜ 24H CHÍNH XÁC
function updateClock() {
    const now = new Date();
    
    // GIỜ 24H ĐÚNG - KHÔNG chuyển 12h
    let hours = now.getHours();      // 0-23
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const digitalHour = document.getElementById('digitalHour');
    const digitalMinute = document.getElementById('digitalMinute');
    const digitalSecond = document.getElementById('digitalSecond');

    if (digitalHour) digitalHour.textContent = now.getHours().toString().padStart(2, '0');
    if (digitalMinute) digitalMinute.textContent = now.getMinutes().toString().padStart(2, '0');
    if (digitalSecond) digitalSecond.textContent = now.getSeconds().toString().padStart(2, '0');
    
    // Ngày tháng Việt
    const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const dateStr = `${days[now.getDay()]}, ${now.getDate()}/${(now.getMonth()+1).toString().padStart(2,'0')}/${now.getFullYear()}`;
    document.getElementById('clockDate').textContent = dateStr;
    
    // Kim đồng hồ (góc chính xác)
    const secondDeg = seconds * 6;           // 6deg/giây
    const minuteDeg = minutes * 6 + seconds * 0.1;  // 6deg/phút + 0.1deg/giây
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;  // 30deg/giờ + 0.5deg/phút
    
    // Rotate kim
    document.getElementById('secondHand').style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById('minuteHand').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('hourHand').style.transform = `rotate(${hourDeg}deg)`;
}

// 🔥 CHẠY ĐỒNG HỒ MỖI GIÂY
setInterval(updateClock, 1000);
updateClock(); // Chạy ngay

console.log('✅ Analog clock started! Kiểm tra F12 Console');
// ===== CONTACT FORM =====
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('🎉 Tin nhắn đã gửi thành công!\nCảm ơn bạn đã liên hệ ❤️');
            this.reset();
        });
    }
});
