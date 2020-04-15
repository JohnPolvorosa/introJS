function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
        var pick = Math.floor(names.length*(Math.random()));
        var payer = names[pick];
        
    return payer + " is going to buy lunch today!";
    /******Don't change the code below*******/    
    }
    
    console.log(whosPaying);