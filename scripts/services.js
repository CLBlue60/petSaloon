function Service(description, price) {
  this.description = description;
  this.price = price;
}

let services = JSON.parse(localStorage.getItem("services")) || []; // Retrieve services from localStorage or initialize as empty

$(document).ready(function () {
  // Load existing services on page load
  updateServicesList();

  $("#serviceForm").on("submit", function (event) {
    event.preventDefault();

    let form = this;
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

    // Save services to localStorage
    localStorage.setItem("services", JSON.stringify(services));

    // Display success notification
    showNotification("Service registered successfully!", "success");

    // Update the displayed list and clear inputs
    updateServicesList();
    form.reset();
    form.classList.remove("was-validated");
  });

  // Function to update the services list display
  function updateServicesList() {
    let servicesList = $("#servicesList");

    // Clear the list and repopulate it
    servicesList.empty();

    if (services.length === 0) {
      servicesList.append(`
        <li class="list-group-item text-center text-muted">No services added yet.</li>
      `);
    } else {
      services.forEach((service, index) => {
        servicesList.append(`
          <li class="list-group-item d-flex justify-content-between align-items-center">
            ${service.description} - $${service.price.toFixed(2)}
            <button class="btn btn-danger btn-sm remove-service" data-index="${index}">
              Remove
            </button>
          </li>
        `);
      });
    }

    // Add remove functionality for each service
    $(".remove-service").on("click", function () {
      let index = $(this).data("index");
      services.splice(index, 1);
      localStorage.setItem("services", JSON.stringify(services));
      updateServicesList();
    });
  }

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
