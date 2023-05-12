var nameVar = "Akhilesh";
var nameVar = "Manish";
console.log("nameVar", nameVar);
let nameLet = "Vijay";
nameLet = "jullie";
nameLet = "Kavya";
console.log("nameLet", nameLet);
const nameConst = "Surat Singh";

console.log("nameConst", nameConst);
//Block Scoping
var fullName = "Akhilesh Rana";
let firstName;
if (fullName) {
  let firstName = fullName.split(" ")[0];
  console.log(firstName);
}
console.log(firstName);
