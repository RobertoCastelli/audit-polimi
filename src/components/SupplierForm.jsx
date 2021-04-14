import React, { useContext } from 'react'
// CONTEXT
import { DataContext } from '../context'

const SupplierForm = () => {
	const { ditta, setDitta, lotto, setLotto, handleSubmitSupplier } = useContext(
		DataContext
	)

	return (
		<div className='supplier-form-wrapper'>
			<h2 className='supplier-form-title'>add supplier</h2>
			<form className='supplier-form-content' onSubmit={handleSubmitSupplier}>
				<div>
					<label htmlFor='ditta'>ditta </label>
					<input
						type='text'
						name='ditta'
						value={ditta}
						onChange={(e) => setDitta(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='lotto'>lotto </label>
					<input
						type='number'
						name='lotto'
						value={lotto}
						onChange={(e) => setLotto(e.target.value)}
					/>
				</div>
				<button type='submit'>invia dati</button>
			</form>
		</div>
	)
}

export default SupplierForm
