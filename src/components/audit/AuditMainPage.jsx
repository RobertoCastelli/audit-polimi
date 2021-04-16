import React, { useContext } from 'react'
import logo from '../../images/logo.png'
// CONTEXT
import { DataContext } from '../../context'

const AuditPage = () => {
	const { giorno, orario, selectedEdifici, supplierData } = useContext(
		DataContext
	)
	console.log(supplierData)
	return (
		<div className='audit-page-wrapper'>
			<img className='logo' src={logo} alt='logo' />
			<p>{giorno}</p>
			<p>{orario}</p>
			<p>{selectedEdifici}</p>
		</div>
	)
}

export default AuditPage
