// // // let name= document.getElementsByClassName("demo");
// // document.getElementById("demo").innerHTML= "Dixon";


// // const fname= document.getElementById("demo").addEventListener("mouseover ",myfunction);
  
// // function myfunction(){
// //     alert("hello Dixon")
// // }

// // let a=10
// // function outer(){
// //     let b =30
// //     function inner(){
// //         let c =20
// //         console.log(a,b,c)
// //     }
// //     inner()

// // }
// // outer()

// // function outer(){
// //     let counter =2
// //     function inner(){
// //         counter++
// //         console.log (counter)
// //     }
// //     return inner
// // }
// // outer()
// // outer()
// // outer()

// // function sum( a,b, c){
// //     return a+b+c

// // }
// // console.log(sum(1,3,4))

// // function carry(fn){
// //     return function(a){
// //         return function (b){
// //             return function (c){
// //                 return fn(a,b,c)
// //             }
// //         }
// //     }
// // }

// // function myname(name){
// //     console.log(`My name is ${name}`)
// // }

// // myname("Dixon")


// // const person ={
// //     name:'DIxon',
// //     sayname:function(){
// //         console.log(`My name is ${this.name}`)
// //     },
// // }
// // person.sayname()

// const personinfo ={
//     fname:'hey',
//     lname:'hey',
//     sname:'hey',
//     mname:'hey',
// }

// const {fname ,lname} =personinfo;

// console.log (`${fname}  ${lname}`,)
 //const navdis =document.getElementById("menu").addEventListener("click", navdisplay);
//  let btn= document.getElementByquerySelector("#menu");
//  const navlinks =document.getElementByquerySelector("a");
 


//  btn.addEventListener("click" , onclick() {
//    navlinks.style.color="red";
//    // document.getElementById("navlinks").style.display = "block";

// })

//  function navdisplay(){
//     navlinks.style.dispay="block";
    
//  }

// Get the navbar element
var navbar = document.getElementById("nav");

// Make the navbar responsive
function makeNavbarResponsive() {
  // Check if the screen size is less than or equal to 600 pixels
  if (window.innerWidth <= 600) {
    // Set the width of the navbar links to 100%
    var links = nav.getElementsByTagName("li");
    for (var i = 0; i < links.length; i++) {
      links[i].style.width = "100%";
    }
  } else {
    // Set the width of the navbar links back to their original value
    var links = nav.getElementsByTagName(".home");
    for (var i = 0; i < links.length; i++) {
      links[i].style.width = "auto";
    }
  }
}

// Call the makeNavbarResponsive function when the window resizes
window.addEventListener("resize", makeNavbarResponsive);

// Call the makeNavbarResponsive function initially
makeNavbarResponsive();

  AOS.init();