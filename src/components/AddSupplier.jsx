import React, { useContext } from 'react'
// ROUTER
import { Link } from 'react-router-dom'
// CONTEXT
import { DataContext } from '../context'
// REACT ICONS
import {
	FcMultipleInputs,
	FcBusinessman,
	FcPlus,
	FcHome,
	FcSurvey,
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
					<button type='button' className='btn-supplier-form-add-ref'>
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
				<div className='supplier-form-buttons'>
					<button className='btn-supplier-form-add-inputs' type='submit'>
						<FcMultipleInputs size={30} />
					</button>
					<Link to='/audit'>
						<button className='btn-supplier-form-audit' type='button'>
							<FcSurvey size={20} />
						</button>
					</Link>
					<Link to='/'>
						<button className='btn-supplier-form-home' type='button'>
							<FcHome size={20} />
						</button>
					</Link>
				</div>
			</form>
		</div>
	)
}

export default AddSupplier
