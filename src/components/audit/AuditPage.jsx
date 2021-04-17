import React, { useContext } from 'react'
import logo from '../../images/logo.png'
// ROUTER
import { Link } from 'react-router-dom'
// CONTEXT
import { DataContext } from '../../context'

const AuditPage = () => {
	const {
		supplierData,
		giorno,
		orario,
		selectedEdifici,
		isGenerated,
	} = useContext(DataContext)
	console.log(supplierData)

	return (
		<>
			{isGenerated ? (
				<div className='audit-page-wrapper'>
					<img className='logo' src={logo} alt='logo' />
					<div className='audit-page-content'>
						<div className='audit-page-oggetto'>{supplierData.oggetto}</div>

						<div className='audit-page-bold-italic'>
							verbale verifica del {giorno}
						</div>
						<div>
							il giorno {giorno} dell'anno 2021, alle ore {orario} presso il
							fabbricato {selectedEdifici}, sono presenti:
						</div>
						<ul className='audit-page-referenti'>
							<li>
								{supplierData.referenti.nome} {supplierData.referenti.cognome} -
								ditta {supplierData.ditta}
							</li>
						</ul>
						<div className='audit-page-bold-italic'>premesso</div>
						<div className='audit-page-section'>
							- visto che il contratto repertorio n°20/2018 del 28 novembre 2018
							con il quale è stata affidato alla società {supplierData.ditta}{' '}
							per la fornitura di {supplierData.oggetto} - lotto{' '}
							{supplierData.lotto} CIG {supplierData.cig};
						</div>
						<div className='audit-page-section'>
							- visto l'art. 5.3.6 "Verifiche di conformità in corso di
							esecuzione" e l'art. 8 "Controlli" del Capitolato recnico del
							Bando istitutivo di Consip;
						</div>
						<div className='audit-page-section'>
							- visto il Programma Operativo dei Servizi per il periodo 2021 che
							prevedeva le attività di manutenzione ordinaria impianti elettrici
							presso il fabbricato {selectedEdifici}
						</div>
						<div className='audit-page-bold-italic'>si verbalizza</div>
						<div>
							che sono state verificate le seguenti attività programmate
							previste dal POS e che siano state svolte secondo le modalità
							contrattuali previse:
						</div>
						<input type='file' name='' id='' />
					</div>
				</div>
			) : (
				<Link to='/audit'>
					<button>generate audit</button>
				</Link>
			)}
		</>
	)
}

export default AuditPage
