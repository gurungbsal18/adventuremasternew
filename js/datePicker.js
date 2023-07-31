// search bar date picker

document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#dateInput", {
    dateFormat: "Y-m-d", // Format of the selected date (change as needed)
    enableTime: false, // Set to true if you want to enable time selection as well
  });
});
