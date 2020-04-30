//Task 1
// let name = prompt("What is your name");
// let age = +prompt("What is your age");
// let text = `Hello ${name}. Your age is ${age}`
// let result = prompt(text);


//2.1 Task
// let input = +prompt("Please enter some figure");
// if (input>0){
//     alert("The figure is positive");
// } else {
//     alert("The figure is negative");
// }

//2.2 Task
// let arr = [34, -24, 11, 1, 8, 29, 4, 6, -3];
//
// let min = 0;
// for (let i=0; i<arr.length; i++){
//     if (min<=arr[i]){
//
//     }else {
//         min = arr[i];
//     }
// }


//Task 3.1
// let numbers = [3, 4, 7, 5, 9];
// // console.log (numbers[2]**2);
// // console.log (numbers[0] + numbers[4]);
// Math.sqrt(numbers[1]);
// console.log(numbers);



//Task 3.2 (парне, не парне число)
// let arr = [34, -24, 11, 1, 8, 29, 4, 6, -3];
// for (let i=0; i<arr.length; i++){
//     if (arr[i]%2===0){
//         alert ("Парне значення"+arr[i]);
//     }else {
//         alert("Не парне значення"+arr[i]);
//     }
// }

//Task 3.2 (кратне, не кратне 3)
// let arr = [34, -24, 11, 1, 8, 29, 4, 6, -3];
// for (let i=0; i<arr.length; i++){
//     if (arr[i]%3===0){
//         alert ("Кратне 3"+arr[i]);
//     }else {
//         alert("Не кратне 3"+arr[i]);
//     }
// }


//Task 3.3
// let temp = arr[0];
// arr[0] = arr[5];
// arr[5] = arr[0];


//Task 4
// let chambers = [["Oleg", "Ihor", "Eugeniy", "Orest"], ["Lili", "Mila", "Igor"],["Pasha", "Nick", "Katya"]];
// console.log(chambers);
//
// for (let i=0; i<chambers.length; i++){
//     for (let j=0; j<chambers.length; j++){
//         if (chambers[i][j]=== "Katya"){
//             console.log("We found her in "+(j+1)+" room!");
//         }
//     }
// }


//Task 5
// let car = {};
// car.mark = "";
// car.volume = "";
// car.color = "";
//
// let cars = [{mark: "Skoda", volume: 3.5, color: "White"},
//     {mark: "BMW", volume: 4.5, color: "White"},
//     {mark: "Audi", volume: 6, color: "White"},
//     {mark: "Renault", volume: 9, color: "White"},
// ];
// console.log(cars);
// let max = cars[0].volume;
// let mark;
// for (let i = 0; i<cars.length; i++){
//     if (((i+1)<cars.length) && max<cars[i+1].volume){
//         max=cars[i+1].volume;
//         mark=cars[i+1].mark;
//     }
// }
// alert(mark+ " has the biggest volume");


// Task 3.4
// let arr = [5, 0, 6, 6, 2, 0, 7, 1, 0, 8, 0];
// let newarr = [];
// for (let i=0; i<arr.length; i++){
//     if (arr[i]!==0){
//         newarr.push(arr[i]);
//     }
// }
// console.log(newarr);

//Task
// let myarr = [[2, 3, 5, 4],
//             [1, 6, 3, 9],
//             [2, 4, 3, 9],
//             [2, 6, 4, 8]];
// let count = 0;
// for (let i=0; i<myarr.length; i++){
//     for (let j=0; i<myarr[i].length; j++){
//         if (i===j){
//             if(myarr[i][j]%2===0){
//                 count++
//             }
//         }
//     }
// }
// console.log(count);

//Task
// let myarr = [[2, 3, 5, 4],
//              [1, 6, 3, 9],
//              [2, 4, 3, 9],
//              [2, 6, 4, 8]];
// for (let i=0; myarr[i].length; i++){
//     for (let j=0; i<myarr[i].length; j++){
//         if(i===j){
//             myarr[i][j] = 1;
//         }
//         if(i<j){
//             myarr[i][j] = 0;
//         }
//         if(j<i){
//             myarr[i][j] = 2;
//         }
//     }
// }
// console.log(myarr);

//Task
// let xiaomiusers = [];
// let kabinets = [[{name:"Oleg",phone:"xiaomi"},
//                  {name:"Igor",phone:"samsung"},
//                  {name:"Ivan",phone:"iphone"}],
//
//                 [{name:"Orest",phone:"xiaomi"},
//                  {name:"Liuda",phone:"meizu"},
//                  {name:"Olga",phone:"xiaomi"}],
//
//                 [{name:"Roma",phone:"xiaomi"}],
//
//                 [{name:"Lesya",phone:"xiaomi"},
//                  {name:"Nick",phone:"samsung"},
//                  {name:"Josh",phone:"xiaomi"}]];
//  for (let i=0; i<kabinets.length; i++){
//      for (let j=0; j<kabinets[i].length; j++){
//          if(kabinets[i][j].phone ==="xiaomi"){
//              xiaomiusers.push (kabinets[i][j]);
//          }
//      }
//  }
//  console.log (xiaomiusers);


//Task
// function max(a,b) {
//     if (a>b){
//         return a;
//     }else {
//         return b;
//     }
// }
// function min(a,b) {
//     if (a>b){
//         return b;
//     }else {
//         return a;
//     }
// }
// function task(a,b,c,d) {
//     let min1 = min(a,b);
//     let min2 = min(c,d);
//     return max(min1, min2);
// }
// let result = task(1,2,3,4);
// console.log (result);

// Triangle area finder
function area(a,b,c) {
    if (a===b){
        isosceles(c,a)
    }else if(a===c) {
        isosceles(b,a);
    }else if(c===b){
        isosceles(a,b)
    }else{
        Geron(a,b,c);
    }
}
function isosceles(b,a) {
    let S = (b/2)*Math.sqrt((a+(b/2))*(a-(b/2)));
    console.log(S);
    return S;
}
function Geron(a,b,c) {
    let P = a+b+c;
    let p = P/2;
    let S = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    console.log(S);
    return S;
}
area (6,8,4);

//Strings
// var text = "Hello World!";
// var textLength = text.length;
// var textReplace = text.replace("World", "Earth");
// // var textReverse = text.   finish
// console.log(textLength);
// console.log(textReplace);


// let array = [];
// document.body.addEventListener("keydown", function (event) {
//     array.push(event.key);
//     console.log(array);
// });


















