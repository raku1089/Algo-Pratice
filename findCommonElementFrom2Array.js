// Approcah 1

function findDuplicates(arr1, arr2) {
	let [arr1Length, arr2Length] = [arr1.length, arr2.length];
	const isFirstBig = arr1Length > arr2Length ? true : false;
	let common = [];
	if (!isFirstBig) {
		[arr1, arr2, arr1Length, arr2Length] = [arr2, arr1, arr2Length, arr1Length];
	}
	for (let i = 0; i < arr1Length; i++) {
		for (let j = 0; j < arr2Length; j++) {
			if (arr1[i] == arr2[j]) {
				common.push(arr1[i]);
			}
		}
	}
	//returning array holding common values
	return common;
}

// approach 2 using set

function findDuplicates(arr1, arr2) {
	let arrSet = new Set(arr1);
	let common = [];
	for (let i = 0; i < arr2.length; i++) {
		if (arrSet.has(arr2[i])) {
			common.push(arr2[i]);
		}
	}
	return common;
}
