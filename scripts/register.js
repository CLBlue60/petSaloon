const pets = [
  {
    name: "Buddy",
    age: 3,
    gender: "Male",
    service: "Grooming",
    breed: "Golden Retriever",
  },
  {
    name: "Luna",
    age: 2,
    gender: "Female",
    service: "Vaccination",
    breed: "Labrador",
  },
  {
    name: "Max",
    age: 4,
    gender: "Male",
    service: "Check-up",
    breed: "Beagle",
  },
];

function displayPetCount() {
  const petCountElement = document.getElementById("petCount");
  petCountElement.textContent = `Total Pets Registered: ${pets.length}`;
}

function displayPetNames() {
  const petListElement = document.getElementById("petList");
  petListElement.innerHTML = "";

  pets.forEach((pet) => {
    const listItem = document.createElement("li");
    listItem.textContent = pet.name;
    petListElement.appendChild(listItem);
  });
}

function displayAverageAge() {
  const totalAge = pets.reduce((sum, pet) => sum + pet.age, 0);
  const averageAge = (totalAge / pets.length).toFixed(1);

  let averageAgeElement = document.getElementById("averageAge");
  if (!averageAgeElement) {
    averageAgeElement = document.createElement("p");
    averageAgeElement.id = "averageAge";
    document.querySelector("section").appendChild(averageAgeElement);
  }
  averageAgeElement.textContent = `Average Age of Pets: ${averageAge} years`;
}

displayPetCount();
displayPetNames();
displayAverageAge();
