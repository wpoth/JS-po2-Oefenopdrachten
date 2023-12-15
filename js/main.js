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
container2.innerHTML += `div class= card>
<li>${cars[0].price + auto[1].price}</li>
</div>`

let students = [
    {
      firstName: "Wesley",
      lastName: "Poth",
      hobby: "Programming",
    },
    {
      firstName: "stef",
      lastName: "Den Hollander",
      hobby: "Gamen",
    },
  ];
  
  const container3 = document.querySelector(".container3")
  for (let i = 0; i < students.length; i++) {
    const opdr3 = students[i];
    container3.innerHTML += `
    <div class= card>
    <li>${opdr3.firstName}</li>
    <li>${opdr3.lastName}</li>
    <li>${opdr3.hobby}</li>
    </div>`;
  }