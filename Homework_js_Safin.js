//задание 1
let a = prompt();
a = +a;
alert (typeof a);
if (a % 2 ===0){
  alert ("чётное")
} else if (a % 1 ===0){
  alert("нечетное")
} else 
  alert("Упс, кажется, вы ошиблись");
if (a > 0){
  alert ("true")
} else (a<0)
  alert ("false")

//задание 2
let X = prompt();
  X = +X;
  alert("X -" + X);

let x = prompt();
if (typeof(x) === "number"){
  console.log ("тип х = числу");
} else if (typeof(x) === "string"){
  console.log ("тип х = строке");
} else if (typeof(x) === "boolean"){
console.log ("тип х = логическому типу");
} else{
  console.log ("тип х = не определен");
}

//задание 3
a = prompt();
function reverse(a){
    return a.split("").reverse().join("");
}
console.log(reverse(a));

//задание 4
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  console.log(getRandomInt(100));
  a = getRandomInt(100);
  alert (a);

  //задание 5
  let arr = ["a", "b", "c", "d", "i"];
  console.log(arr.length);
  ["a", "b", "c", "d", "i"].forEach(alert);

  //задание 6

  