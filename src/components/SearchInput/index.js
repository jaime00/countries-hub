import IconSearch from '../../assets/images/icon_search.svg'
import './index.css'

export default function SearchInput(props) {
	const { country, region, handleChange, handleSubmit } = props
	return (
		<form className="search-input" onSubmit={handleSubmit}>
			<div className="search-input">
				<input name="country" className="input" value={country} onChange={handleChange} placeholder="Search country"></input>
				<select name="region" value={region} onChange={handleChange} placeholder="Show All">
					<option value="" style={{ marginTop: '100px' }}>
						Show All
					</option>
					<option value="">Show All</option>
					{/* <span>
						<option value="Africa">Africa</option>
					</span>
					<span>
						<option value="Americas">America</option>
					</span>
					<span>
						<option value="Europe">Europe</option>
					</span>
					<span>
						<option value="Oceania">Oceania</option>
					</span>
					<span>
						<option value="Asia">Asia</option>
					</span> */}
				</select>
				<button type="submit">
					<img alt="" className="ico-lupa-searchbox" src={IconSearch}></img>
				</button>
			</div>
		</form>
	)
}
