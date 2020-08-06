// Implementing insertion sort
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let currEl = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > currEl; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currEl;
	}
	return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));

// Big O -> O(n*n)
