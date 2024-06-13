/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById("paymentForm");
  let card = document.getElementById("cardNumber");
  let cvc = document.getElementById("cvcNumber");
  let amount = document.getElementById("amount");
  let name = document.getElementById("firstName");
  let lastn = document.getElementById("lastName");
  let city = document.getElementById("city");
  let state = document.getElementById("state");
  let postal = document.getElementById("postalCode");
  let textBox = document.getElementById("message");
  let alerta = document.getElementById("alert");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const validateField = (field, errorMessage) => {
      if (field.value.trim() === "") {
        field.classList.add("is-invalid");
        field.style.backgroundColor = "#ffdddd";
        return errorMessage;
      } else {
        field.classList.remove("is-invalid");
        field.style.backgroundColor = "";
        return "";
      }
    };

    let errorMessage = "";

    errorMessage += validateField(card, "Card number is required. ");
    errorMessage += validateField(cvc, "CVC number is required. ");
    errorMessage += validateField(amount, "Amount is required. ");
    errorMessage += validateField(name, "First name is required. ");
    errorMessage += validateField(lastn, "Last name is required. ");
    errorMessage += validateField(city, "City is required. ");
    errorMessage += validateField(state, "State is required. ");
    errorMessage += validateField(postal, "Postal code is required. ");
    errorMessage += validateField(textBox, "Message is required. ");

    if (errorMessage !== "") {
      alerta.textContent = "Some fields are missing";
      alerta.classList.remove("d-none");
    } else {
      alerta.classList.add("d-none");
    }
  });
});
