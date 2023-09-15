
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

   