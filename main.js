var full_name = document.getElementById("name").value;
var email = document.getElementById("email").value
var message = document.getElementById("message").value

var name_test = /^[A-Za-z]{3,}[A-Za-z]*$/;
var email_test = /^[a-zA-Z0-9._%+-]+@\.co$/;
var message_test = /^(?=[^a-zA-Z]*[a-zA-Z])[^a-zA-Z]*[a-zA-Z]{3,}[^a-zA-Z]*$/ ;


function form_validation(){
    if(!name_test.test(full_name)){
        alert("Name Must not contain numbers or symbols");
    }
    if(!email_test.test(email)){
        alert("Email Must contain an @ and .co atleast");
    }
    if(!message_test.test(message)){
        alert("Message must contain atleast 3 characters");
    }

var buton = document.getElementById("buton")

}
$(document).ready(function () {
    // Style the button as a "sticker" on the left side
    $("#darkModeToggle").css({
        position: "fixed",
        bottom: "20px",
        left: "20px",
        backgroundColor: "#415a77",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "25px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        zIndex: "1000",
        transition: "transform 0.2s ease", // Animation for click effect
    });

    // Handle click for dark mode toggle
    $("#darkModeToggle").click(function () {
        const isDarkMode = $("body").hasClass("dark-mode");

        // Add a temporary scale animation
        $(this).css({ transform: "scale(1.1)" }); // Scale up
        setTimeout(() => $(this).css({ transform: "scale(1)" }), 200); // Reset scale

        if (isDarkMode) {
            // Switch to light mode
            $("body").removeClass("dark-mode").css({
                "background-color": "#bde0fe",
                "color": "black"
            });
            $(".navbar").css({ "background-color": "#219ebc" });
            $(".btn").css({ "background-color": "#219ebc", color: "white" });
            $(".btn:hover").css({ "background-color": "#bde0fe", color: "#219ebc" });
            $(".card-title").css({ color: "#219ebc" });
            $(".card-body").css({ "background-color": "#023e8a", color: "white" });
            $(this).text("Dark Mode");
        } else {
            // Switch to dark mode
            $("body").addClass("dark-mode").css({
                "background-color": "#121212",
                "color": "#ffffff"
            });
            $(".navbar").css({ "background-color": "#333" });
            $(".btn").css({ "background-color": "#415a77", color: "white" });
            $(".card-title").css({ color: "#ffffff" });
            $(".card-body").css({ "background-color": "#1e1e1e", color: "#ffffff" });
            $(this).text("Light Mode");
        }
    });
});

document.getElementById('name').addEventListener('input', function(event) {
    var name = event.target.value;
    event.target.value = name.replace(/[^a-zA-Z\s]/g, '');
});
 document.getElementById("buton").addEventListener("click", form_validation);
