// custon realtime booking
document.getElementById('tripType').addEventListener('input', function () {
  document.getElementById('outputTripType').innerText = this.value;
})

document.getElementById("fullName").addEventListener("input", function () {
  document.getElementById("outputFullName").innerText = this.value;
});

document.getElementById("dateOfTravel").addEventListener("input", function () {
  document.getElementById("outputDateOfTravel").innerText = this.value;
});

document.getElementById("numAdults").addEventListener("input", function () {
  document.getElementById("outputNumAdults").innerText = this.value;
});

document.getElementById("numChildren").addEventListener("input", function () {
  document.getElementById("outputNumChildren").innerText = this.value;
});

document.getElementById("emailAddress").addEventListener("input", function () {
  document.getElementById("outputemailAddress").innerText = this.value;
});

document.getElementById("phoneNumber").addEventListener("input", function () {
  document.getElementById("outputphoneNumber").innerText = this.value;
});

document.getElementById("country").addEventListener("input", function () {
  document.getElementById("outputCountry").innerText = this.value;
});


document.getElementById("message").addEventListener("input", function () {
  document.getElementById("outputMessage").innerText = this.value;
});

// date picker
document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#dateOfTravel", {
    dateFormat: "Y-m-d", // Format of the selected date (change as needed)
    enableTime: false, // Set to true if you want to enable time selection as well
  });
});
// date picker
document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#inquiryDateOfTravel", {
    dateFormat: "Y-m-d", // Format of the selected date (change as needed)
    enableTime: false, // Set to true if you want to enable time selection as well
  });
});