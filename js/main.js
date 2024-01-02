// opdr 1
let people = [
  {
    firstName: "Wesley",
    lastName: "Poth",
    hobby: "Programming",
  },
  {
    firstName: "Lebron",
    lastName: "James",
    hobby: "Basketball",
  },
];

const container = document.querySelector(".container1");
for (let i = 0; i < people.length; i++) {
  const opdr1 = people[i];
  container.innerHTML += `
  <div class= card>
  <li>${opdr1.firstName}</li>
  <li>${opdr1.lastName}</li>
  <li>${opdr1.hobby}</li>
  </div>`;
}

// opdr 2

let container2 = document.querySelector(".container2");

let cars = [
  {
    brand: "Mercedes",
    model: "c63",
    buildYear: 2007,
    price: 696969,
  },

  {
    brand: "mclaren",
    model: "p1",
    buildYear: 2012,
    price: 2000000,
  },
];

for (let i = 0; i < cars.length; i++) {
  const vroom = cars[i];
  container2.innerHTML += `
    <div class= card>      
    <li>${vroom.brand}</li>
    <li>${vroom.model}</li>
    <li>${vroom.buildYear}</li>
    <li>${vroom.price}</li>
    </div>`;
}
container2.innerHTML += `<div class= card>
<li>${cars[0].price + cars[1].price}</li>
</div>`;

// opdr3
function createStudents() {
  let studentsArray = [];

  function createStudent(firstName, className, course) {
    return {
      firstname: firstName,
      classname: className,
      course: course,
    };
  }

  // Studentenobjecten maken en toevoegen aan de array
  studentsArray.push(createStudent("John", "A", "ICT"));
  studentsArray.push(createStudent("Emma", "B", "Engineering"));
  studentsArray.push(createStudent("Michael", "C", "Biology"));

  return studentsArray;
}

// Studenten ophalen vanuit de functie
let students = createStudents();

// Studenten weergeven op de webpagina
let studentListElement = document.querySelector(".studentList");

for (let i = 0; i < students.length; i++) {
  let student = students[i];
  let studentInfo = document.createElement("p");
  studentInfo.innerHTML = `Name:  ${student.firstname}, Class: ${student.classname}, Course: ${student.course};`;
  studentListElement.appendChild(studentInfo);
}

// opdr4

let memes = fetch("https://meme-api.com/gimme/5")
  .then((response) => response.json())
  .then((data) => {
    // Loop door de memes en maak kaarten (cards) voor elke meme
    data.memes.forEach((meme) => {
      // Maak een div-element voor de kaart
      let card = document.createElement("div");
      card.classList.add("card");

      // Voeg de afbeelding, titel en URL toe aan de kaart
      let image = document.createElement("img");

      image.src = meme.url;

      let title = document.createElement("p");

      title.textContent = meme.title;

      let url = document.createElement("p");

      url.innerHTML = meme.postLink;

      // Voeg de elementen toe aan de kaart en vervolgens aan de container
      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(url);
      memeContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.log(
      "Er is een fout opgetreden bij het ophalen van de gegevens:",
      error
    );
  });

const memeContainer = document.querySelector(".memeContainer");

// opdr 5

randomData = document.querySelector(".randomData");
async function fetchData() {
  try {
    const response = await fetch(
      "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
    );
    const data = await response.json();
    displayCards(data);
  } catch (error) {
    console.error(
      "Er is een fout opgetreden bij het ophalen van de gegevens:",
      error
    );
  }
}

// Functie om kaarten weer te geven op de webpagina
function displayCards(data) {
  const cardsContainer = document.querySelector(".randomData");

  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card", item.location); // Voeg de locatieklasse toe

    // Creëer de kaartinhoud
    const cardContent = `
      <h2>${item.name}</h2>
      <p>Location: ${item.city}</p>
    `;

    card.innerHTML = cardContent;
    cardsContainer.appendChild(card);
  });
}

fetchData();

// oefenopdrachten deel 2

// Array met bitcoinwaarden in euro's van de afgelopen 7 dagen en bijbehorende datums
const bitcoinData = [
  { waarde: 40604, datum: "11 dec" },
  { waarde: 40648, datum: "12 dec" },
  { waarde: 38275, datum: "13 dec" },
  { waarde: 30386, datum: "14 dec" },
  { waarde: 39445, datum: "15 dec" },
  { waarde: 39121, datum: "16 dec" },
  { waarde: 38494, datum: "17 dec" },
];

