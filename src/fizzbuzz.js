function fizzbuzz(num) {
    if (num == 1) {
        return "1";
    }else if (num % 3 != 0 & num % 5 != 0) {
        return num.toString();
    }
}

export default fizzbuzz;