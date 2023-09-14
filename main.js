
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

