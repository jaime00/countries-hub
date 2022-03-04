import React, { useEffect, useState } from 'react'
import IconFav from '../../assets/images/icon_favorite.svg'
import IconDefault from '../../assets/images/icon_favorite_default.svg'
import { isFavorite } from '../../utils/helper'

export default function MarkAsFavorite({ name, handleChangeFavorite }) {
	const [isFav, setIsFav] = useState(false)
	useEffect(() => {
		setIsFav(isFavorite({ name }))
	}, [name, handleChangeFavorite])

	const source = isFav ? IconFav : IconDefault
	return <img onClick={() => handleChangeFavorite({ name })} className="icon-fav" src={source} alt="FavIcon" />
}
