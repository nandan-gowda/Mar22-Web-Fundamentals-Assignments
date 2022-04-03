let a=window.prompt("Enter number 1: ")
let b=window.prompt("Enter number 2: ")
let c=window.prompt("Enter number 3: ")
let max;
if(a>b && a>c) {
    max=a;
}
else if (b>a && b>c) {
    max=b;
}
else {
    max=c;
}
 console.log(max);


