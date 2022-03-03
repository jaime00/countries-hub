import './index.css'

export default function Modal({ handleClose, modal }) {
	const { country, isOpen } = modal
	const { name, region, population, flag, capital, languages, border_countries, currencies } = country
	const showHideClassName = isOpen ? 'modal display-block' : 'modal display-none'
	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				<span className="close" onClick={handleClose}>
					X
				</span>
				<h2>{name}</h2>
				<p>
					<b>Region:</b> {region}
				</p>
				<p>
					<b>Population:</b> {population}
				</p>
				<p>
					<b>Capital:</b> {capital}
				</p>
				<p>
					<b>Currency:</b> {currencies}
				</p>
				<p>
					<b>Language:</b> {languages}
				</p>
				<p>
					<b>Border Countries:</b> {border_countries}
				</p>
				<p>
					<b>Flag:</b>
				</p>
				<img src={flag} alt={name} />
			</section>
		</div>
	)
}
