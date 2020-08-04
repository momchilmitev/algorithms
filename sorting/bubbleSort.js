// implementing bubble sort
function swap(arr, index1, index2) {
	let temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

function bubbleSort(arr) {
	let noSwap;

	for (let i = arr.length; i > 0; i--) {
		noSwap = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
			noSwap = false;
		}

		if (noSwap) break;
	}

	return arr;
}

console.log(bubbleSort([3, 2, 13, 8, 23, 11, 1]));

// Big O -> best O(n) worst O(n*n)
