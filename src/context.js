import React, { useState, useEffect } from 'react'
import { db } from './firebase'

export const DataContext = React.createContext()

const ContextProvider = (props) => {
	// useState
	const [ditta, setDitta] = useState('')
	const [lotto, setLotto] = useState(0)
	const [optionSuppliersList, setOptionSuppliersList] = useState([])

	// ADD SUPPLIER DATA
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

	// DELETE ALL DB
	const deleteAllDb = () => {
		window.confirm('🔥 premi OK per cancellare TUTTO il DB 🔥') &&
			db
				.collection('suppliers')
				.get()
				.then((snapshot) => snapshot.forEach((doc) => doc.ref.delete()))
				.catch((error) => console.log(`error occured: ${error.message}`))
	}

	// GET SUPPLIER LIST
	useEffect(() => {
		db.collection('suppliers').onSnapshot((snapshot) =>
			setOptionSuppliersList(snapshot.docs.map((doc) => [doc.data().ditta]))
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
				optionSuppliersList,
				deleteAllDb,
			}}>
			{props.children}
		</DataContext.Provider>
	)
}

export default ContextProvider
