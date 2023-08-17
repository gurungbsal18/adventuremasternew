// custon realtime booking

document.querySelector(".fixDepartureName").addEventListener("input", function () {
  document.querySelector(".fixDepartureOutputFullName").innerText = this.value;
});

// document.getElementById("fixDepartureDateOfTravel").addEventListener("input", function () {
//   document.getElementById("fixDepartureOutputDateOfTravel").innerText = this.value;
// });

document.getElementById("fixDepartureNumAdults").addEventListener("input", function () {
  document.getElementById("fixDepartureOutputNumAdults").innerText = this.value;
});

document.getElementById("fixDepartureNumChildren").addEventListener("input", function () {
  document.getElementById("fixDepartureOutputNumChildren").innerText = this.value;
});

document.getElementById("fixDepartureEmailAddress").addEventListener("input", function () {
  document.getElementById("fixDepartureOutputemailAddress").innerText = this.value;
});

document.getElementById("fixDeparturePhoneNumber").addEventListener("input", function () {
  document.getElementById("fixDepartureOutputphoneNumber").innerText = this.value;
});

document.getElementById("fixDepartureCountry").addEventListener("input", function () {
  document.getElementById("fixDepartureOutputCountry").innerText = this.value;
});


document.getElementById("fixDepartureMessage").addEventListener("input", function () {
  document.getElementById("fixDepartureOutputMessage").innerText = this.value;
});

// date picker
// document.addEventListener("DOMContentLoaded", function () {
//   flatpickr("#fixDepartureDateOfTravel", {
//     dateFormat: "Y-m-d", // Format of the selected date (change as needed)
//     enableTime: false, // Set to true if you want to enable time selection as well
//   });
// });

let inputFixDepartureDate = document.getElementById('fixDepartureDateOfTravel');
let outputFixDepartureDate = document.getElementById('fixDepartureOutputDateOfTravel');

outputFixDepartureDate.innerHTML = inputFixDepartureDate.value;