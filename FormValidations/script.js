$(document).ready(() => {
    $("#usernameValidation").hide();
    $("#passwordValidation").hide();
    $("#confirmpasswordValidation").hide();
  
    let usernameError = true;
    let emailError = true;
    let passwordError = true;
    let confirmPasswordError = true;
  
    $("#username").keyup(() => {
      usernameValidation();
    });
  
    const usernameValidation = () => {
      let usernameValue = $("#username").val();
      const usernameRegex = new RegExp(/^[a-z0-9_-]{3,10}$/gim);
      if (usernameValue.length === 0) {
        $("#usernameValidation").show();
        $("#usernameValidation").text("Username can't be empty");
        usernameError = true;
      } else if (!usernameRegex.test(usernameValue)) {
        $("#usernameValidation").show();
        $("#usernameValidation").text("Invalid Username");
        usernameError = true;
      } else {
        $("#usernameValidation").hide();
        usernameError = false;
      }
    };
  
    //EMAIL
    $("#email").keyup(() => {
      emailValidation();
    });
  
    const emailValidation = () => {
      let emailValue = $("#email").val();
      const emailRegex = new RegExp(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      );
      if (emailValue.length === 0) {
        $("#emailValidation").show();
        $("#emailValidation").text("Email id can't be empty");
        emailError = true;
      } else if (!emailRegex.test(emailValue)) {
        $("#emailValidation").show();
        $("#emailValidation").text("Invalid Email id");
        emailError = true;
      } else {
        $("#emailValidation").hide();
        emailError = false;
      }
    };
  
    $("#password").keyup(() => {
      passwordValidation();
    });
  
    const passwordValidation = () => {
      let passwordValue = $("#password").val();
      const strongRegex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      );
      if (passwordValue.length === 0) {
        $("#passwordValidation").show();
        $("#passwordValidation").text("Password can't be empty");
        passwordError = true;
      } else if (!strongRegex.test(passwordValue)) {
        $("#passwordValidation").show();
        $("#passwordValidation").text("Invalid Password");
        passwordError = true;
      } else {
        $("#passwordValidation").hide();
        passwordError = false;
      }
    };
  
    $("#confirmpassword").keyup(() => {
      confirmPasswordValidation();
    });
  
    const confirmPasswordValidation = () => {
      let confirmPasswordValue = $("#confirmpassword").val();
      let passwordValue = $("#password").val();
      if (confirmPasswordValue.length === 0) {
        $("#confirmpasswordValidation").show();
        $("#confirmpasswordValidation").text("Confirm Password can't be empty");
        confirmPasswordError = true;
      } else if (passwordValue !== confirmPasswordValue) {
        $("#confirmpasswordValidation").show();
        $("#confirmpasswordValidation").text(
          "Password and Confirm Password needs to be same"
        );
        confirmPasswordError = true;
      } else {
        $("#confirmpasswordValidation").hide();
        confirmPasswordError = false;
      }
    };
  
    $("#submit-btn").click(() => {
      usernameValidation();
      emailValidation();
      passwordValidation();
      confirmPasswordValidation();
      if (usernameError || emailError || passwordError || confirmPasswordError) {
        return false;
      }
    });
  });