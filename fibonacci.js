function fibonacciGenerator (n) {

        let sequence = [];
        let sum, count = 0;
        
        if (n <= 1) {
            sequence.push(0);
        } else if (n === 2) {
            sequence.push(0,1);
        } else {
            sequence.push(0,1);
            count = 2;
            while (count < n) {
                sum = ((sequence[count-1]) + (sequence[count-2]));
                sequence.push(sum);
                count++;
            }
        }
        return sequence;
    }
    
    