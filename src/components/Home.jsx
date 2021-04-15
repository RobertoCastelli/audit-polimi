import React, { useContext } from 'react'
// CONTEXT
import { DataContext } from '../context'

const Home = () => {
	const { deleteAllDb } = useContext(DataContext)

	return (
		<div>
			<h1>home</h1>
			<button onClick={() => deleteAllDb()}>clear all</button>
		</div>
	)
}

export default Home
