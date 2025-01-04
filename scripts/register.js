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
  constructor(name, age, gender, breed, service, type) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
  }
}

// Pre-registering pets
let pet1 = new Pet("Buddy", 3, "Male", "Golden Retriever", "Grooming", "Dog");
let pet2 = new Pet("Mittens", 2, "Female", "Persian", "Bathing", "Cat");
let pet3 = new Pet("Tweety", 1, "Male", "Canary", "Nail Trim", "Bird");

salon.pets.push(pet1, pet2, pet3);

// Display pets in table
function displayRow() {
  let petDisplay = document.getElementById("pet-display");
  if (petDisplay) {
    petDisplay.innerHTML = "";
    salon.pets.forEach((pet, i) => {
      petDisplay.innerHTML += `
        <tr>
          <td>${i + 1}</td>
          <td>${pet.name}</td>
          <td>${pet.age}</td>
          <td>${pet.gender}</td>
          <td>${pet.breed}</td>
          <td>${pet.service}</td>
          <td>${pet.type}</td>
        </tr>
      `;
    });
  }
}

function registerPet(event) {
  event.preventDefault(); // Prevent form submission from reloading the page

  let name = document.getElementById("name").value;
  let age = parseInt(document.getElementById("age").value);
  let gender = document.getElementById("gender").value;
  let breed = document.getElementById("breed").value;
  let service = document.getElementById("service").value;
  let type = document.getElementById("type").value;

  let newPet = new Pet(name, age, gender, breed, service, type);
  salon.pets.push(newPet); // Add the new pet to the array

  alert(`${name} has been registered!`);
  document.getElementById("pet-form").reset(); // Clear the form fields

  displayRow(); // Update the table
}


// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  displayRow();
  let petForm = document.getElementById("pet-form");
  if (petForm) {
    petForm.addEventListener("submit", registerPet);
  }
});
