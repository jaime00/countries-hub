import IconSearch from '../../assets/images/icon_search.svg'
import './index.css'

export default function SearchInput(props) {
	const { country, region, handleChange, handleSubmit } = props
	return (
		<form className="search-input" onSubmit={handleSubmit}>
			<div className="search-input">
				<input name="country" className="input" value={country} onChange={handleChange} placeholder="Search contry"></input>
				<select name="region" value={region} onChange={handleChange} placeholder="Show All">
					<option value="">Show All</option>
					<option value="Africa">Africa</option>
					<option value="Americas">America</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
					<option value="Asia">Asia</option>
				</select>
				<button type="submit">
					<img alt="" className="ico-lupa-searchbox" src={IconSearch}></img>
				</button>
			</div>
		</form>
	)
}
