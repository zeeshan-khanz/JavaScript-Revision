function calculator(a,b, operator){
    switch(operator){
        case "+":
            return a + b;
            case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if(b !== 0){
                return a / b;
            } else {
                return "Error: Division by zero";
            }
        default:
            return "Error: Invalid operator";
    }


}
console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "-")); // 5
console.log(calculator(10, 5, "*")); // 50
console.log(calculator(10, 5, "/")); // 2