// Variabelen om de hoogste en laagste waarde bij te houden
let hoogsteWaarde = bitcoinData[0].waarde;
let laagsteWaarde = bitcoinData[0].waarde;
let totaleWaarde = 0;

// Bereken gemiddelde, hoogste en laagste waarde met een for-loop
for (let i = 0; i < bitcoinData.length; i++) {
  const huidigeWaarde = bitcoinData[i].waarde;
  totaleWaarde += huidigeWaarde;

  if (huidigeWaarde > hoogsteWaarde) {
    hoogsteWaarde = huidigeWaarde;
  }

  if (huidigeWaarde < laagsteWaarde) {
    laagsteWaarde = huidigeWaarde;
  }
}

const gemiddeldeWaarde = totaleWaarde / bitcoinData.length;

// Resultaten tonen
console.log(
  "Gemiddelde bitcoinwaarde: " + gemiddeldeWaarde + " euro"
);
console.log("Hoogste bitcoinwaarde: " + hoogsteWaarde + " euro");
console.log("Laagste bitcoinwaarde: " + laagsteWaarde + " euro");


// opdr 2

let beroepen = [
  { beroep: 'Apotheker', beginsalaris: 3450 },
  { beroep: 'Automonteur', beginsalaris: 2000 },
  { beroep: 'Bouwvakker', beginsalaris: 1650 },
  { beroep: 'Elektricien', beginsalaris: 2200 },
  { beroep: 'Kinderopvang', beginsalaris: 1890 },
  { beroep: 'Metselaar', beginsalaris: 2400 },
  { beroep: 'Timmerman', beginsalaris: 2300 }
];

let totaalSalaris = 0;
let hoogsteSalaris = beroepen[0].beginsalaris;
let laagsteSalaris = beroepen[0].beginsalaris;
let bestBetaaldBeroep = '';
let minstBetaaldBeroep = '';

for (let i = 0; i < beroepen.length; i++) {
  let huidigSalaris = beroepen[i].beginsalaris;
  totaalSalaris += huidigSalaris;

  if (huidigSalaris > hoogsteSalaris) {
      hoogsteSalaris = huidigSalaris;
      bestBetaaldBeroep = beroepen[i].beroep;
  }

  if (huidigSalaris < laagsteSalaris) {
      laagsteSalaris = huidigSalaris;
      minstBetaaldBeroep = beroepen[i].beroep;
  }
}

let gemiddeldSalaris = totaalSalaris / beroepen.length;

console.log("Totaal salaris van alle beroepen: " + totaalSalaris + " euro");
console.log("Gemiddelde salaris: " + gemiddeldSalaris + " euro");
console.log("Best betaalde beroep: " + bestBetaaldBeroep + " met salaris van " + hoogsteSalaris + " euro");
console.log("Minst betaalde beroep: " + minstBetaaldBeroep + " met salaris van " + laagsteSalaris + " euro");


// opdr 3 

// Verkrijg referenties naar de elementen met querySelectors
const usernameInput = document.querySelector('.username');
const emailInput = document.querySelector('.email');
const sendButton = document.querySelector('.sendButton');

// Voeg event listener toe aan de Send-button11
sendButton.addEventListener('click', function() {
    // Controleer gebruikersnaam
    if (usernameInput.value.length < 3) {
        usernameInput.classList.add('error');
    } else {
        usernameInput.classList.remove('error');
        usernameInput.classList.add('success');
    }

    // Controleer e-mail
    if (emailInput.value === '') {
        emailInput.classList.add('error');
    } else {
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
    }
});


// opd 4 

const cardContainer = document.querySelector('.card-container');

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card2'); // Naam gewijzigd naar card2

            const image = document.createElement('img');
            image.src = product.image;
            image.alt = product.title;

            const title = document.createElement('h2');
            title.textContent = product.title;

            const description = document.createElement('p');
            description.textContent = product.description;

            const price = document.createElement('p');
            price.textContent = 'Prijs: ' + product.price + ' euro';

            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(price);

            cardContainer.appendChild(card); // Toevoegen aan cardContainer
        });
    })
    .catch(error => {
        console.log('Er is een fout opgetreden bij het ophalen van de data:', error);
    });
