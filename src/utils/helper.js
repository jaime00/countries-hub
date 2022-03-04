import groupBy from 'lodash/groupBy'

// GENERAL METHODS
const uniq = (inputArr) => {
	var found = {}
	return inputArr.filter(function (element) {
		return found.hasOwnProperty(element) ? false : (found[element] = true)
	})
}

const sortObject = (object) => {
	return Object.keys(object)
		.sort()
		.reduce((r, k) => ((r[k] = object[k]), r), {})
}

const getParams = ({ region, country }) => {
	var params = ''
	if (country && country !== '') {
		params = country ? `name/${country}` : 'all'
	} else {
		params = region ? `region/${region}` : 'all'
	}
	return params
}

const ObjectValuesToChar = (obj, separator) => {
	return Object.values(obj).length > 0 ? String(Object.values(obj).join(separator)) : 'Nothing'
}

// SPECIFIC METHODS
const getFavorites = () => {
	return localStorage.getItem('favs') ? localStorage.getItem('favs').split(',') : [0]
}

const isFavorite = ({ name }) => {
	let favorities = getFavorites()
	return favorities.includes(name)
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

const updateLocalStorage = ({ name }) => {
	const favs = getFavorites()
	if (isFavorite({ name })) {
		localStorage.setItem(
			'favs',
			favs.filter((ele) => ele !== name)
		)
	} else {
		localStorage.setItem('favs', favs.concat(name))
	}
}

export { groupBy, uniq, sortObject, getParams, ObjectValuesToChar, getFavorites, isFavorite, getCurrencies, updateLocalStorage }
