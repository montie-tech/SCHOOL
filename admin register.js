function checkPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message");
    console.log("Password:", password, '\n', "Confirm Password:", confirmPassword);

    if (password === "" || confirmPassword === "") {
        alert("Password can't be empty!");
        message.textContent = "field cannot be empty";
        return;
    } else if (firstName === "" || firstName === "null") {
        alert("Firstname can't be empty!");
        message.textContent = "Firstname cannot be empty!";
        message.style.color = "red"
        return;
    } else if (lastName === "" || lastName === "null") {
        alert("Lastname can't be empty!");
        message.textContent = "";
        return;
    } else if (email === "" || email === "null") {
        alert("Email can't be empty!");
        message.textContent = "";
        return;
    }

    if (password === confirmPassword) {
        message.textContent = "Passwords Match!";
        message.style.color = "green";

    } else {
        message.textContent = "Passwords don't match!";
        message.style.color = "red";
    }
    if ('Passwords Match') {
        window.location.href = "adminlogin.html";
        return false;
    } else {
        window.location.href = "adminregister.html";
        alert("Invalid username or password");
        return false; // Prevent the form from actually submitting
    }

}