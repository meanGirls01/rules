$(document).ready(function () {
    // Getting references to our form and input
    const signUpForm = $("form.signup");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");
      const usernameInput = $('input#username');

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      let userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
        username: usernameInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
    // When the signup button is clicked, we validate the email and password are not blank
      signUpUser(userData.email, userData.password, userData.username);
      emailInput.val("");
      passwordInput.val("");
      signUpForm.val("");
    });
  
     // If we have an email and password, run the signUpUser function
    function signUpUser(email, password, username) {
      $.post("/api/signup", {
        email: email,
        password: password,
        username: username
      })
        .then(function(data) {
          window.location.replace("/member");
          console.log('signedup');
          // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $('#alert .msg').text(err.responseJSON);
        $('#alert').fadeIn(500);
    }
});
