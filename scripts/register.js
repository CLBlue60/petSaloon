// Salon Object
let salon = {
  name: "The Petty pet",
  address: {
    street: "123 Guerrero Dr",
    city: "Carrollton",
  },
  phone: "(123) 456-7890",
  pets: [],
};

// Pet Constructor
class Pet {
  constructor(name, age, gender, breed, service, species) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.species = species;
  }
}

// Pre-registering pets
let pet1 = new Pet("Buddy", 3, "Male", "Golden Retriever", "Grooming", "Dog");
let pet2 = new Pet("Mittens", 2, "Female", "Persian", "Vaccine", "Cat");
let pet3 = new Pet("Tweety", 1, "Male", "Canary", "Day-Care", "Bird");

salon.pets.push(pet1, pet2, pet3);

displayRow();

// Display pets in table
function displayRow() {
  let petDisplay = document.getElementById("pet-display");
  if (petDisplay) {
    petDisplay.innerHTML = "";
    salon.pets.forEach((pet, i) => {
      petDisplay.innerHTML += `
        <tr id="row-${i}">
          <td>${i + 1}</td>
          <td>${pet.name}</td>
          <td>${pet.age}</td>
          <td>${pet.gender}</td>
          <td>${pet.breed}</td>
          <td>${pet.service}</td>
          <td>${pet.species}</td>
          <td><button class="btn btn-danger" onclick="deletePet(${i})">Delete</button></td>
        </tr>
      `;
    });
  }
}

function deletePet(petId) {
  salon.pets.splice(petId, 1); // Remove the pet from the array
  displayRow(); // Re-render the table to reflect changes
  displayInfo(); // Update the totals
}


function registerPet(event) {
  event.preventDefault(); // Prevent form submission from reloading the page

  let name = document.getElementById("name").value;
  let age = parseInt(document.getElementById("age").value);
  let gender = document.getElementById("gender").value;
  let breed = document.getElementById("breed").value;
  let service = document.getElementById("service").value;
  let species = document.getElementById("species").value;

  let newPet = new Pet(name, age, gender, breed, service, species);
  salon.pets.push(newPet); // Add the new pet to the array

  alert(`${name} has been registered!`);
  document.getElementById("pet-form").reset(); // Clear the form fields

  displayRow(); // Update the table
  displayInfo(); // Update the totals
}


function displayInfo() {
  // Update total pets
  let totalPets = document.getElementById("total");
  totalPets.innerHTML = salon.pets.length;

  // Update grooming count
  let groomingSpan = document.getElementById("gTotal");
  let groomingCounter = salon.pets.filter(
    (pet) => pet.service === "Grooming"
  ).length;

  groomingSpan.innerHTML = groomingCounter;
}

document.addEventListener("DOMContentLoaded", () => {
  displayRow();
  displayInfo(); // Initialize totals
  let petForm = document.getElementById("pet-form");
  if (petForm) {
    petForm.addEventListener("submit", registerPet);
  }
});
