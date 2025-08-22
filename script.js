document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name && email && message) {
        alert("Message Sent Successfully!");
        // Optionally, you can clear the form fields after sending the message
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
