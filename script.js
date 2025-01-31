document.addEventListener("DOMContentLoaded", function() {
    // Typing text effect
    const typingText = "Asritha Lingala\nFull stack Developer";
    let index = 0;
    const typingTextElement = document.getElementById("typingText");

    function typeText() {
        if (index < typingText.length) {
            typingTextElement.textContent += typingText.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust the speed (100ms here)
        }
    }

    typeText();

    // IntersectionObserver to reveal sections when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
            }
        });
    }, { threshold: 0.5 });

    // Observing all sections with the 'reveal-on-scroll' class
    document.querySelectorAll('.reveal-on-scroll').forEach((section) => {
        observer.observe(section);
    });

    // Smooth Scroll to Sections on Button Click
    const buttons = document.querySelectorAll('.nav-buttons .btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = button.getAttribute('data-target'); // Get target section ID
            const targetSection = document.querySelector(`#${targetId}`); // Find the section by ID

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
