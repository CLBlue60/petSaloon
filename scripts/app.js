// Salon Object
const salon = {
  name: "Furry Friends Salon",
  address: {
    street: "123 Pet Lane",
    city: "Petville",
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
const pet1 = new Pet("Buddy", 3, "Male", "Golden Retriever", "Grooming", "Dog");
const pet2 = new Pet("Mittens", 2, "Female", "Persian", "Bathing", "Cat");
const pet3 = new Pet("Tweety", 1, "Male", "Canary", "Nail Trim", "Bird");

salon.pets.push(pet1, pet2, pet3);

// Display pets in index.html
function displayPets() {
  const petDisplay = document.getElementById("pet-display");
  if (petDisplay) {
    petDisplay.innerHTML = "";
    salon.pets.forEach((pet, index) => {
      petDisplay.innerHTML += `
        <li>
          ${index + 1}. Name: ${pet.name}, Age: ${pet.age}, Gender: ${
        pet.gender
      },
          Breed: ${pet.breed}, Service: ${pet.service}, Type: ${pet.type}
        </li>
      `;
    });
  }
}

// Register a pet
function registerPet(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const breed = document.getElementById("breed").value;
  const service = document.getElementById("service").value;
  const type = document.getElementById("type").value;

  const newPet = new Pet(name, parseInt(age), gender, breed, service, type);
  salon.pets.push(newPet);

  alert(`${name} has been registered!`);
  document.getElementById("pet-form").reset();
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  displayPets();
  const petForm = document.getElementById("pet-form");
  if (petForm) {
    petForm.addEventListener("submit", registerPet);
  }
});
