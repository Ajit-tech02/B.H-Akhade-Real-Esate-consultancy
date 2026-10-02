/* =========================================================
   B.H AKHADE REAL ESTATE
   MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {

            navbar.classList.toggle("active");
            menuToggle.classList.toggle("active");

            const expanded =
                menuToggle.getAttribute("aria-expanded") === "true";

            menuToggle.setAttribute(
                "aria-expanded",
                String(!expanded)
            );
        });


        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================================
       HEADER SCROLL EFFECT
       ===================================================== */

    const header = document.getElementById("header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* =====================================================
       BACK TO TOP
       ===================================================== */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });


        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =====================================================
       CONTACT FORM
       ===================================================== */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name")?.value.trim() || "";

            const phone =
                document.getElementById("phone")?.value.trim() || "";

            const email =
                document.getElementById("email")?.value.trim() || "";

            const requirement =
                document.getElementById("requirement")?.value || "";

            const message =
                document.getElementById("message")?.value.trim() || "";


            if (!name || !phone || !requirement) {

                alert(
                    "Please enter your name, phone number and property requirement."
                );

                return;
            }


            /*
             * Replace this number with the actual WhatsApp
             * business number of B.H Akhade Real Estate.
             *
             * IMPORTANT:
             * Use country code without + or spaces.
             *
             * Example:
             * const whatsappNumber = "919876543210";
             */

            const whatsappNumber = "919999999999";


            const whatsappMessage =
                "Hello B.H Akhade Real Estate,%0A%0A" +

                "Name: " +
                encodeURIComponent(name) +

                "%0APhone: " +
                encodeURIComponent(phone) +

                "%0AEmail: " +
                encodeURIComponent(email || "Not provided") +

                "%0ARequirement: " +
                encodeURIComponent(requirement) +

                "%0AMessage: " +
                encodeURIComponent(message || "Not provided") +

                "%0A%0AThank you.";


            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                whatsappMessage;


            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        });

    }


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const headerHeight =
                header ? header.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       IMAGE ERROR HANDLING
       ===================================================== */

    const images = document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {

            /*
             * Keep the layout working even when an image
             * has not yet been uploaded.
             */

            image.style.background =
                "linear-gradient(135deg, #dbe3eb, #aebdca)";

        });

    });


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".property-card, .service-card, .contact-card, .about-content, .about-image"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries, observerInstance) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("reveal");
                            entry.target.classList.add("visible");

                            observerInstance.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.1
                }
            );


        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });

    }


    /* =====================================================
       ESC KEY CLOSES MOBILE MENU
       ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (navbar) {
                navbar.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.classList.remove("active");
                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        }

    });

});
