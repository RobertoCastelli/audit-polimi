import React, { useContext } from 'react'
// CONTEXT
import { DataContext } from '../../context'

const AuditForm = () => {
	const {
		suppliersOptionList,
		handleSubmitAuditForm,
		setSelectedSupplierOption,
		deleteAllDb,
	} = useContext(DataContext)

	return (
		<div>
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
				<button type='submit'>submit</button>
			</form>
			<button onClick={() => deleteAllDb()}>clear all</button>
		</div>
	)
}

export default AuditForm
