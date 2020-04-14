function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.
        var answer;
        if (year % 4 == 0)
        {
            if ((year % 100 == 0)&& (!(year % 400 == 0))) {
                answer = "Not leap year."
            } else {
                answer = "Leap year."
            }
        } else {
            answer = "Not leap year."
        }
    
    return answer;
    /**************Don't change the code below****************/    
    
    }
    
    alert(isLeap(300));