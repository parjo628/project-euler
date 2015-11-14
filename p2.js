// find the sum of the even numbers in a fibonacci sequence
// where the values do not exceed 4 million.


function sumOfEvenFibonacciUnderCeiling(ceiling) {
	var temp = 0,
		current = 2,
		previous = 1,
		sum = 0;

	while (current < ceiling) {
		if (current % 2 === 0) {
			sum += current;
		}
		temp = current;
		current += previous;
		previous = temp;

		
	}
	return sum;
}
console.log(sumOfEvenFibonacciUnderCeiling(4000000));
