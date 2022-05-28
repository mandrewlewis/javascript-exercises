const leapYears = function(myYear) {
    if (myYear % 4 == 0) {
        if ( myYear % 100 == 0) {
            if (myYear % 400 == 0) {
                return true;
            }
            return false;

        }
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
