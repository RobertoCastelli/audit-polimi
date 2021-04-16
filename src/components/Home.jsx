import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// REACT ICONS
import { FcAddDatabase, FcSurvey, FcDeleteDatabase } from 'react-icons/fc'
// CONTEXT
import { DataContext } from '../context'

const Home = () => {
	const { deleteAllDb } = useContext(DataContext)

	return (
		<div className='home-wrapper'>
			<h3 className='home-title'>welcome!</h3>

			<button onClick={() => deleteAllDb()}>
				<FcDeleteDatabase size={20} />
				<div>
					<small>delete all database entries</small>
				</div>
			</button>
		</div>
	)
}

export default Home
