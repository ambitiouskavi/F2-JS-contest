/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];



function PrintDeveloperswithMap() {
  const newArr = arr.map(myFunction);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] != undefined)
      console.log(newArr[i]);
  }
}
function myFunction(obj) {
  if (obj.profession == "developer")
    return obj.name;
}

function PrintDeveloperbyForEach() {
  arr.forEach(FunctioforEach);
}
function FunctioforEach(obj) {
  if (obj.profession == "developer")
    console.log(obj.name);
}

function addData() {
  //Write your code here
let person={id:4,name:"susan",age:"20",profession:"intern"};
arr[arr.length]=person;
console.log(arr);
}

function removeAdmin() {
  //Write your code here
 arr=arr.filter(checkAdmin)
  console.log(arr);
}
function checkAdmin(obj)
{
  return obj.profession!="admin";
}

function concatenateArray() {
  //Write your code here
  let arr2 = [
    { id: 9, name: "sam", age: "23", profession: "Backend-developer" },
    { id: 8, name: "jonny", age: "24", profession: "junior-Engineer" },
    { id: 7, name: "ram", age: "15", profession: "senior-Engineet" },
  ];
  const arr3=arr.concat(arr2);
  console.log(arr3);
}
