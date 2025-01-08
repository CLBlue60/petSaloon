function Service(description, price) {
  this.description = description;
  this.price = price;
}


let services = [];

$(document).ready(function () {

  $("#serviceForm").on("submit", function (event) {
    event.preventDefault();


    let description = $("#description").val().trim();
    let price = parseFloat($("#price").val());

    // Validate inputs
    if (!description || !price || price <= 0) {
      showNotification("Please fill out the form correctly.", "danger");
      return;
    }


    let newService = new Service(description, price);
    services.push(newService);

    // Display success notification
    showNotification("Service registered successfully!", "success");

    // Clear the form
    $("#serviceForm")[0].reset();
    $("#serviceForm").removeClass("was-validated");
  });

  $("#serviceForm").on("submit", function (event) {
    let form = this;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add("was-validated");
  });

  // Function to display notifications
  function showNotification(message, type) {
    let notification = $("#notification");
    notification
      .removeClass("d-none alert-success alert-danger")
      .addClass(`alert alert-${type}`)
      .text(message);


    setTimeout(() => {
      notification.addClass("d-none");
    }, 3000);
  }
});
