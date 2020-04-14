// var name1 = prompt("Enter First Name to be matched: ");
// var name2 = prompt("Enter First Name of other person to be matched: ");

// var n = Math.round(((Math.random()*100) + 1));
// alert("You have a chance of " + n + "%");

// if (n > 70) {
//     ("You were made for each other ");
// }

// if (n > 40 && n <= 70) {
//     alert("Doable. ");
// }

// if (n <= 40) {1.8
//     alert("NAHHH!");
// }

function bmiCalculator (weight, height) {
    var bmi = weight/(Math.pow(height,2));
    var interpretation;
    
    if (bmi < 18.5) {
        interpretation = ("Your BMI is " + (bmi) + ", so you are underweight.");
    }
    
    if (18.5 <= bmi <= 24.9) {
        interpretation = ("Your BMI is " + (bmi) + ", so you have a normal weight.");
    }
    
    if (bmi > 24.9) {
        interpretation = ("Your BMI is " + (bmi) + ", so you are overweight, fatty.");
    }
    
    return interpretation;
}

alert(bmiCalculator(72, 1.67));