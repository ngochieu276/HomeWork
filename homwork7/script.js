"api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
const container = document.querySelector('.container')
const btn = document.querySelector('.btn');
const city = document.querySelector('.cityInput')
 function renderData(data) {
const html = `
<div class="container-city">
<h3 class="country-name">${data.name}</h3>
<h4 class="country-temp">${data.main["temp"]} Average temp</h4>
<h4 class="country-temp">${data.main["temp_max"]} Highest temp</h4>
<h4 class="country-temp"> Feel like: ${data.main["feels_like"]}</h4>
<h4 class="country-temp"> Humidity: ${data.main["humidity"]}</h4>
<div>`

container.insertAdjacentHTML("beforeend",html)
}

function getData(country) {
  let respond = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=7674da634845e7c2d8c53ab0a48b8e29`);

  respond
  .then(response => {
   console.log(response);
   return response.json()
  })
  .then(data => {
   console.log(data);
   renderData(data)
  })
} 

btn.addEventListener("click", async function() {
  await getData(city.value);
  city.value = ""
}
)


// let myPromise = new Promise(function(relsove,reject) {
// reject()
// })
// console.log(myPromise)

// let myPromise = new Promise(function(relsove,reject) {
//  let a = 1 + 1;
//  if (a == 3) {
//   relsove('success')
//  } else {
//   reject('fail')
//  }
// })

// myPromise
// .then((message) => {
//  console.log("this is succes message" +  message)
// })
// .catch(err => console.log(err))

// const userLeft = true;
// const userLearning = false;

// function userLearningCallback(callback,erCallback) {
//  if (userLeft) {
//   erCallback({
//    status: "user left roi",
//    message: "sad"
//   })
//  } else if(userLearning) {
//  erCallback( {
//   status: "user is learing",
//    message: "borr"
//  })
//  } else {
//   callback("lop hoc thanh cong")
//  }
// }

// userLearningCallback((message) => {
//  console.log("success" + message)
// },err => {
//  console.log(err.status + err.message)
// })

// function userLearningPromise() {
//  return new Promise((relsove,reject) => {
//   if (userLeft) {
//    reject({
//    status: "user left roi",
//    message: "sad"
//   })
//   } else if(userLearning) {
//     reject( {
//     status: "user is learing",
//     message: "borr"
//  })
//  } else {
//   relsove("lop hoc thanh cong")
//  }
//  })
//  }

//  userLearningPromise().then((message) => {
//   console.log(message)
//  })
//  .catch((err) => {
//   console.log(err)
//  })
