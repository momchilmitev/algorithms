// Implementing selection sort
function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}

		if (i !== min) {
			swap(arr, min, i);
		}
	}

	return arr;
}

// Swapping function
function swap(arr, index1, index2) {
	let temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

console.log(selectionSort([30, 5, 21, 11, 40, 3]));

// Big O -> O(n*n)
