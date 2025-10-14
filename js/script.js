// 1.let var const
// 2.Name of Variable
// 3.Assingment operater
// 4.Data type




// let x ="hello world"

// console.log(x)

// console.log("hello world");


// var x = 10
// var x = 5

// console.log(x+y);
//  var x =10
//  var x = 5

//  console.log(x);

//  let x =10
//  let x = 5

//  console.log(x);

//  let x =10
//   x = 15

//  console.log(x);

//  const pi = 3.1416
//  let pi = 4.1542

//  console.log(pi)

// scope 
// {
//     var x = "hello developer"
// }

// console.log(x)

// {
//     let x = "hello developer"
//     console.log(x);
// }

// jogg kora 

// let x = 10
// let y = 20
// let z = x+y
// console.log(z)

// let x = 100
// let y = 20
// let z = x-y
// console.log(z)

// let x = 10
// let y = 20
// let z = x*y
// console.log(z)

// let x = 100
// let y = 20
// let z = x/y
// console.log(z)

// let age = 70


// console.log("Amer age"+ " " + age)

// let name = "Nayeem"

// let age = 70;

// console.log("My name is" + " " + name + " " + "my bois is" + " " + age)


// let name = "FM Radio"

// let age = 100;

// console.log("My name is" + " " + name + " " + "my bois is" + " " + age)



// let namtaNumber = 5

// console.log(namtaNumber + " " + "x" + " " + 1 + " " + "=" + " " + namtaNumber*1)

// console.log(namtaNumber + " " + "x" + " " + 2 + " " + "=" + " " + namtaNumber*2)

// console.log(namtaNumber + " " + "x" + " " + 3 + " " + "=" + " " + namtaNumber*3)

// let age = 12

// if(age > 20){
//     console.log("Condition apply");
// }

// else{
//     console.log("condition not working");
// }
// Mattemonial kaj
// Input Part

// let area = "Dhaka"
// let age = 15
// let salary = 50000
// Input Part
// if Part Start
// 1st if
// if (area == "Dhaka"){

    
// 2nd if

//     if(age > 25){
//         // 3rd if
//         if(salary > 50000){
//             console.log("Congtrats We Found You")
//         }
//         // 3rd Else
//         else{
//             console.log("Taka income koro tar por biya koro")
//         }
//     }
//     // 2nd Else
//     else{
//         console.log("Age thik Nai");
//     }

// }
// // 1st Else
// else{
//     console.log("Location thik nai....")
// }

// SSC Grade System

// let marks = 101
// if (marks <0 || Marks >100){
//     alert("Tora akta kosaiya thappor")
// }
//  else if(marks >= 33 && marks <40){
//     console.log("U Got D");
// }
// else if (marks >=40 && marks < 50){
//     console.log("U Got C")
// }
// else if (marks >=50 && marks < 60){
//     console.log("U Got B")
    
// }
// else if (marks >=60 && marks < 70){
//     console.log("U Got A-")
    
// }
// else if (marks >=70 && marks < 80){
//     console.log("U Got A")
    
// }
// else if (marks >=80 && marks <= 100){
//     console.log("U Got A+")
    
// }

// else{
//     console.log("U R Fail")
// }


// // 3 way to jukkto kora

// let name = "Nayeem Golla"

// let friendName = "FM Bohor"

// console.log("My Name is" +  name + "My Friend name is"+ friendName)

// console.log("My Name is", name , "My Friend name is", friendName)

// console.log(`My Name is ${name} My Friend Name Is ${friendName}`)


// let age = 45;

// if (age < 13) {
//     console.log("You are a Child");
// }
// else if (age >= 13 && age < 20) {
//     console.log("You are a Teenager");
// }
// else if (age >= 20 && age < 30) {
//     console.log("You are a Young Adult");
// }
// else if (age >= 30 && age < 50) {
//     console.log("You are an Adult");
// }
// else if (age >= 50 && age < 65) {
//     console.log("You are a Middle-aged Adult");
// }
// else if (age >= 65) {
//     console.log("You are a Senior Citizen");
// }
// else {
//     console.log("Invalid age input");
// }


                         31 Class

let namtaNumber = 5


for (let i = 1; i <= 10; i++){
    console.log(`${namtaNumber} x ${i} = ${namtaNumber * i}`);
}



let namtaNumber = 7

for (let i = 1; i<= 10; i++){
      console.log(`${namtaNumber} x ${i} = ${namtaNumber * i}`)
}


function travelbag(){
    let x = 50
    let y= 70
    let z = x+y
    console.log(z);

}

// call korta hoba  funtion r namka

travelbag()


Arrow function


let attiorBaribag = () =>{
    console.log ("My Name Is Khan");
};

attiorBaribag ()



Array 

let teams = ["Nayem",420,"Ashfak","Nabil","sumen"];

console.log(teams);


let myObject = "" ==== Variable
let myObject = [] ==== Array
let myObject = {} ==== Object 

if(){

} === if Condition

for(){

} === For loop

function(){

} === Function

Object

let member = {
    name: "Al-Amin",
    salary:5,
    id: 1
}

console.log(member.name)
console.log(member.salary)
console.log(member.id)


// or 

let {name, salary, id} = {
    name:"Al-Amin",
    salary: 5,
    id:1,
};

console.log(name,salary,id);
console.log(name)
console.log(salary)
console.log(id)



let memberList = [
    {
    name: "Nayeem",
    Age: 70,
    salary: 0,
    isMarried: "Koranai",
},
{
     name: "Ashfak",
    Age: 80,
    salary: 70000,
    isMarried: "3 Biya",
},


{
     name: "Rafi",
    Age: 80,
    salary: 70000,
    isMarried: "5 Biya",
},


]

// console.log(memberList)
console.log(memberList[0].name)
console.log(memberList[0].salary)
console.log(memberList[0].age)