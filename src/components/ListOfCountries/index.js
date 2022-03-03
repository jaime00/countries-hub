import Country from '../Country'
import './index.css'

export default function ListOfCountries({ region, countries, handleClose }) {
	return (
		<>
			<div className="list-of-countries">
				<h3>{region}</h3>
				{countries.map((country, i) => (
					<Country {...country} handleClose={handleClose} key={i} />
				))}
			</div>
		</>
	)
}
