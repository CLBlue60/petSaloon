let pets = [];

let petSaloon
 = {
    name:"The Petty Pet",
    address:{
        street:"Guerrero Dr",
        zip:"75006"
    },
    phone:"6066066969"
 }

 console.log(petSaloon)


let pet1 = {
    name:"Scooby",
    age:"60",
    gender:"Male"
}
let pet2 = {
  name: "Garfield",
  age: "55",
  gender: "Male",
};
let pet3 = {
  name: "Scrappy",
  age: "30",
  gender: "Male",
};

pets.push(pet1,pet2,pet3);
console.log(pets);

function displayNames(){
    console.log(pets[0].name)
    

}
