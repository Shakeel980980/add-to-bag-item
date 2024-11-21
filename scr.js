// localStorage.setItem("hello" , "Where are you?");

// const abc= localStorage.getItem("hello");
// console.log(abc);

// let h1=document.querySelector('h1');
// console.log(h1)
// h1.innerHTML = abc;

let btn = document.querySelector("button");

btn.addEventListener("click", function(){
  let text = document.querySelector("p");
  text.classList.toggle("myself");
})