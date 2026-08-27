function fizzbuzz(num) {
    if (num == 1) {
        return "1";
    }
    if(num % 3==0){
        return "Fizz";
    }else if(num % 5 == 0){
        return "Buzz";
    }else if (num % 3 != 0) {
        return num.toString();
    }
}

export default fizzbuzz;