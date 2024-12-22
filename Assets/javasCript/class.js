function toggleMenu() {
    var icon = document.querySelector(".menu-icon");
    var menu = document.getElementById("myMenu");
    icon.classList.toggle("change");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
const images = document.querySelectorAll('.random-image');
    const dots = document.querySelectorAll('.dot');
    let currentImageIndex = 0;

    // تابعی برای تغییر تصویر فعال
    function changeImage(index) {
        // تصویر و نقطه فعال فعلی را غیرفعال کن
        images[currentImageIndex].classList.remove('active');
        dots[currentImageIndex].classList.remove('active');
        
        // به‌روزرسانی به اندیس جدید (در صورت کلیک کاربر یا زمانبندی خودکار)
        currentImageIndex = index !== undefined ? index : Math.floor(Math.random() * images.length);
        
        // تصویر و نقطه جدید را فعال کن
        images[currentImageIndex].classList.add('active');
        dots[currentImageIndex].classList.add('active');
    }

    // هر ۵ ثانیه یکبار تصویر به صورت تصادفی تغییر می‌کند
    setInterval(() => changeImage(), 5000);

    // رویداد کلیک برای نقاط
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            changeImage(index);
        });
    });