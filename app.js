const search = document.querySelector(".inputFilter");
const containerCards = document.querySelector(".containerCards");
// const URL = 'https://rickandmortyapi.com/api/character/?name=';

window.addEventListener('DOMContentLoaded', () => {
    let URL = 'https://rickandmortyapi.com/api/character';
    filter(URL)
})

search.addEventListener("keyup", () => {
    let URLFilter = `https://rickandmortyapi.com/api/character/?name=${search.value}`
    filter(URLFilter);
});

function filter(URL) {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        containerCards.innerHTML = (null)
        data.results.map(character => createCharacter(character))
        // console.log(data);
    });
}

filter()

function createCharacter(character) {
    const img = document.createElement("img");
    img.src = character.image;
    img.setAttribute('alt', character.name);
    img.classList = "image" 
    
    const h2 = document.createElement("h2");
    h2.textContent = character.name;
    h2.classList = "name" 
    
    const div = document.createElement("div");
    div.classList = "card" 

    const divText = document.createElement("div");
    divText.classList = "divText" 
    
    const status = document.createElement("p");
    status.textContent = "Status: " + character.status
    status.classList = "status" 

    const specie = document.createElement("p");
    specie.textContent = "Specie: " + character.species
    specie.classList = "specie" 

    const gender = document.createElement("p");
    gender.textContent = "Gender: " + character.gender
    gender.classList = "gender" 

    div.appendChild(img);
    divText.appendChild(h2);
    divText.appendChild(specie);
    divText.appendChild(status);
    divText.appendChild(gender);
    div.appendChild(divText);
    containerCards.appendChild(div);
}