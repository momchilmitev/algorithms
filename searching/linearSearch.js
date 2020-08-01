// Implementing linear search for numbers in array

function linearSearch(arr, num) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === num) {
			return i;
		}
	}

	return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15));

// Big O -> O(n)
