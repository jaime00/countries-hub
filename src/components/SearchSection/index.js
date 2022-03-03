import Background from '../Background'
import SearchInput from '../SearchInput'
import './index.css'

export default function SearchSection(props) {
	const { handleChange, country, region, handleSubmit } = props
	return (
		<div className="d-flex search-section">
			<div className="d-flex flex-column">
				<h1>
					Find any country <br />
					in the world.
				</h1>
				<SearchInput region={region} country={country} handleChange={handleChange} handleSubmit={handleSubmit} />
			</div>
			<Background />
		</div>
	)
}
