module.exports = function check(str, brackets){
    var place = [];
    var reversePlace = [];
    var singlePlace = [];
    var br = bracketsConfig(brackets);
    var left = br[0];
    var right = br[1];
    var single = br[2];
    var singleCount = 0;
    var sc = [];
    var scc = [];
    for (var i in single) {
        sc.push(0);
        sc.push(0);
    }
    for (var i = 0; i < str.length; i++){
        if (left.indexOf(str[i]) !== -1)
            place.push(str[i]);
        else if (right.indexOf(str[i]) !== -1){
            var opened = right.indexOf(str[i]);
            if ((place[place.length-1] !== left[opened]) || (!place))
                return false;
            for (var k in single)
                scc[k] = 0;
            for (var j = i; j => 0; j--){
                if (single && single.indexOf(str[j]) !== -1)
                    scc[single.indexOf(str[j])] += 1;
                else if (str[i] === place[place.length-1]){
                    for (var k in single)
                        if (scc[k]%2)
                            return false;
                }
                break;
            }
            place.pop();
        }
        else if (single && single.indexOf(str[i]) !== -1){
            sc[single.indexOf(str[i])] += 1;
            if (!singlePlace)
                singlePlace.push(str[i]);
            else{
                if (singlePlace[singlePlace.length-1] === str[i]){
                    var rCount = 0;
                    for (var j = i-1; j=>0; j--){
                        console.log(str[j]);
                        if (right.indexOf(str[j]) != -1)
                            rCount --;
                        else if (left.indexOf(str[j]) != -1){
                            rCount++;
                        }
                        else if (single.indexOf(str[j]) != -1){
                            if (rCount){
                                return false;
                            }
                            singlePlace.pop();
                            break;
                        }
                    }
                } else
                    singlePlace.push(str[i]);
            }
        }
    }
    console.log(singlePlace);
    if (place.length > 0 || singlePlace.length > 0)
        return false;
    for (var i in sc)
        if (sc[i]%2)
            return false;
    return true;
};

function bracketsConfig(arr){
    var left = [];
    var right = []
    var single = [];
    for (var i in arr) {
        if (arr[i][0] === arr[i][1])
            single.push(arr[i][0])
        else{
            left.push(arr[i][0]);
            right.push(arr[i][1]);
        }
    }
    return [left, right, single]
}

