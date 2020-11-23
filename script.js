//1
console.log('sentence1')
const dresser = ['shock','shirt','pant'];
console.log(dresser[1]);

//2
console.log('sentence2')
const array = [1,3,5,7,9];
let sum = 0;
for(let i=0;i<array.length;i++) {
 sum +=array[i];
}
console.log(sum)

//3
console.log('sentence3')
let firstName = 'Neil';
let middleName = 'decrease';
let lastName = 'Tyson';
let scientist = [firstName,middleName,lastName];
console.log(scientist.join(' '))

//4
console.log('sentence4')
const people = ['Cathy','Teddy','Booby'];
function replaceName(name1,name2) {
 people[people.indexOf(name1)] = name2;
 console.log(people)
}
replaceName('Cathy','Peter')

//5
console.log('sentence5')
people.push('Barry');
console.log(people)

//6
console.log('sentence6')
people.unshift('Alice');
console.log(people)

//7
console.log('sentence7')
people.push('John','James');
console.log(people)

//8
console.log('sentence8')
function replaceName1(name,something) {
 
  people[people.indexOf(name)] = something;
}
replaceName1('James ',['James',27]);
console.log(people);
//9 
console.log('sentence9')
function deleteSt(somthing) {
 people.splice(people.indexOf(somthing),1);
}
deleteSt("Peter");
console.log(people);
deleteSt(['James',27]);
console.log(people);

//10
console.log('sentence10')
function randomName() {
 const random = people[Math.floor(Math.random() * people.length)];
 console.log(random)
}
randomName()

//11
console.log('setence11')
const string = 'https://mindx.edu.vn/course/code-for-everyone-javascript';

let res = string.match(/mindx.edu.vn/g);
console.log(...res);
let res1 = string.match(/code-for-everyone/g);
console.log(...res1);
console.log(res1[0].split('-').join(' '))





