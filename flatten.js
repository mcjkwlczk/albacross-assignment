function flatten(input) {
	if (!(input instanceof Array)) {
	    return null;
	}

	let flatArray = [];
	function flattenRecursively(input) {
		for (let element of input) {
			if (element instanceof Array) {
				flattenRecursively(element);
			} else {
				flatArray.push(element);
			}
		}
	}

	flattenRecursively(input);
	return flatArray;
}

module.exports = flatten;
