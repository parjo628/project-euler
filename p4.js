/*
A palindromic number reads the same both ways. The largest palindrome made from the 
product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function isPalindrome(num) {
	var string = num.toString();
		if (string === string.split("").reverse().join(""))
			return true;
		else
			return false;
}


function highestPalindrome() {
    var highest = 0;
    for (var i=100; i<1000; i++) 
        for (var x=100; x<1000; x++) {
            var ans = x * i;
        	if ((ans > highest) && isPalindrome(ans))
        		highest = ans;  
         }		        
    return highest;
}


console.log(highestPalindrome());