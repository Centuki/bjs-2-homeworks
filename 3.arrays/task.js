function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    const result = users
        .filter(user => user.gender === gender)
        .map(user => user.age)
        .reduce((acc, age, index, arr) => {
            acc.sum += age;
            acc.count = arr.length;
            return acc;
        }, {
            sum: 0,
            count: 0
        });

    return result.count > 0 ? result.sum / result.count : 0;
}