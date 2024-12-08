// Initialize EmailJS
(function () {
    emailjs.init("bTvkyAsEyrR-sR2qM"); 
})();

function scrollToForm() {
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("serviceForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const params = {
        name,
        phone,
        service,
        message,
    };

    emailjs
        .send("moberk", "template_m9ppgu4", params)
        .then(() => {
            alert("Your request has been submitted! We will contact you shortly.");
            document.getElementById("serviceForm").reset();
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("An error occurred. Please try again later.");
        });
});
