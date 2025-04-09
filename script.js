document.getElementById('mobile-menu').addEventListener('click', function() {
        const navbarMenu = document.querySelector('.navbar-menu');
        navbarMenu.classList.toggle('active');
    });
    
    // Optional: Add functionality to toggle dropdown menus on mobile
    document.querySelectorAll('.navbar-item').forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                this.classList.toggle('active');
            }
        });
    });


    let slideIndex = 0;

// Function to show slides
function showSlides(index) {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.children.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.children.length - 1;

    // Move the slides container
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Update active dot
    dots.forEach((dot) => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

// Next/Previous Controls
document.querySelector('.next').addEventListener('click', () => {
    slideIndex++;
    showSlides(slideIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    slideIndex--;
    showSlides(slideIndex);
});

// Dot Navigation
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index;
        showSlides(slideIndex);
    });
});

// Auto Slide (Optional)
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 5000); // Change slide every 5 seconds