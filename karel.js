/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    //your code here
    goal();
 }
 
 function goal(){
    firstTwoRows();
    adjustBeepDir();
    placeDiagLeft();
    placeDiagRight();
    adjustBeepDir();
    placeDiagLeft();
    placeDiagRight();
    adjustBeepDir();
    adjustBeepDir();   
 }
 
 function adjustBeepDir() {
    turnLeft();
    move();
    move();
    putBeeper();
 }
 
 function placeDiagLeft(){
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
 }
 
 function placeDiagRight(){
    move();
    turnRight();
    move();
    putBeeper();
    turnLeft();
 }
 
 function firstTwoRows(){
    putBeeper();
    placeDiagLeft();
    placeDiagRight();
    placeDiagLeft();
    placeDiagRight();
 }