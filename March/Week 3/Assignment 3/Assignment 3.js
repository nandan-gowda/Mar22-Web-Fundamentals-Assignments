/**********************************************************************************************************
 * "1. Program to write the first 10 numbers.
 **********************************************************************************************************/
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}




/***********************************************************************************************************
 * 2. Program to calculate the sum of first 10 numbers
 ***********************************************************************************************************/
let s = 0;
for (let i = 0; i < 10; i++) {
  s = s + i;
}
console.log("sum of first 10 numbers is:", s);




/***********************************************************************************************************
 * 3. Make the loop stop when i is 5.
 *  for (i = 0; i < 10; i++) {
          console.log(i);
          if (i == 5) {   
    
        ----------;
          }
    }
 ***********************************************************************************************************/
for (i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}




/***********************************************************************************************************
 * 4. Write a program to print day of week name using switch case.
 ***********************************************************************************************************/
let num = 1;
let day;
switch (num) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "wednesday";
    break;
  case 4:
    day = "thursday";
    break;
  case 5:
    day = "friday";
    break;
  case 6:
    day = "saturday";
    break;
  case 7:
    day = "sunday";
    break;
  default:
    day = "invalid number";
    break;
}
console.log(day);




/***********************************************************************************************************
 * 5. Write a program print total number of days in a month using switch case."
 ***********************************************************************************************************/

let month = 2;
let days;
switch (month) {
  case 1:
    days = "31";
    break;
  case 2:
    days = "28";
    break;
  case 3:
    days = "31";
    break;
  case 4:
    days = "30";
    break;
  case 5:
    days = "31";
    break;
  case 6:
    days = "30";
    break;
  case 7:
    days = "31";
    break;
  case 8:
    days = "31";
    break;
  case 9:
    days = "30";
    break;
  case 10:
    days = "31";
    break;
  case 11:
    days = "30";
    break;
  case 12:
    days = "31";
    break;
  default:
    days = "invalid number";
    break;
}
console.log(days);
