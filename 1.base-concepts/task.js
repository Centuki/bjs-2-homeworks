"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	const d = b ** 2 - 4 * a * c;
	if (d < 0) {
		return arr;
	}
	if (d === 0) {
		arr.push(-b / (2 * a))
		return arr
	}
	let sqrtD = Math.sqrt(d);
	arr.push((-b + sqrtD) / (2 * a))
	arr.push((-b - sqrtD) / (2 * a))
	return arr
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentNum = Number(percent)
	let contributionNum = Number(contribution)
	let amountNum = Number(amount)
	let countMonthsNum = Number(countMonths)

	if (isNaN(percentNum) || isNaN(contributionNum) || isNaN(amountNum) || isNaN(countMonthsNum)) {
		return False
	}

	if (amountNum <= contributionNum) {
		return Number(0);
	}

	let P = percentNum / 100 / 12;
	let S = amountNum - contributionNum;
	let totalAmount;

	if (P === 0) {
	    totalAmount = S;
	} else {
        let payment = S * (P + (P / (Math.pow(1 + P, countMonthsNum) - 1)));
        totalAmount = payment * countMonthsNum;
    }
	return Number(totalAmount.toFixed(2));
}