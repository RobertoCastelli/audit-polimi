import React, { useContext } from 'react'
// ROUTER
import { Link } from 'react-router-dom'
// REACT ICONS
import {
	FcAdvance,
	FcEmptyFilter,
	FcDocument,
	FcServices,
} from 'react-icons/fc'
// CONTEXT
import { DataContext } from '../../context'

const AddAudit = () => {
	const {
		giorno,
		setGiorno,
		orario,
		setOrario,
		month,
		handleSubmitAuditForm,
		suppliersOptionList,
		selectedSupplier,
		setSelectedSupplier,
		edifici,
		setSelectedEdifici,
		getTextMonth,
		isGenerated,
	} = useContext(DataContext)

	return (
		<div className='audit-form-wrapper'>
			<h3 className='audit-form-title'>generate audit page</h3>
			<form onSubmit={handleSubmitAuditForm}>
				<div className='audit-form-ditta'>
					<select onChange={(e) => setSelectedSupplier(e.target.value)}>
						<option>choose supplier</option>
						{suppliersOptionList.map((supplier, i) => {
							return (
								<option key={i} value={supplier}>
									{supplier}
								</option>
							)
						})}
					</select>
				</div>
				<div className='audit-form-date'>
					<input
						type='date'
						value={giorno}
						onChange={(e) => setGiorno(e.target.value)}
					/>
				</div>
				<div className='audit-form-time'>
					<input
						type='time'
						value={orario}
						onChange={(e) => setOrario(e.target.value)}
					/>
				</div>
				<div className='audit-form-edificio'>
					<select onChange={(e) => setSelectedEdifici(e.target.value)}>
						{edifici.map((edificio) => {
							return (
								<option key={edificio.label} value={edificio.value}>
									{edificio.label}
								</option>
							)
						})}
					</select>
				</div>
				<div className='audit-form-buttons'>
					{selectedSupplier && (
						<button type='submit'>
							<FcServices size={20} />
							<FcEmptyFilter size={20} />
						</button>
					)}
					{isGenerated && (
						<Link to='/audit-page'>
							{/*FIXME: da migliorare */}
							<button onClick={() => getTextMonth(parseInt(month))}>
								<FcAdvance size={20} />
								<FcDocument size={20} />
							</button>
						</Link>
					)}
				</div>
			</form>
		</div>
	)
}

export default AddAudit
