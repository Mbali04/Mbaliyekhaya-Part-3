// ==========================
// Welcome Message
// ==========================
window.onload = function () {
    alert("Welcome to Checkers Club South Africa!");
};

// ==========================
// Form Validation
// ==========================
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (event) {

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        if (name.value.trim() === "") {
            alert("Please enter your name.");
            event.preventDefault();
            return;
        }

        if (email.value.trim() === "") {
            alert("Please enter your email.");
            event.preventDefault();
            return;
        }

        if (message.value.trim().length < 10) {
            alert("Message must be at least 10 characters.");
            event.preventDefault();
            return;
        }

        alert("Thank you! Your enquiry has been submitted.");
        form.reset();
    });

}

// ==========================
// Image Animation
// ==========================
const images = document.querySelectorAll("img");

images.forEach(function(image){

    image.addEventListener("mouseover",function(){

        image.style.transform="scale(1.05)";
        image.style.transition="0.4s";

    });

    image.addEventListener("mouseout",function(){

        image.style.transform="scale(1)";

    });

});

// ==========================
// Footer Year
// ==========================
const footer = document.querySelector("footer p");

if(footer){

    const year = new Date().getFullYear();

    footer.innerHTML = year + " Checkers Club | All Rights Reserved";

}