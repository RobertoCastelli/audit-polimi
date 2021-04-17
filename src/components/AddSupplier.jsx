import React, { useContext } from 'react'
// CONTEXT
import { DataContext } from '../context'
// REACT ICONS
import {
	FcMultipleInputs,
	FcDepartment,
	FcAbout,
	FcBusinessman,
	FcBusinesswoman,
	FcManager,
} from 'react-icons/fc'

const AddSupplier = () => {
	const {
		ditta,
		setDitta,
		lotto,
		setLotto,
		cig,
		setCig,
		oggetto,
		setOggetto,
		supplierNome,
		setSupplierNome,
		supplierCognome,
		setSupplierCognome,
		handleSubmitSupplier,
	} = useContext(DataContext)

	return (
		<div className='supplier-form-wrapper'>
			<h3 className='supplier-form-title'>add new supplier</h3>
			<form onSubmit={(e) => handleSubmitSupplier(e)}>
				<div className='supplier-form-icon'>
					<FcDepartment size={20} />
				</div>
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
				<div className='supplier-form-icon'>
					<FcAbout size={20} />
				</div>
				<div className='supplier-form-oggetto'>
					<textarea
						placeholder='accordo quadro'
						type='text'
						cols='20'
						rows='10'
						value={oggetto}
						onChange={(e) => setOggetto(e.target.value)}
					/>
				</div>
				<div className='supplier-form-icon'>
					<FcManager size={20} />
					<FcBusinessman size={20} />
					<FcBusinesswoman size={20} />
				</div>
				<ol className='supplier-form-referenti'>
					<li>
						<input
							placeholder='nome'
							className='supplier-form-nome'
							value={supplierNome}
							onChange={(e) => setSupplierNome(e.target.value)}
							type='text'
						/>
						<input
							placeholder='cognome'
							className='supplier-form-cognome'
							value={supplierCognome}
							onChange={(e) => setSupplierCognome(e.target.value)}
							type='text'
						/>
					</li>
					<li>
						<input
							placeholder='nome'
							className='supplier-form-nome'
							value={supplierNome}
							onChange={(e) => setSupplierNome(e.target.value)}
							type='text'
						/>
						<input
							placeholder='cognome'
							className='supplier-form-cognome'
							value={supplierCognome}
							onChange={(e) => setSupplierCognome(e.target.value)}
							type='text'
						/>
					</li>
					<li>
						<input
							placeholder='nome'
							className='supplier-form-nome'
							value={supplierNome}
							onChange={(e) => setSupplierNome(e.target.value)}
							type='text'
						/>
						<input
							placeholder='cognome'
							className='supplier-form-cognome'
							value={supplierCognome}
							onChange={(e) => setSupplierCognome(e.target.value)}
							type='text'
						/>
					</li>
				</ol>
				<div>
					<button type='submit'>
						<FcMultipleInputs size={30} />
					</button>
				</div>
			</form>
		</div>
	)
}

export default AddSupplier
