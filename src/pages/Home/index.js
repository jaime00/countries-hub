import { useEffect, useState } from 'react'

import SearchSection from '../../components/SearchSection'
import ListOfRegions from '../../components/ListOfRegions'
import Loading from '../../components/Loading'
import NotFound from '../../components/NotFound'
import Modal from '../../components/Modal'

import { INITIAL_INPUT, INITIAL_MODAL, INITIAL_STATE } from '../../utils/defaults'
import { updateLocalStorage } from '../../utils/helper'
import { getCountries } from '../../services'

export default function Home() {
	const [state, setState] = useState(INITIAL_STATE)
	const [input, setInput] = useState(INITIAL_INPUT)
	const [modal, setModal] = useState(INITIAL_MODAL)
	const { country, region } = input
	const { countries = [], loading } = state
	const commonUpdateState = async () => {
		setState({ loading: true })
		const countries = await getCountries({ region, country })
		setState({ loading: false, countries })
	}
	const handleChangeFavorite = ({ name }) => {
		updateLocalStorage({ name })
		let newCountries = countries.map((country) => {
			if (country.name === name) country.isFavorite = !country.isFavorite
			return country
		})
		setState({ loading, countries: newCountries })
	}
	const handleClose = async (country) => {
		setModal({ isOpen: !modal.isOpen, country })
	}
	const handleChange = (e) => setInput({ ...input, [e.target.name]: e.target.value })
	const onSubmitForm = async function (e) {
		e.preventDefault()
		await commonUpdateState()
	}
	useEffect(async () => {
		await commonUpdateState()
	}, [country, region])

	return (
		<div className="container">
			<Modal handleChangeFavorite={handleChangeFavorite} modal={modal} handleClose={handleClose} />
			<SearchSection onSubmitForm={onSubmitForm} handleChange={handleChange} country={country} region={region} />
			{loading ? <Loading /> : <ListOfRegions handleClose={handleClose} countries={countries} />}
			{countries.length === 0 && !loading && <NotFound />}
		</div>
	)
}
