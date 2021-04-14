import React, { useState, useEffect } from 'react'
import { db } from './firebase'

export const DataContext = React.createContext()

const ContextProvider = (props) => {
	// useState
	const [ditta, setDitta] = useState('')
	const [lotto, setLotto] = useState(0)
	const [suppliersOptionList, setSuppliersOptionList] = useState([])
	const [selectedSupplierOption, setSelectedSupplierOption] = useState('')

	// SEND SUPPLIER DATA TO DB
	const handleSubmitSupplier = (e) => {
		e.preventDefault()
		db.collection('suppliers')
			.add({
				ditta,
				lotto,
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
				ditta,
				setDitta,
				lotto,
				setLotto,
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
