//===> Assignment_1
/*
// method-1
let div1 = document.getElementsByTagName("div")
console.log(div1)

// method-2
let div2 = document.getElementsByClassName("element")
console.log(div2)

// method-3
let div3 = document.getElementById("elzero")
console.log(div3)

// method-4
let div4 = document.getElementsByName("js")
console.log(div4)

// method-5
let div5 = document.querySelector(".element")
console.log(div5)

// method-6
let div6 = document.querySelector('[name="js"]');
console.log(div6)

// method-7
let div7= document.querySelector("#elzero")
console.log(div7)

// method-8
let div8 = document.querySelector("div")
console.log(div8)

// method-9
let div9 = document.querySelectorAll(".element")
console.log(div9)

// method-10
let div10 = document.querySelectorAll('[name="js"]');
console.log(div10)

// method-11
let div11= document.querySelectorAll("#elzero")
console.log(div11)

// method-12
let div12 = document.querySelectorAll("div")
console.log(div12)

// method-13
let div13 = document.body.getElementById("elzero")
console.log(div13)

// // method-14
// let div14 = document.querySelectorAll("div")
// console.log(div14)

// // method-15
// let div15 = document.querySelectorAll("div")
// console.log(div15)
*/
//===> Assignment_2
/*
for (let i = 0; i < 11; i++) {
  document.images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  document.images[i].alt = "Elzero Logo"
}
*/
//===> Assignment_3

let inp = document.querySelector("[name='dollar']")
let f = document.forms[0].oninput = function (e) {
  let r = (inp.value * 15.6).toFixed(2)
  let d = document.querySelector(".result")
  if (!isNaN(inp.value)) [
    d.innerHTML = `{${inp.value}} USD dollar = {${r}} Egyptian pound`
  ]
  let valid = false;
  if (valid === false) {
    e.preventDefault()
  }
}

// let result = value * 15.6;
// console.log(result)

