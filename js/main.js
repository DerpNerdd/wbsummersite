document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideArray = Array.from(slides.children);
    let currentIndex = 0;

    const updateSlider = () => {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideArray.length;
        updateSlider();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideArray.length) % slideArray.length;
        updateSlider();
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideArray.length;
        updateSlider();
    }, 3000);

    // jQuery for smooth scroll for navigation links
    $('nav ul li a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // jQuery for form validation
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const message = $('#message').val().trim();

        if (name && email && message) {
            alert('Thank you for your message!');
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Navbar animation on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('header').css('background-color', '#ff6600');
        } else {
            $('header').css('background-color', '#ffcc00');
        }
    });

    // Navbar link hover effect
    $('nav ul li a').hover(
        function() {
            $(this).css('color', '#ff6600');
        }, function() {
            $(this).css('color', '#333');
        }
    );
});
