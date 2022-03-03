import './App.css'
import Home from './pages/Home'
import { Route, Redirect } from 'wouter'

function App() {
	return (
		<>
			<Route path="/" component={Home} />
			<Redirect to="/" />
		</>
	)
}

export default App
