import React, { useContext } from 'react'
// CONTEXT
import { DataContext } from '../../context'

const AuditForm = () => {
	const {
		suppliersOptionList,
		handleSubmitAuditForm,
		setSelectedSupplierOption,
		deleteAllDb,
		today,
	} = useContext(DataContext)

	return (
		<div className='audit-form-wrapper'>
			<h3 className='audit-form-title'>generate audit</h3>
			<form onSubmit={handleSubmitAuditForm}>
				<select onChange={(e) => setSelectedSupplierOption(e.target.value)}>
					{suppliersOptionList.map((supplier, i) => {
						return (
							<option key={i} value={supplier}>
								{supplier}
							</option>
						)
					})}
				</select>
				<div className='audit-form-div'>
					<input type='date' value={today} />
				</div>
				<div className='audit-form-div'>
					<input type='time' />
				</div>
				<div className='audit-form-div'>
					<input placeholder='edificio' type='text' />
				</div>
				<button type='submit'>submit</button>
			</form>
			<button onClick={() => deleteAllDb()}>clear all</button>
		</div>
	)
}

export default AuditForm
