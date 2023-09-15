
    const headerText = "Welcome to Barbie's Cyber Security hub";
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

    const typingInterval = setInterval(typeText, 100);

document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll(".animate__animated");
    elementsToAnimate.forEach(function(element) {
        element.classList.add("animate__animated", "animate__fadeIn");
    });

   
    const containerBanner = document.querySelector(".container-banner");
    setTimeout(() => {
        containerBanner.style.top = "0";
    }, 1000); 
});

