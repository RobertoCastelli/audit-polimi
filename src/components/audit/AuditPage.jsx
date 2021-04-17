import React, { useContext } from 'react'
import logo from '../../images/logo.png'
// PDF
import ReactToPrint from 'react-to-print'
// REACT ICONS
import { GrDocumentPdf } from 'react-icons/gr'
import { FcAdvance } from 'react-icons/fc'
// CONTEXT
import { DataContext } from '../../context'

const AuditPage = () => {
	const {
		supplierData,
		orario,
		selectedEdifici,
		day,
		month,
		year,
		isGenerated,
	} = useContext(DataContext)
	console.log(supplierData)

	const auditRef = React.useRef()

	return (
		<>
			{isGenerated && (
				<div ref={auditRef} className='audit-page-wrapper'>
					<img className='logo' src={logo} alt='logo' />
					<div className='audit-page-content'>
						<div className='audit-page-oggetto'>{supplierData.oggetto}</div>
						<div className='audit-page-bold-italic'>
							verbale verifica del {day}-{month}-{year}
						</div>
						<div>
							il giorno {day} del mese di {month} dell'anno {year}, alle ore{' '}
							{orario} presso il fabbricato {selectedEdifici}, sono presenti:
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
					</div>
				</div>
			)}
			<div className='audit-page-pdf'>
				<ReactToPrint
					trigger={() => (
						<button className='btn-audit-page-pdf'>
							<FcAdvance size={20} />
							<GrDocumentPdf size={20} />
						</button>
					)}
					content={() => auditRef.current}
				/>
			</div>
		</>
	)
}

export default AuditPage
