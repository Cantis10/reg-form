import "./Registerform.css";
import React, { useRef } from "react";
import successImg from "./assets/success.png";

function Registerform() {
  const formRef = useRef(null);
  function returnError(errorType) {
    alert(errorType); //you shouldnt have filled those forms like a retard!
  }

  function containsNumber(input) {
    return /\d/.test(input);
  }

  function handleSubmit(event) {
    event.preventDefault();

    var firstName = document.getElementsByName("first-name")[0].value;
    var lastName = document.getElementsByName("last-name")[0].value;
    var phoneNumber = document.getElementsByName("phone-number")[0].value;
    var birthDate = document.getElementsByName("birth-date")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("password")[0].value;
    var confirmPassword =
      document.getElementsByName("confirm-password")[0].value;

    if (
      firstName === "" ||
      lastName === "" ||
      phoneNumber === "" ||
      birthDate === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      returnError("Please fill out all fields.");
      return;
    }

    if (containsNumber(firstName) || containsNumber(lastName)) {
      returnError("Do not input numbers in the name fields.");
      return;
    }

    if (password.length < 8) {
      returnError("Password must be at least 8 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      returnError("Passwords do not match.");
      return;
    }

    const element = formRef.current;
    {
      element.innerHTML = `
      <div class="success">
        <h1>Thank you for Registering!</h1>
        <img src="${successImg}" alt="Success" />
      </div>
    `;
    }
  }

  return (
    <div className="container" id="form" ref={formRef}>
      <div className="header">Sign Up</div>

      <div className="fields">
        <div className="labels fieldGap">
          <div className="label">
            <label htmlFor="username">
              First Name <i className="fas fa-user" />
            </label>
          </div>
          <div className="label">
            <label htmlFor="username">
              Last Name <i className="fas fa-user" />
            </label>
          </div>
          <div className="label">
            <label htmlFor="username">
              Phone Number (+63) <i className="fas fa-phone" />
            </label>
          </div>
          <div className="label">
            <label htmlFor="username">
              Birth Date <i className="fas fa-cake" />
            </label>
          </div>
          <div className="label">
            <label htmlFor="email">
              Email <i className="fas fa-at" />
            </label>
          </div>
          <div className="label">
            <label htmlFor="password">
              Password <i className="fas fa-lock" />
            </label>
          </div>
          <div className="label">
            <label htmlFor="confirm-password">
              Confirm Password <i className="fas fa-lock" />
            </label>
          </div>
        </div>

        <div className="inputs fieldGap">
          <div className="input">
            <input type="text" name="first-name" placeholder="..." />
          </div>
          <div className="input">
            <input type="text" name="last-name" placeholder="..." />
          </div>
          <div className="input">
            <input type="number" name="phone-number" placeholder="..." />
          </div>
          <div className="input">
            <input type="date" name="birth-date" placeholder="..." />
          </div>
          <div className="input">
            <input type="email" name="email" placeholder="..." />
          </div>
          <div className="input">
            <input type="password" name="password" placeholder="..." />
          </div>
          <div className="input">
            <input type="password" name="confirm-password" placeholder="..." />
          </div>
        </div>
      </div>

      <div className="submitContainer">
        <div className="submit" onClick={handleSubmit}>
          <p style={{ userSelect: "none" }}>Submit</p>
        </div>
      </div>
    </div>
  );
}

export default Registerform;
