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

// Haal de gegevens op bij het laden van de pagina
fetchData();

// oefenopdrachten deel 2

let bitcoins = [
  {
    value: 40604,
    date: "11 dec",
  },
  {},
];
