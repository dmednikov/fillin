var button = document.getElementsByClassName("a-btn--disabled-alt")[0];
button.classList.remove("a-btn--disabled-alt");

var splits = membershipNumberAndPostalCode.split("  ");

var cardNumber = splits[0];
var postalCode = splits[1];

var cardNumberElement = document.getElementsByName("cardNumber");

cardNumberElement[0].value = cardNumber;

var postalCodeElement = document.getElementsByName("postalCode");

postalCodeElement[0].value = postalCode;