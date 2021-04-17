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
		monthText,
		day,
		month,
		year,
		isGenerated,
	} = useContext(DataContext)

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
							il giorno {day} del mese di {monthText} dell'anno {year}, alle ore{' '}
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
						<br />
						<div>~~~~ inserire componente con checkboxes ~~~~~</div>
						<div>~~~~ inserire componente con checkboxes ~~~~~</div>
						<div>~~~~ inserire componente con checkboxes ~~~~~</div>
						<div>~~~~ inserire componente con checkboxes ~~~~~</div>
						<div>~~~~ inserire componente con checkboxes ~~~~~</div>
						<div>~~~~ inserire componente con checkboxes ~~~~~</div>
						<div>~~~~ inserire componente con checkboxes ~~~~~</div>
						<div>~~~~ inserire componente con checkboxes ~~~~~</div>
						<div>~~~~ inserire componente con checkboxes ~~~~~</div>
						<div>~~~~ inserire componente con checkboxes ~~~~~</div>
						<div>~~~~ inserire componente con checkboxes ~~~~~</div>
						<div>~~~~ inserire componente con checkboxes ~~~~~</div>
						<div>~~~~ inserire componente con checkboxes ~~~~~</div>
						<div>~~~~ inserire componente con checkboxes ~~~~~</div>

						<div className='audit-page-firme'>
							<div>
								<p>Per il Politecnico</p>
								<br />
								<p>__________________</p>
							</div>
							<div>
								<p>Per l'impresa</p>
								<br />
								<p>__________________</p>
							</div>
						</div>
					</div>
					<div className='audit-page-piepagina'>
						<div className='audit-page-piepagina-section'>
							<div>
								<b>Area Gestione Infrastrutture e servizi</b>
							</div>
							<div>Piazza Leonardo da Vinci, 32 20133 Milano</div>
						</div>
						<div className='audit-page-piepagina-section'>
							<div>Tel. 02 23999300</div>
							<div>Fax 02 23992076</div>
							<div>www.polimi.it</div>
						</div>
						<div className='audit-page-piepagina-section'>
							<div>Partita Iva 04376620151</div>
							<div>Codice Fiscale 80057930150</div>
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
