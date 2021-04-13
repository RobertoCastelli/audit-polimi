import React from 'react'
// ROUTER
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// COMPONENTS
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Database from './components/Database'
import Audit from './components/Audit'
import Auth from './components/Auth'

function App() {
	return (
		<BrowserRouter>
			<div className='container'>
				<div className='content'>
					<Navbar />
					<Header />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/database' component={Database} />
						<Route path='/audit' component={Audit} />
						<Route path='/auth' component={Auth} />
					</Switch>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
