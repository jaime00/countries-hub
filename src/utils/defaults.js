// DEFAULTS STATES
const INITIAL_STATE = { loading: false, countries: [] }
const INITIAL_INPUT = { country: '', region: '' }
const INITIAL_MODAL = {
	country: {
		name: '',
		region: '',
		population: '',
		languages: '',
		flag: '',
		capital: '',
	},
	isOpen: false,
	border_countries: '',
}
export { INITIAL_STATE, INITIAL_INPUT, INITIAL_MODAL }
