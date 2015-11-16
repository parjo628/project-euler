/* 
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

function isPrime(num) {
	for (var i=2; i<num; i++) {
		if (num % i === 0)
		return false;
	}
	return true;
}	

function primeFactor(num) {
	var x = num;
	for (var i = 2; i < Math.sqrt(num); i++)
		while (x % i === 0) {
			console.log(x, i);
			x = x / i;
			if (isPrime(x))
			return x;
			else if (x === 1 || x === i )
			return i;
			
		}	
}

console.log(primeFactor(600003453));