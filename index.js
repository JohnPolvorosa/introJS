// var input = prompt("Enter your tweet: ");
// // var tweetCount = input.length;
// // alert("You have written " + tweetCount + ", you have " + (140 - input.length) + " characters left");
// alert("We have cut you off to limit only 140 characters, you're tweet: " + input.slice(0,139));


// var name = "Angela";

// // alert(name.slice(3,6));

// var input = prompt("What is your name?");
// var input1 = input.slice(0,1);
// alert("Hello " + input1.toUpperCase() + (input.slice(1,input.length)).toLowerCase());

function calcDogAge() {
    var dogAge = prompt("Enter your Dog Age: ");
    var humanAge = (dogAge-2)*4 + 21;
    alert("Your dog is " + humanAge + " in human age");
}

// calcDogAge();

function getMilk(money) {
    var bucketCost = 2   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("bucket of milk costs: " + bucketCost);
  console.log("bought " + Math.floor(money/bucketCost) + " buckets of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

// getMilk(69);

function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
       
        //Write your code here.
        var ageLimit = 90;
        var ageDays = (ageLimit-age)*365
        var ageWeeks = (ageLimit-age)*52;
        var ageMonths = (ageLimit-age)*12;
        
        console.log("You have " + ageDays + " days, " + ageWeeks + " weeks, and " + ageMonths + " months left."); 
    /*************Don't change the code below**********/
    }
    
    // lifeInWeeks(22);