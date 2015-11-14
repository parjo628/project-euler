

function sumOfMultiples(limit) {
	var total = 0;
	for (var i = 0; i < limit; i ++) {
		if (i % 3 === 0 || i % 5 === 0) 
			total += i;
		}
		return total;
};
	

console.log(sumOfMultiples(1000));