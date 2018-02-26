module.exports = function check(str, bracketsConfig) {
        let lengthOfString = str.length;
        if ((lengthOfString % 2) != 0) {
            return false;
        };
        return true;
}
