//arguments object -no longer bound with arrow functions
const add = function (a, b) {
  return a + b;
};
console.log(add(55, 1));

// this keyword -no longer bound
const user = {
  name: "Akhilesh",
  cities: ["Rishikesh", "Delhi", "Tehri"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + " has lived in " + city);
  },
};
console.log(user.printPlacesLived());
// challange area
/*const multiplier = {
  number: [1, 2, 3],
  multiplyBy: 2,
  multiPly() {
    return this.multiplier.length[number] * this.multiplyBy;
  },
};
console.log(user.multiPly());*/
/*const multiplier = {
  number: [1, 2, 3],
  multiplyBy: 2,
  multiPly() {
    let product = 1;
    for (let i = 0; i < this.number.length; i++) {
      product *= this.number[i] * this.multiplyBy;
    }
    return product;
  },
};
console.log(multiplier.multiPly());*/
const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};
console.log(multiplier.multiply());

const studensMarks = {
  kavya: [28, 29, 30, 30, 29],
  percentage: 0.3,

  percentageOff() {
    return this.kavya.map((number) => number / this.percentage);
  },
};
console.log(studensMarks.percentageOff());
