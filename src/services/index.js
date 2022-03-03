import { orderBy } from 'lodash'
import { API_URL } from '../utils/constants'
import { uniq, getParams, ObjectValuesToChar, getCurrencies } from '../utils/helper'

async function getRegions({ country, region }) {
	let contries = await getCountries({ country, region })
	let regionsFiltered = uniq(contries.map((ele) => ele.region))
	let regions = regionsFiltered.map((region, i) => ({
		name: region,
		id: i,
	}))
	return regions
}

async function getCountries({ region, country } = { region: null, country: null }) {
	let params = getParams({ region, country })
	return await fetch(`${API_URL}/${params}`)
		.then((res) => res.json())
		.then((response) => {
			const countries = response.map((country) => {
				const { common } = country.name
				const { region, population, flags, borders } = country
				const capital = country.capital ? country.capital[0] : 'Nothing'
				const languages = country.languages ? ObjectValuesToChar(country.languages, ', ') : 'Nothing'
				const border_countries = borders ? String(borders.join(', ')) : 'Nothing'
				const currencies = getCurrencies(country.currencies)
				return {
					name: common,
					region,
					population,
					languages,
					flag: flags[1],
					capital,
					border_countries,
					currencies,
				}
			})
			return orderBy(countries, ['name'], ['asc'])
		})
		.catch(() => [])
}

export { getRegions, getCountries }
