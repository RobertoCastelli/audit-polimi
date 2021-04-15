import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import { db } from './firebase'
import { edifici } from './edifici'

export const DataContext = React.createContext()

const ContextProvider = (props) => {
	// GET DATE
	const today = new Date().toISOString().substring(0, 10)
	const time = new Date().toLocaleTimeString().substring(0, 5)
	const timestamp = firebase.firestore.FieldValue.serverTimestamp()

	// ANAGRAFICA SUPPLIER
	const [ditta, setDitta] = useState('')
	const [lotto, setLotto] = useState('')
	const [cig, setCig] = useState('')
	const [oggetto, setOggetto] = useState('')
	const [supplierNome, setSupplierNome] = useState('')
	const [supplierCognome, setSupplierCognome] = useState('')

	// AUDIT-FORM
	const [suppliersOptionList, setSuppliersOptionList] = useState([])
	const [selectedSupplierOption, setSelectedSupplierOption] = useState('')
	const [giorno, setGiorno] = useState(today)
	const [orario, setOrario] = useState(time)
	const [selectedEdificiOption, setSelectedEdificiOption] = useState('b1')

	// DELETE ALL DB
	const deleteAllDb = () => {
		window.confirm('🔥 premi OK per cancellare TUTTO il DB 🔥') &&
			db
				.collection('suppliers')
				.get()
				.then((snapshot) => snapshot.forEach((doc) => doc.ref.delete()))
				.catch((error) => console.log(`error occured: ${error.message}`))
	}

	// SEND SUPPLIER DATA TO DB
	const handleSubmitSupplier = (e) => {
		e.preventDefault()
		db.collection('suppliers')
			.add({
				ditta,
				cig,
				lotto,
				oggetto,
				referenti: { nome: { supplierNome }, cognome: { supplierCognome } },
				createdAt: timestamp,
			})
			.then((doc) => alert(`supplier written ID: ${doc.id}`))
			.catch((error) => console.log(`error occured: ${error.message}`))
		setDitta('')
		setLotto('')
		setCig('')
		setOggetto('')
		setSupplierNome('')
		setSupplierCognome('')
	}

	// SEND AUDIT-FORM DATA TO AUDIT-PAGE
	const handleSubmitAuditForm = (e) => {
		e.preventDefault()
		console.log(selectedEdificiOption, giorno, orario, selectedSupplierOption)
		getSupplierData(selectedSupplierOption)
	}

	// GET SUPPLIER DATA FROM DB
	const getSupplierData = (ditta) => {
		db.collection('suppliers')
			.where('ditta', '==', ditta)
			.onSnapshot((snapshot) =>
				snapshot.docs.map((doc) => console.log(doc.data()))
			)
	}

	// POPULATE SUPPLIER SELECT -> OPTION LIST
	useEffect(() => {
		db.collection('suppliers').onSnapshot((snapshot) =>
			setSuppliersOptionList(snapshot.docs.map((doc) => [doc.data().ditta]))
		)
	}, [])

	// RENDER
	return (
		<DataContext.Provider
			value={{
				giorno,
				setGiorno,
				orario,
				setOrario,
				edifici,
				ditta,
				setDitta,
				lotto,
				setLotto,
				cig,
				setCig,
				oggetto,
				setOggetto,
				supplierNome,
				supplierCognome,
				setSupplierNome,
				setSupplierCognome,
				handleSubmitSupplier,
				suppliersOptionList,
				setSelectedSupplierOption,
				setSelectedEdificiOption,
				deleteAllDb,
				handleSubmitAuditForm,
			}}>
			{props.children}
		</DataContext.Provider>
	)
}

export default ContextProvider
