const fn = (item) => {
    console.log("Podany argument to " + item)
}

fn("Hej!")

const fnn = (item, item2) => {
    return `Podany argument to: ${item} i ${item}`
}

 const result = fnn("Hej!", "ho!")

 const btn = document.querySelector('button');

const users = ["ad", "bda", "cda", "fd"];
const usersString = users.join(" ");
console.log(usersString);

const newuser = "ed";
const allUsers = users.concat(newuser);
console.log(allUsers);

const usersFirstLetterUpperCase = users.map(user => user[0].toUpperCase());

console.log(usersFirstLetterUpperCase);

const numbers = [2, 3, 4]
const sqrtNumber = numbers.map(numb => Math.sqrt(numb))

console.log(sqrtNumber)

const usersAge = [20, 22, 54, 32, 11];

usersAge.forEach(age => console.log(`Wiek: ${age} lat`))

//nie w reactie:

const section = document.createElement('section')

usersAge.forEach((age, index, array) => {
    section.innerHTML += (
        `<h1>Użykotnik ${index + 1}</h1>
        <p>Wiek: ${age}</p>`
    )
    if (index === array.length - 1)  {
        document.body.appendChild(section);
    }
})

const NameWith6Letter = users.filter(user => user.length === 3)
console.log(NameWith6Letter)

const customers = [
    { name: "Adam", age: 55},
    { name: "Adam2", age: 53},
    { name: "Ada22", age: 12},
    { name: "Ada22", age: 51}
];

const isUsersAdult = customers.find(customer => customer.age < 18)
console.log(isUsersAdult)

//klasy

class Country {
    constructor(name) {
        this.name = name;
        this.showName = () => console.log(this.name);
    }

    showCountryName() {
        console.log(`Nazwa kraju to ${this.name}`);
    }
    
}

const Poland = new Country('Polska');
Poland.showCountryName();
Poland.showName();

//this
const fn2 = function() {
    console.log(this);
}

fn2()

const car = {
    brand: 'opel',
    age: 2018,
    showAge() {
        console.log(`samochód z ${this.age}`);
    },
    showBrand:() => {
        console.log(`samochód marki ${this.brand}`);
    }
}

car.showAge();
car.showBrand();