"use strict";

document.getElementById("heading"); // DOM

//jQuery
let myElement = $('#paraOne');
console.log(myElement);

let heading = $('#heading').text();
console.log(heading);

// add class of "border" to p element
$("#paraOne").addClass("border");

// add a border to the heading if user is logged in
let user1 = {
    name: "Kat",
    isLoggedIn: true,
    age: 25
}

let loginStatus = user1.isLoggedIn;
if(loginStatus === true){
    $('heading').addClass("border");
}