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

    // Navbar color change on scroll
    $(window).scroll(function() {
        const scroll = $(window).scrollTop();
        const maxScroll = $(document).height() - $(window).height();
        const scrollPercent = scroll / maxScroll;
        const colorValue = Math.min(255, Math.floor(scrollPercent * 255));
        $('header').css('background-color', `rgb(255, ${255 - colorValue}, 0)`);
    });

    // Advanced styling for the events list
    $('#events ul li').each(function(index) {
        $(this).css('opacity', 0);
        $(this).delay(index * 200).animate({ opacity: 1 }, 1000);
    });

    $('#events ul li').hover(
        function() {
            $(this).css('transform', 'scale(1.1)');
            $(this).css('background-color', '#ffcc00');
        },
        function() {
            $(this).css('transform', 'scale(1)');
            $(this).css('background-color', '');
        }
    );
});
