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
    }, 10000);

    
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

    
    $(window).scroll(function() {
        const scroll = $(window).scrollTop();
        const maxScroll = $(document).height() - $(window).height();
        const scrollPercent = scroll / maxScroll;
        const navbarStartColor = { r: 173, g: 216, b: 230 }; 
        const navbarEndColor = { r: 64, g: 64, b: 64 }; 

        const navbarR = Math.floor(navbarStartColor.r + (navbarEndColor.r - navbarStartColor.r) * scrollPercent);
        const navbarG = Math.floor(navbarStartColor.g + (navbarEndColor.g - navbarStartColor.g) * scrollPercent);
        const navbarB = Math.floor(navbarStartColor.b + (navbarEndColor.b - navbarStartColor.b) * scrollPercent);

        $('header').css('background-color', `rgb(${navbarR}, ${navbarG}, ${navbarB})`);

        
        if (scrollPercent > 0.8) {
            $('nav ul li a').css('color', '#fff');
        } else {
            $('nav ul li a').css('color', '#333');
        }

        
        const startColor = { r: 173, g: 216, b: 230 }; 
        const endColor = { r: 64, g: 64, b: 64 }; 

        const r = Math.floor(startColor.r + (endColor.r - startColor.r) * scrollPercent);
        const g = Math.floor(startColor.g + (endColor.g - startColor.g) * scrollPercent);
        const b = Math.floor(startColor.b + (endColor.b - startColor.b) * scrollPercent);

        $('body').css('background-color', `rgb(${r}, ${g}, ${b})`);

        
        if (scrollPercent > 0.8) {
            $('body').addClass('starry-sky');
            $('#stars').fadeIn();
        } else {
            $('body').removeClass('starry-sky');
            $('#stars').fadeOut();
        }

        
        const sunOpacity = 1 - scrollPercent;
        $('#sun').css('opacity', sunOpacity);

        
        const moonOpacity = Math.min(1, Math.max(0, (scrollPercent - 0.2) * 5));
        $('#moon').css('opacity', moonOpacity);
    });

    
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

    $('#stars').hide(); 

    const rainbowText = document.querySelector('.rainbow-wave');
    const text = rainbowText.textContent;
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    rainbowText.innerHTML = text.split('').map((char, index) => {
        const color = char === ' ' ? 'transparent' : colors[index % colors.length];
        return `<span style="--i:${index + 1}; color:${color}">${char === ' ' ? '&nbsp;' : char}</span>`;
    }).join('');

    const glowingText = document.querySelector('.glowing-text');
    setInterval(() => {
        glowingText.style.textShadow = '0 0 20px rgba(255, 255, 0, 0.8), 0 0 30px rgba(255, 255, 0, 0.6), 0 0 40px rgba(255, 255, 0, 0.4), 0 0 50px rgba(255, 255, 0, 0.2), 0 0 60px rgba(255, 255, 0, 0.1)';
        setTimeout(() => {
            glowingText.style.textShadow = '0 0 10px rgba(255, 255, 0, 0.8), 0 0 20px rgba(255, 255, 0, 0.6), 0 0 30px rgba(255, 255, 0, 0.4), 0 0 40px rgba(255, 255, 0, 0.2), 0 0 50px rgba(255, 255, 0, 0.1)';
        }, 1000); 
    }, 3000); 

    const galleryHeading = document.querySelector('#gallery-heading');
    galleryHeading.innerHTML = galleryHeading.textContent.split('').map((letter, index) => {
        return `<span style="--i: ${index};">${letter}</span>`;
    }).join('');

    $('#events ul li').each(function(index) {
        $(this).css('opacity', 0);
        $(this).delay(index * 200).animate({ opacity: 1 }, 1000);
    });

    $('#events ul li').hover(
        function() {
            $(this).css('transform', 'scale(1.1)');
            $(this).css('background-color', '#80e1ff');
        },
        function() {
            $(this).css('transform', 'scale(1)');
            $(this).css('background-color', '');
        }
    );

    const cloudImages = [
        'cloud.png',
        'cloud.png',
        'cloud.png',
        'cloud.png',
        'cloud.png',
        'cloud.png',
        'cloud.png',
        'cloud.png',
        'cloud.png',
        'cloud.png',
        'cloud.png',
        'cloud.png',

    ];

    const cloudContainer = document.querySelector('#home .content');

    cloudImages.forEach((src, index) => {
        const cloud = document.createElement('img');
        cloud.src = `images/${src}`;
        cloud.classList.add('cloud');
        cloud.style.top = `${Math.random() * 50 + 5}%`; 
        cloud.style.left = `${Math.random() * 60 + 15}%`; 
        cloud.style.width = `${Math.random() * 30 + 10}vw`; 
        cloudContainer.appendChild(cloud);
    });

});
