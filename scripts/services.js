function Service(description, price) {
  this.description = description;
  this.price = price;
}

let services = [];

$(document).ready(function () {
  $("#serviceForm").on("submit", function (event) {
    event.preventDefault();

    let form = this; // Reference to the form element
    let description = $("#description").val().trim();
    let price = parseFloat($("#price").val());

    // Validate inputs
    if (!form.checkValidity() || !description || isNaN(price) || price <= 0) {
      showNotification("Please fill out the form correctly.", "danger");
      form.classList.add("was-validated");
      return;
    }

    // Create a new service and add it to the array
    let newService = new Service(description, price);
    services.push(newService);

    // Display success notification
    showNotification("Service registered successfully!", "success");

    // Clear the form
    form.reset();
    form.classList.remove("was-validated");
  });

  // Function to display notifications
  function showNotification(message, type) {
    let notification = $("#notification");

    // Update notification text and classes
    notification
      .removeClass("d-none alert-success alert-danger")
      .addClass(`alert alert-${type}`)
      .text(message);

    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
      notification.addClass("d-none");
    }, 3000);
  }
});
