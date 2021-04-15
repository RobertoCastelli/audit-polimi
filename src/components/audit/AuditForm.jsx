import React, { useContext } from 'react'
// REACT ICONS
import { FcServices, FcViewDetails } from 'react-icons/fc'
// CONTEXT
import { DataContext } from '../../context'

const AuditForm = () => {
	const {
		giorno,
		setGiorno,
		orario,
		setOrario,
		handleSubmitAuditForm,
		suppliersOptionList,
		setSelectedSupplierOption,
		edifici,
		setSelectedEdificiOption,
	} = useContext(DataContext)

	return (
		<div className='audit-form-wrapper'>
			<h3 className='audit-form-title'>generate audit</h3>
			<form onSubmit={handleSubmitAuditForm}>
				<div className='audit-form-ditta'>
					<select onChange={(e) => setSelectedSupplierOption(e.target.value)}>
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
					<select onChange={(e) => setSelectedEdificiOption(e.target.value)}>
						{edifici.map((edificio) => {
							return (
								<option key={edificio.label} value={edificio.value}>
									{edificio.label}
								</option>
							)
						})}
					</select>
				</div>
				<button type='submit'>
					<FcServices size={20} />
					<FcViewDetails size={20} />
				</button>
			</form>
		</div>
	)
}

export default AuditForm
