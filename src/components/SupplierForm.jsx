import React, { useContext } from 'react'
// CONTEXT
import { DataContext } from '../context'
// REACT ICONS
import { FcMultipleInputs, FcBusinessman, FcPlus } from 'react-icons/fc'

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
		referenti,
		setReferenti,
		handleSubmitSupplier,
	} = useContext(DataContext)

	return (
		<div className='supplier-form-wrapper'>
			<h3 className='supplier-form-title'>add new supplier</h3>
			<form onSubmit={handleSubmitSupplier}>
				<div className='supplier-form-ditta'>
					<input
						placeholder='ditta'
						type='text'
						value={ditta}
						onChange={(e) => setDitta(e.target.value)}
					/>
				</div>
				<div className='supplier-form-lotto'>
					<input
						placeholder='lotto'
						type='number'
						value={lotto}
						onChange={(e) => setLotto(e.target.value)}
					/>
				</div>
				<div className='supplier-form-cig'>
					<input
						placeholder='c.i.g.'
						type='text'
						value={cig}
						onChange={(e) => setCig(e.target.value)}
					/>
				</div>
				<div className='supplier-form-referenti'>
					<input
						placeholder='nome'
						className='supplier-form-nome'
						type='text'
					/>
					<input
						placeholder='cognome'
						className='supplier-form-cognome'
						type='text'
					/>
					<button className='supplier-form-add'>
						<FcBusinessman size={15} />
						<FcPlus size={15} />
					</button>
				</div>
				<div className='supplier-form-oggetto'>
					<textarea
						placeholder='accordo quadro'
						type='text'
						cols='20'
						rows='20'
						value={oggetto}
						onChange={(e) => setOggetto(e.target.value)}
					/>
				</div>
				<button type='submit'>
					<FcMultipleInputs size={30} />
				</button>
			</form>
		</div>
	)
}

export default SupplierForm
