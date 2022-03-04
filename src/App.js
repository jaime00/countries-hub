import { Route, Redirect } from 'wouter'
import Home from './pages/Home'
import './App.css'

function App() {
	return (
		<>
			<Route path="/" component={Home} />
			<Redirect to="/" />
		</>
	)
}

export default App
