import React, { useContext } from 'react'
// CONTEXT
import { DataContext } from '../context'
// REACT ICONS
import { FcMultipleInputs } from 'react-icons/fc'

const SupplierForm = () => {
	const {
		ditta,
		setDitta,
		lotto,
		setLotto,
		cig,
		setCig,
		oggetto,
		setOggetto,
		handleSubmitSupplier,
	} = useContext(DataContext)

	return (
		<div className='supplier-form-wrapper'>
			<h3 className='supplier-form-title'>add new supplier</h3>
			<form onSubmit={handleSubmitSupplier}>
				<div className='supplier-form-div'>
					<input
						placeholder='ditta'
						type='text'
						name='ditta'
						value={ditta}
						onChange={(e) => setDitta(e.target.value)}
					/>
				</div>
				<div className='supplier-form-div'>
					<input
						placeholder='lotto'
						type='number'
						name='lotto'
						value={lotto}
						onChange={(e) => setLotto(e.target.value)}
					/>
				</div>
				<div className='supplier-form-div'>
					<input
						placeholder='c.i.g.'
						type='text'
						name='cig'
						value={cig}
						onChange={(e) => setCig(e.target.value)}
					/>
				</div>
				<div className='supplier-form-div'>
					<textarea
						placeholder='accordo quadro'
						type='text'
						name='oggetto'
						cols='20'
						rows='20'
						value={oggetto}
						onChange={(e) => setOggetto(e.target.value)}
					/>
				</div>
				<button type='submit'>
					<FcMultipleInputs size={20} />
				</button>
			</form>
		</div>
	)
}

export default SupplierForm
