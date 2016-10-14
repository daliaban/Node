/**
 * Created by dalia on 21/07/16.
 */
/* Sample Input

 2
 acxz
 bcxz

 Sample Output

 Funny
 Not Funny

 Explanation

 Test Case 0: S = "acxz"
 |c-a| = 2 = |x-z|
 |x-c| = 21 = |c-x|
 |z-x| = 2 = |a-c|

 As each comparison is equal, we print Funny.

 Test Case 1: S = "bcxz"
 |c-b| = 1 , but |x-z| = 2
 At this point, we stop evaluating  (as |c-b| != |x-z|) and print Not Funny.
 */

function processData(input) {
    //Enter your code here
    var inputs = input.split('\n');
    var lines = inputs[0];

    for (var i=1; i<=lines; i++){
        var funny = 0;
        var chars = inputs[i].split('');
        for(var j=0; j<chars.length-1; j++){
            var frontascii = Math.abs(chars[j+1].charCodeAt(0) - chars[j].charCodeAt(0));
            var backascii = Math.abs(chars[chars.length-1-(j+1)].charCodeAt(0) - chars[chars.length-1-(j)].charCodeAt(0));
            if (frontascii !== backascii){
                funny = 0;
                console.log('Not Funny');
                break;
            }else{
                funny = 1;
            }
        }
        if (funny == 1){
            console.log('Funny');
        }
    }
}

var input = '2\nacxz\nbcxz';

processData(input);
