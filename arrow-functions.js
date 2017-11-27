const scores = [60, 40, 56, 77, 89];
let filteredScores = scores.filter((n) => n > 60);
console.log(filteredScores);

var multiply = (x, y) => x * y;

var wish = user => `Hello ${user}`;

var whoAreYou = () => `Arrow function with no params`;

let smartPhones = [
    {name: 'iphone', price: 649},
    {name: 'Galaxy S6', price: 576},
    {name: 'Galaxy Note 5', price: 489}
];

// ES6
console.log(smartPhones.map(smartPhone => smartPhone.name)); // [649, 576, 489]