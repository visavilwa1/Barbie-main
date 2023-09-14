
    const headerText = "Welcome To Barbie's Cyber Security Hub";
    const headerElement = document.getElementById("typed-header");
    let currentIndex = 0;
    let isDeleting = false;

    function typeText() {
        if (isDeleting) {
            headerElement.textContent = headerText.substring(0, currentIndex - 1);
            currentIndex--;
        } else {
            headerElement.textContent = headerText.substring(0, currentIndex + 1);
            currentIndex++;
        }

        if (currentIndex > headerText.length) {
            isDeleting = true;
        }

        if (currentIndex === 0) {
            isDeleting = false;
        }
    }

    // Adjust the interval (e.g., 100 milliseconds) for typing speed.
    const typingInterval = setInterval(typeText, 100);


    $(document).ready(function () {
        var containerBanner = $(".container-banner");
        var aboutSection = $("#about");

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            var aboutSectionTop = aboutSection.offset().top;
            var containerBannerHeight = containerBanner.height();
            var windowHeight = $(window).height();

            // Calculate the new top position of the .container-banner
            var newTop = (scroll > aboutSectionTop - windowHeight / 2) ? windowHeight / 2 : scroll + windowHeight / 2 - containerBannerHeight / 2;

            containerBanner.css("top", newTop);
        });
    });

