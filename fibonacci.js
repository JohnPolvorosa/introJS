function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        let sequence = [];
        let sum, count = 0;
        
        if (n <= 1) {
            sequence.push(0);
        } else if (n === 2) {
            sequence.push(0);
            sequence.push(1);
        } else {
            sequence.push(0);
            sequence.push(1);
            count = 2;
            while (count < n) {
                sum = ((sequence[count-1]) + (sequence[count-2]));
                sequence.push(sum);
                count++;
            }
        }
        return sequence;
        
        //Return an array of fibonacci numbers starting from 0.
    //     return sequence;
        
    //Do NOT change any of the code below 👇
    }
    
    