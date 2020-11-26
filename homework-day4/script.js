//1
const colors = ["red","blue","green","oranged","pink"]
//2
console.log(colors[0]);
//3
console.log(colors[2]);
//4
colors[-1] = 'ultraviolet';
//5
const fourthColor = colors[3];
//6
colors.push('violet');
//7
colors.unshift('white');
//8
console.log(colors.length);
//9
colors.pop();
console.log(colors.length);
//10
for(let i = 0;i< colors.length;i++) {
 console.log(colors[i])
}
//11
for(let i = 0;i< colors.length;i++) {
 console.log(`${i+1} ${colors[i]}`)
}
//12
const lastColor = colors[colors.length-1];
console.log(colors[colors.length-1])


console.log('object section')

//1
const penguin = {
 name:'Pecola',
 origin:'Madagascar',
 author:'Looney Tunes'
}
//2
console.log(`Hello, I'm a penguin and my name is ${penguin.name}`)
//3
penguin.canFly = false;
//4
penguin.chirp = function() {
 console.log("CHIRP CHIRP! Is this what penguins sound like?")
}
//5
penguin.sayHello = function() {
 console.log(`Hello, I'm a penguin and my name is ${this.name}`)
}
//6
penguin.sayHello()
//7
penguin.name = "Penguin McPenguinFace";
penguin.sayHello()
//8,9
penguin.fly = function() {
 console.log(this.canFly ? 'I can fly':'No flying for me!')
}
//10
penguin.fly()
//11
penguin.canFly = true;
penguin.fly();
//12
for(let x in penguin) {
 console.log(x);
}
//13
for(let x in penguin) {
 console.log(x + ': ' + penguin[x]);
}

console.log('-------------------array method-----------------')

//1
const is_array = function(input) {
 console.log(Array.isArray(input))
}
is_array('w3resource');
is_array([1, 2, 4, 0])
//2
const array_Clone = function(input) {
 const arrayClone = input.slice(0);
 console.log(arrayClone)
}
array_Clone([1, 2, 4, 0]);
array_Clone([1, 2, [4, 0]])
//3
const first = function(array,num) {
 console.log(array.slice(0,num))
}
first([7, 9, 0, -2],0);
first([7, 9, 0, -2],3);
first([7, 9, 0, -2],6);
first([7, 9, 0, -2],-3)
//4

//5
const myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join(", "))

//6 
const addDashed = function(input) {
 let inputArray = String(input).split("");
 let i=0;
 let j=0
 for( i;i<inputArray.length-1;i++) {
  for( j=1; j < inputArray.length-1;j++) {
   if (inputArray[i] % 2 === 0 && inputArray[j] % 2) inputArray[i] += "-"
  }
 }
 const key = inputArray.join("")
 console.log(key)
}
addDashed(25468)
//7
const swap = function(input) {
 let output ='';
 for(let i=0;i<input.length;i++) {
  if (input[i] === input[i].toLowerCase()) {
   output += input[i].toUpperCase()
  } else {
   output += input[i].toLowerCase()
  }
 }
 console.log(output)
}
swap('The Quick Brown Fox')
//8
const array1 = [1,2,3,4,5]

function getSum(input) {
 const total = input.reduce((cur,sum) => sum + cur);
 console.log(total)
}
getSum(array1);


function greet(name) {
 console.log(`Hi ${name}`)
}
greet('Hieu');
greet('Linh')


console.log('----------------------------object----------------------------');
//1
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
//2
console.log(student);
delete student.rollno;
console.log(student);
//3
student.size = function() {
 let size = 0;
 for (key in this) {
  if (this.hasOwnProperty(key)) size++;
 }
 console.log(size)
}
student.size()
//4
var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
function read(array) {
 array.forEach(function(obj) {
  for(let key in obj) {
   console.log(`${key}: ${obj[key]}`)
  }
 })
}
read(library)
//5
function time() {
 let d = new Date();
 var second = d.getSeconds();
 var minute = d.getMinutes();
 var hour = d.getHours();
 console.log(`${hour}:${minute}:${second}`)
}
setInterval(time,1000)