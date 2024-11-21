const sumAll = function(a, b) {
    if (a < 0 || b < 0){
        return "ERROR";
    }
    if (!(Number.isInteger(a) && Number.isInteger(b))){
        return "ERROR";
    }

    let sum = 0;

    if (a == b) {
        return 2*a
    } else if (a < b) {
        while (a <= b) {
            sum += a;
            a++;
        }
        return sum;
    } else {
        while (b <= a) {
            sum += b;
            b++;
        }
        return sum;

    }
};

// Do not edit below this line
module.exports = sumAll;
