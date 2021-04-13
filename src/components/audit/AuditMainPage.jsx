import React, { useContext } from 'react'
import logo from '../../images/logo.png'
import { DataContext } from '../../context'

const AuditMainPage = () => {
	const { suppliers } = useContext(DataContext)
	console.log(suppliers)

	return (
		<div>
			<img className='logo' src={logo} alt='logo' />
		</div>
	)
}

export default AuditMainPage
