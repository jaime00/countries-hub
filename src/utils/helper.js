function uniq(inputArr) {
	var found = {}
	return inputArr.filter(function (element) {
		return found.hasOwnProperty(element) ? false : (found[element] = true)
	})
}

function getParams({ region, country }) {
	var params = ''
	if (country && country !== '') {
		params = country ? `name/${country}` : 'all'
	} else {
		params = region ? `region/${region}` : 'all'
	}
	return params
}
const sortObject = (object) =>
	Object.keys(object)
		.sort()
		.reduce((r, k) => ((r[k] = object[k]), r), {})

const groupBy = (key) => (array) =>
	array.reduce((objectsByKeyValue, obj) => {
		const value = obj[key]
		objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
		return objectsByKeyValue
	}, {})

const ObjectValuesToChar = (obj, separator) => {
	return Object.values(obj).length > 0 ? String(Object.values(obj).join(separator)) : 'Nothing'
}

const getCurrencies = (obj, separator) => {
	if (obj) {
		let currencies = []
		for (let key in obj) {
			currencies.push(obj[key].name)
		}

		return currencies.join(separator)
	}
	return 'Nothing'
}

export { uniq, groupBy, getParams, sortObject, ObjectValuesToChar, getCurrencies }
