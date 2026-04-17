function getArrayParams(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let min = arr[0];
	let max = arr[0];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		const current = arr[i];
		if (current > max) {
			max = current;
		}
		if (current < min) {
			min = current;
		}
		sum += current;
	}

	const avg = Number((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		const current = arr[i];
		sum += current;
	}
	return sum;

}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let min = arr[0];
	let max = arr[0];
	for (let i = 0; i < arr.length; i++) {
		const current = arr[i];
		if (current > max) {
			max = current;
		}
		if (current < min) {
			min = current;
		}
	}
	const difference = max - min;

	return difference;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEven = 0;
	let sumOdd = 0;
	for (let i = 0; i < arr.length; i++) {
		const current = arr[i];
		if (current % 2 === 0) {
			sumEven += current;
		} else {
			sumOdd += current;
		}
	}

	return sumEven - sumOdd;

}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEven = 0;
	let countEvenElements = 0;
	for (let i = 0; i < arr.length; i++) {
		const current = arr[i];
		if (current % 2 === 0) {
			sumEven += current;
			countEvenElements++;
		}
	}

	let avg = sumEven / countEvenElements;

	return avg;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = func(...arrOfArr[0]);

	for (let i = 1; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);

		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}