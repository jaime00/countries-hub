import { useEffect, useState } from 'react'
import IconClose from '../../assets/images/icon_close.svg'
import MarkAsFavorite from '../MarkAsFavorite'
import { getBorderCountries } from '../../services'
import './index.css'

export default function Modal({ handleClose, modal, handleChangeFavorite }) {
	const [borders, setBorders] = useState('')
	const { country, isOpen } = modal
	const { name, region, population, flag, capital, languages, border_countries, currencies } = country
	const showHideClassName = isOpen ? 'modal display-block' : 'modal display-none'
	useEffect(async () => {
		let borders = isOpen ? await getBorderCountries(border_countries) : 'Nothing'
		setBorders(borders)
	}, [border_countries])

	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				<div className="d-flex close" onClick={handleClose}>
					<img src={IconClose} alt="" />
				</div>
				<div className="d-flex">
					<h2>{name}</h2>
					<MarkAsFavorite name={name} handleChangeFavorite={handleChangeFavorite} />
				</div>
				<p>
					<span className="bold">Region:</span> {region}
				</p>
				<p>
					<span className="bold">Population:</span> {population}
				</p>
				<p>
					<span className="bold">Capital:</span> {capital}
				</p>
				<p>
					<span className="bold">Currency:</span> {currencies}
				</p>
				<p>
					<span className="bold">Language:</span> {languages}
				</p>
				<p>
					<span className="bold">Border Countries:</span> {borders}
				</p>
				<p>
					<span className="bold">Flag:</span>
				</p>
				<img src={flag} alt={name} className="flag" />
			</section>
		</div>
	)
}
