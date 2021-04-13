import React, { useContext } from 'react'
import logo from '../../images/logo.png'
import { DataContext } from '../../context'

const AuditMainPage = () => {
	const { suppliers } = useContext(DataContext)
	console.log(suppliers)

	return (
		<div className='audit-main-page-wrapper'>
			<img className='logo' src={logo} alt='logo' />
			<div className='audit-main-page-oggetto'>
				{suppliers[0].oggetto} -{' '}
				<span className='audit-main-page-lotto-cig'>
					lotto {suppliers[0].lotto} - cig {suppliers[0].cig}
				</span>
			</div>
			<div className='audit-main-page-giorno-verifica-verbale'>
				verifica verbale del {suppliers[0].giorno_verifica}
			</div>
			<div className='audit-main-page-referenti'>
				sono presenti:
				<ul>
					<li>{suppliers[0].referenti.nominativo_uno}</li>
					<li>{suppliers[0].referenti.nominativo_due}</li>
				</ul>
			</div>
		</div>
	)
}

export default AuditMainPage
