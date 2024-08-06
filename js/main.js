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
        const navbarStartColor = { r: 173, g: 216, b: 230 }; // light blue
        const navbarEndColor = { r: 64, g: 64, b: 64 }; // dark gray

        const navbarR = Math.floor(navbarStartColor.r + (navbarEndColor.r - navbarStartColor.r) * scrollPercent);
        const navbarG = Math.floor(navbarStartColor.g + (navbarEndColor.g - navbarStartColor.g) * scrollPercent);
        const navbarB = Math.floor(navbarStartColor.b + (navbarEndColor.b - navbarStartColor.b) * scrollPercent);

        $('header').css('background-color', `rgb(${navbarR}, ${navbarG}, ${navbarB})`);

        // Change navbar text color
        if (scrollPercent > 0.8) {
            $('nav ul li a').css('color', '#fff');
        } else {
            $('nav ul li a').css('color', '#333');
        }

        // Background color transition
        const startColor = { r: 173, g: 216, b: 230 }; // sky blue
        const endColor = { r: 64, g: 64, b: 64 }; // dark gray

        const r = Math.floor(startColor.r + (endColor.r - startColor.r) * scrollPercent);
        const g = Math.floor(startColor.g + (endColor.g - startColor.g) * scrollPercent);
        const b = Math.floor(startColor.b + (endColor.b - startColor.b) * scrollPercent);

        $('body').css('background-color', `rgb(${r}, ${g}, ${b})`);

        // Starry sky effect
        if (scrollPercent > 0.8) {
            $('body').addClass('starry-sky');
            $('#stars').fadeIn();
        } else {
            $('body').removeClass('starry-sky');
            $('#stars').fadeOut();
        }

        // Sun fade effect
        const sunOpacity = 1 - scrollPercent;
        $('#sun').css('opacity', sunOpacity);

        // Moon fade effect
        const moonOpacity = Math.min(1, Math.max(0, (scrollPercent - 0.2) * 5));
        $('#moon').css('opacity', moonOpacity);
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

    // Create stars
    const starContainer = document.createElement('div');
    starContainer.id = 'stars';
    document.body.appendChild(starContainer);

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        starContainer.appendChild(star);
    }

    $('#stars').hide(); // Hide stars initially
});
