import { useEffect, useState } from 'react'
import SearchSection from '../../components/SearchSection'
import ListOfRegions from '../../components/ListOfRegions'
import Loading from '../../components/Loading'
import NotFound from '../../components/NotFound'
import Modal from '../../components/Modal'
import { getCountries } from '../../services'

export default function Home() {
	const [state, setState] = useState({ loading: false, countries: [] })
	const [input, setInput] = useState({ country: '', region: '' })
	const [modal, setModal] = useState({
		country: {
			name: '',
			region: '',
			population: '',
			languages: '',
			flag: '',
			capital: '',
			border_countries: '',
		},
		isOpen: false,
	})
	const { country, region } = input
	const { countries = [], loading } = state
	const handleClose = (country) => {
		setModal({ isOpen: !modal.isOpen, country })
	}
	const handleChange = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value })
	}

	const handleSubmit = async function (e) {
		e.preventDefault()
		setState({ loading: true })
		const countries = await getCountries({ region, country })
		setState({
			loading: false,
			countries,
		})
	}
	useEffect(async () => {
		setState({ loading: true })
		const countries = await getCountries({ region, country })
		setState({
			loading: false,
			countries,
		})
	}, [])
	return (
		<div className="container">
			<Modal modal={modal} handleClose={handleClose} />
			<SearchSection handleSubmit={handleSubmit} handleChange={handleChange} country={country} region={region} />
			{loading ? <Loading /> : <ListOfRegions handleClose={handleClose} countries={countries} />}
			{countries.length === 0 && !loading && <NotFound />}
		</div>
	)
}
