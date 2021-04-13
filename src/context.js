import React from 'react'
import { suppliers } from './database/suppliersDatabase'

export const DataContext = React.createContext()

const ContextProvider = (props) => {
	return (
		<DataContext.Provider value={{ suppliers }}>
			{props.children}
		</DataContext.Provider>
	)
}

export default ContextProvider
