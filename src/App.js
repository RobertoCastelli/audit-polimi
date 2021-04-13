import React from 'react'
// ROUTER
import { Route, Switch } from 'react-router-dom'
// COMPONENTS
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SupplierForm from './components/SupplierForm'
import AuditForm from './components/audit/AuditForm'
import Auth from './components/Auth'
import AuditMainPage from './components/audit/AuditMainPage'

function App() {
	return (
		<div className='container'>
			<div className='content'>
				<Navbar />
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/database' component={SupplierForm} />
					<Route path='/audit' component={AuditForm} />
					<Route path='/auth' component={Auth} />
					<Route parth='/audit-main-page' component={AuditMainPage} />
				</Switch>
			</div>
			<Footer />
		</div>
	)
}

export default App
