// 🕐 ĐỒNG HỒ TRÒN ANALOG - REAL TIME
console.log('🚀 Loading analog clock...');

function updateClock() {
    const now = new Date();
    
    // Thời gian hiện tại
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    console.log(`Clock update: ${hours}:${minutes}:${seconds}`);
    
    // Digital display
    document.getElementById('digitalHour').textContent = hours.toString().padStart(2, '0');
    document.getElementById('digitalMinute').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('digitalSecond').textContent = seconds.toString().padStart(2, '0');
    
    // Ngày tháng
    const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const dateStr = `${days[now.getDay()]}, ${now.getDate()}/${months[now.getMonth()]}/${now.getFullYear()}`;
    document.getElementById('clockDate').textContent = dateStr;
    
    // Kim đồng hồ (0-360 độ)
    const secondDeg = (seconds * 6);  // 360/60 = 6
    const minuteDeg = (minutes * 6) + (seconds * 0.1);
    const hourDeg = (hours % 12 * 30) + (minutes * 0.5);
    
    // Rotate kim
    document.getElementById('secondHand').style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById('minuteHand').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('hourHand').style.transform = `rotate(${hourDeg}deg)`;
}

// 🔥 CHẠY ĐỒNG HỒ MỖI GIÂY
setInterval(updateClock, 1000);
updateClock(); // Chạy ngay

console.log('✅ Analog clock started! Kiểm tra F12 Console');
