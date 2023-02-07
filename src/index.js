let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


const toyCollection = document.querySelector("#toy-collection")
const h2 = document.createElement("h2");
const img = document.createElement("img");
const p = document.createElement("p");
const button = document.createElement("button");


function addNewToys() {
  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(data => renderToys(data))
}
addNewToys();

function renderToys(toys) {
  toys.forEach(toy => { 
    const divElement = document.createElement('div');
    divElement.classList.add("card");
    toyCollection.append(divElement);
    divElement.append(h2);
    console.log(h2);
  })
}
