var number = 100;
var bottleWord = "bottles";

function beer() {



    while (number >= 2) {
        number--;
        if (number === 1) {
            bottleWord = "bottle";
            }
        console.log(number + " " + bottleWord + " of beer on the wall, " + number + " " + bottleWord + " of beer. Take 1 down, pass it around, " + (number-1) + " " + bottleWord + " of beer on the wall.");
    }
//     console.log(number + " bottle of beer on the wall, " + number + " bottle of beer. Take 1 down, pass it around, " + (number) + " bottle of beer on the wall.");
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more 99 bottles of beer on the wall.");
}