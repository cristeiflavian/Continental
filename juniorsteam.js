window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navigation = document.getElementsByClassName("navigation")[0];
toggleButton.addEventListener("click", () =>{
    navigation.classList.toggle("active");
});

function sendEmail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_w88wuhb", "template_p55h0hu", params)
        .then(function(response) {
            alert("Mail trimis cu succes");
        })
        .catch(function(error) {
            console.error("Error sending email:", error);
            alert("A apărut o eroare la trimiterea emailului.");
        });
}



