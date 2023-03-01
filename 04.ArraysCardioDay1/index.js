//Fundamentals methods in Arrays.
const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Nicholaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},

]


const people = [
    'Beck, Gleen', 'Becker, Carl', 'Benenson, Peter', 'Berio, Luciano', 'Black Elk', 'Blair, Tony', 'Blake, William'
]

//Array.prototype.filter()
//1. Filter  the list of inventor for those who were born  in the 1500's

const filter = inventors.filter((inventor)=> inventor.year >= 1500 && inventor.year < 1599 ? true : false)

// console.log(filter);

//Array.prototype.map
//2. Give us an array of the inventory first and last names

const map = inventors.map((inventor) => inventor.first + " " + inventor.last);

// console.log(map)

//Array.prototype.sort
//3.Sort the inventors by bithdate, oldest to youngest

const sort = inventors.sort((inventor1, inventor2) => inventor1.year > inventor2.year ? 1 : -1)

// console.log(sort);

//Array.prototype.reduce
//4. How many years did all the inventors live

const reduce = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

// console.log(reduce);

// 5.Sort the inventor by years lived

const yearsLived = inventors.sort((inventor1, inventor2)=> {
    const first = inventor1.passed - inventor1.year;
    const second = inventor2.passed - inventor2.year;
    return first > second ? -1 : 1
});

// console.log(yearsLived);

//6. Create a list of boulevards in Paris that contains  'de' anywhere  in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
//         //the array.from is for convert the link to array
//         const links = Array.from(category.querySelectorAll('a'));

//         const de = links
//                     .map(link => link.textContent)
//                     .filter(streetName => streetName.includes('de'));

//7.Sort exercise
//sort the people Alphabetically by last name

const alpha = people.sort((firtsName, secondName)=> {
    const [afirst, aLast] = firtsName.split(', ');
    const [bfirst, bLast] = secondName.split(', ');
    return afirst > bfirst ? 1 : -1;

});

// console.log(alpha);

//8.reduce Exercise
//sum up  the instances of each of these

const data =  ['car', 'car', 'truck', 'truck', 'bike','walk', 'car', 'van', 'bike', 'car']

const reduceVehicule = data.reduce((obj, item)=>{
 if(!obj[item]){
    obj[item]= 0;
 }
 obj[item]++;
 return obj;
},{});

// console.log(reduceVehicule);