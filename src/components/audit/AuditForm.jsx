import React, { useContext } from 'react'
// CONTEXT
import { DataContext } from '../../context'

const AuditForm = () => {
	const { optionSuppliersList, deleteAllDb } = useContext(DataContext)

	return (
		<div>
			<select>
				{optionSuppliersList.map((supplier, i) => {
					return (
						<option key={i} value={supplier}>
							{supplier}
						</option>
					)
				})}
			</select>
			<button onClick={() => deleteAllDb()}>clear all</button>
		</div>
	)
}

export default AuditForm
