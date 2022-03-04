import IconFav from '../../assets/images/icon_favorite.svg'
import './index.css'

export default function Country({
	name,
	flag,
	handleClose,
	capital,
	languages,
	population,
	region,
	border_countries,
	currencies,
	isFavorite,
}) {
	const props = { name, flag, capital, languages, population, region, border_countries, currencies }
	return (
		<div className="country" onClick={() => handleClose(props)}>
			<img alt={name} loading="lazy" src={flag} style={{ width: '30px' }} />
			<p>{name.length >= 28 ? `${name.slice(0, 28)}...` : name}</p>
			{isFavorite && <img className="icon-fav" src={IconFav} alt="FavIcon" />}
		</div>
	)
}
