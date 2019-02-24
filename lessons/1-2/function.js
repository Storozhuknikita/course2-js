// Повторяющиеся кусочки кода

function convertCurrency(value, rate) {
    return value * rate;
}

function fact(x) {

    if(x === 1) {
        return 1;
    }

    return x * fact (x - 1);

}