// Implementing linear search for numbers in array
// Array must be sorted asc

function binarySearch(arr, element) {
	let start = 0;
	let end = arr.length - 1;
	let middle = Math.floor((start + end) / 2);

	while (arr[middle] !== element && start <= end) {
		if (element < arr[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}

		middle = Math.floor((start + end) / 2);
	}

	if (arr[middle] === element) {
		return middle;
	}

	return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 6));

// Big O -> worst O(log n)  best O(1)
