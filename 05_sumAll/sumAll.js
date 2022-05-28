const sumAll = function(x, y) {
    if (x > y) {
        [x,y] = [y,x];
    }
    else if (x < 0 || y < 0) {
        return "ERROR";
    }
    else if (typeof x != "number" || typeof y != "number") {
        return "ERROR";
    }
    
    let sumArray = [];
    for (i=x; i<=y; i++) {
        sumArray.push(i);
    }
    return sumArray.reduce((sum, n) => sum + n, 0);
};

// Do not edit below this line
module.exports = sumAll;
