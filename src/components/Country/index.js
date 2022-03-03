import './index.css'

export default function Country({ name, flag, handleClose, capital, languages, population, region, border_countries, currencies }) {
	const props = { name, flag, capital, languages, population, region, border_countries, currencies }
	return (
		<div className="country" onClick={() => handleClose(props)}>
			<img alt={name} loading="lazy" src={flag} style={{ width: '30px' }} />
			<p>{name.length >= 28 ? `${name.slice(0, 28)}...` : name}</p>
		</div>
	)
}
