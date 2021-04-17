import React from 'react'
// ROUTER
import { Route, Switch } from 'react-router-dom'
// COMPONENTS
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddSupplier from './components/AddSupplier'
import AddAudit from './components/audit/AddAudit'
import Auth from './components/Auth'
import AuditPage from './components/audit/AuditPage'

function App() {
	return (
		<div className='container'>
			<div className='content'>
				<Navbar />
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/database' component={AddSupplier} />
					<Route path='/audit' component={AddAudit} />
					<Route path='/auth' component={Auth} />
					<Route parth='/audit-page' component={AuditPage} />
				</Switch>
			</div>
			<Footer />
		</div>
	)
}

export default App
