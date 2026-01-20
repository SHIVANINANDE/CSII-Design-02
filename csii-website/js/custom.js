// JavaScript Document

AOS.init(); // For on scroll Animation

function scrollToTop() {
    window.scrollTo(0, 0);
}

// Header scroll logic removed - relying on CSS sticky/fixed positioning for glass effect

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {
        $('.scrollTop').addClass('opacity-100').removeClass('opacity-0');
        $('.whatsapp-wrap').addClass('opacity-100').removeClass('opacity-0');
    } else {
        $('.scrollTop').removeClass('opacity-100').addClass('opacity-0');
        $('.whatsapp-wrap').removeClass('opacity-100').addClass('opacity-0');
    }
});

// script for menu active class added on onclick
document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link, .dropdown-item");
    let currentPage = window.location.href; // Get full current URL

    navLinks.forEach(link => {
        if (link.href === currentPage || window.location.href.includes(link.getAttribute("href"))) {
            link.classList.add("active");

            // Ensure the parent dropdown menu stays open by adding the class
            let parentDropdown = link.closest(".dropdown");
            if (parentDropdown) {
                parentDropdown.querySelector(".dropdown-toggle").classList.add("active");
            }
        } else {
            link.classList.remove("active");
        }
    });


    const submitBtn = document.querySelector('.submit-callback');
    const spinner = submitBtn.querySelector('.spinner-border');
    const btnText = submitBtn.querySelector('.btn-text');

    submitBtn.addEventListener('click', async function () {
        console.log('ok');
        const name = document.querySelector('.user-name').value.trim();
        const phone = document.querySelector('.user-phone').value.trim();
        const email = document.querySelector('.user-email').value.trim();
        const company = document.querySelector('.user-company').value.trim();
        const city = document.querySelector('.user-city').value.trim();
        const product = document.querySelector('.user-product').value.trim();
        const date = document.querySelector('.preferred-date').value.trim();
        const time = document.querySelector('.preferred-time').value.trim();
        const message = document.querySelector('.enquiry-details').value.trim();

        const errors = [];
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) errors.push("Name is required.");
        if (!phone || phone.length < 10) errors.push("Valid phone number is required.");
        if (!email || !emailRegex.test(email)) errors.push("Valid email is required.");
        if (!company) errors.push("Company name is required.");
        if (!city) errors.push("City is required.");
        if (product === "Select Products") errors.push("Please select a product.");
        if (!message) errors.push("Enquiry details are required.");

        if (errors.length > 0) {
            alert("Please fix the following errors:\n\n" + errors.join("\n"));
            return;
        }
        const preferredDateText = date ? `Date - ${date}` : "Date - NA";
        const preferredTimeText = time ? `Time - ${time}` : "Time - NA";
        const finalMessage = `
Name: ${name}
Phone: ${phone}
Email: ${email}
Company: ${company}
City: ${city}
Product: ${product}
Preferred Callback: ${preferredDateText}, ${preferredTimeText}
Message: ${message}
`;

        submitBtn.disabled = true;
        spinner.classList.remove('d-none');
        btnText.textContent = "Sending...";

        try {
            const authRes = await fetch('https://tubasmartoffice.com/smart-office/rest/auth/authenticateUser', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: 'BUGU',
                    password: 'BUGU@1234',
                    system: 'SMOF'
                })
            });

            const authData = await authRes.json();
            const lid = authData.lid;

            if (!lid) throw new Error('Authentication failed');

            const sendRes = await fetch('https://tubasmartoffice.com/smart-office/rest/bug-tracker/send-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'lid': lid,
                    'system': 'SMOF'
                },
                body: JSON.stringify({
                    message: finalMessage,
                    mailTo: 'aro@csii.in',
                    subject: 'REQUEST A CALL BACK'
                })
            });

            const sendData = await sendRes.json();
            alert('Message Sent Successfully. Team Will get in touch shortly');
            const modalEl = document.querySelector('#callback');
            const modal = bootstrap.Modal.getInstance(modalEl);
            if(modal != null){
                modal.hide();
            }
            location.reload();
        } catch (err) {
            console.error(err);
            alert('Failed to send email. Please try again.');
        } finally {

            submitBtn.disabled = false;
            spinner.classList.add('d-none');
            btnText.textContent = "SUBMIT";
        }
    });


});


function sendEnquiry(){
    console.log('ok')
}

