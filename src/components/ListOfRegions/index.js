import ListOfCountries from '../ListOfCountries'
import { sortObject, groupBy } from '../../utils/helper'
import './index.css'

export default function ListOfRegions({ countries, handleClose }) {
	const regions = sortObject(groupBy(countries, 'region'))
	return (
		<div className="list-of-regions">
			{Object.entries(regions).map(([key, value], i) => {
				let countriesFiltered = value
				return (
					<ListOfCountries
						handleClose={handleClose}
						region={key}
						countries={countriesFiltered}
						key={i}
					/>
				)
			})}
		</div>
	)
}
