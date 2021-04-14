import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import { db } from './firebase'

export const DataContext = React.createContext()

const ContextProvider = (props) => {
	// ANAGRAFICA SUPPLIER
	const [ditta, setDitta] = useState('')
	const [lotto, setLotto] = useState('')
	const [cig, setCig] = useState('')
	const [oggetto, setOggetto] = useState('')
	const [referenti, setReferenti] = useState({ nome: '', cognome: '' })

	// AUDIT-FORM
	const [suppliersOptionList, setSuppliersOptionList] = useState([])
	const [selectedSupplierOption, setSelectedSupplierOption] = useState('')

	// GET DATE
	const today = new Date().toISOString().substring(0, 10)
	const timestamp = firebase.firestore.FieldValue.serverTimestamp()

	// SEND SUPPLIER DATA TO DB
	const handleSubmitSupplier = (e) => {
		e.preventDefault()
		db.collection('suppliers')
			.add({
				ditta,
				cig,
				lotto,
				oggetto,
				referenti: { nome: 'Roberto', cognome: 'Castelli' },
				createdAt: timestamp,
			})
			.then((doc) => console.log(`supplier written ID: ${doc.id}`))
			.catch((error) => console.log(`error occured: ${error.message}`))
	}

	// SEND AUDIT-FORM DATA TO AUDIT-PAGE
	const handleSubmitAuditForm = (e) => {
		e.preventDefault()
		getSupplierData(selectedSupplierOption)
	}

	// DELETE ALL DB
	const deleteAllDb = () => {
		window.confirm('🔥 premi OK per cancellare TUTTO il DB 🔥') &&
			db
				.collection('suppliers')
				.get()
				.then((snapshot) => snapshot.forEach((doc) => doc.ref.delete()))
				.catch((error) => console.log(`error occured: ${error.message}`))
	}

	// GET SUPPLIER DATA
	const getSupplierData = (ditta) => {
		db.collection('suppliers')
			.where('ditta', '==', ditta)
			.onSnapshot((snapshot) =>
				snapshot.docs.map((doc) => console.log(doc.data()))
			)
	}

	// GET SUPPLIER OPTION LIST
	useEffect(() => {
		db.collection('suppliers').onSnapshot((snapshot) =>
			setSuppliersOptionList(snapshot.docs.map((doc) => [doc.data().ditta]))
		)
	}, [])

	// RENDER
	return (
		<DataContext.Provider
			value={{
				today,
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
				suppliersOptionList,
				deleteAllDb,
				handleSubmitAuditForm,
				setSelectedSupplierOption,
			}}>
			{props.children}
		</DataContext.Provider>
	)
}

export default ContextProvider
