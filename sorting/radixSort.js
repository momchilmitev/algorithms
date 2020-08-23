// Implementing the radix sort algorithm (general for list of numbers)
function radixSort(nums) {
	let maxDigitCount = mostDigits(nums);

	for (let k = 0; k < maxDigitCount; k++) {
		let buckets = Array.from({ length: 10 }, () => []);

		for (let i = 0; i < nums.length; i++) {
			let digit = getDigit(nums[i], k);
			buckets[digit].push(nums[i]);
		}

		nums = [].concat(...buckets);
	}

	return nums;
}

// Helper methods

// get digit - returns the digit of number on given place
function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// digit count - returns the number of digits in number
function digitCount(num) {
	if (num === 0) return 1;

	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// most digits - returns the number of digits in the largest number in the list
function mostDigits(arr) {
	let maxDigits = 0;

	for (let i = 0; i < arr.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(arr[i]));
	}

	return maxDigits;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

// Big O -> T O(nk) S O(n + k)
