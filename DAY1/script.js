function greet(){
    console.log("Good Morning");
}
greet();
greet();
greet();

function cube(num){
    return num*num*num;
}
console.log(cube(2));
console.log(cube(5));

function isEven(num){
    if(num%2==0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
isEven(2);
isEven(19);

function grade(marks){
    if(marks>=90){
        console.log("A+");
    }else if(marks>=80){
        console.log("A");
    }else if(marks>=70){
        console.log("B");
    }else if(marks>=60){
        console.log("C");
    }else if(marks>=50){
        console.log("D");
    }else{
        console.log("Fail");
    }
}
grade(89);
grade(45);
grade(70);


let fact=1;
function factorial(num){
    for(let i=1;i<=num;i++){
        fact=fact*i;
    }
    return fact;
}
console.log(factorial(6));
function largest(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}
console.log(largest(12,9));
function reverseString(str){

    let reversed = "";

    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseString("Hello"));
console.log(reverseString("Shreya"));