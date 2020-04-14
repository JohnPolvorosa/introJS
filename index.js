// var input = prompt("Enter your tweet: ");
// // var tweetCount = input.length;
// // alert("You have written " + tweetCount + ", you have " + (140 - input.length) + " characters left");
// alert("We have cut you off to limit only 140 characters, you're tweet: " + input.slice(0,139));


// var name = "Angela";

// // alert(name.slice(3,6));

var input = prompt("What is your name?");
var input1 = input.slice(0,1);
alert("Hello " + input1.toUpperCase() + (input.slice(1,input.length)).toLowerCase());