import React from 'react'
import Background from '../Background'
import './index.css'

import SearchInput from '../SearchInput'

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
