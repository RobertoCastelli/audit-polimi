import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// REACT ICONS
import { FcAddDatabase, FcSurvey, FcDeleteDatabase } from 'react-icons/fc'
// CONTEXT
import { DataContext } from '../context'

const Home = () => {
	const { deleteAllDb, resetAuditPage } = useContext(DataContext)

	return (
		<div className='home-wrapper'>
			<h3 className='home-title'>welcome!</h3>
			<Link to='/database'>
				<button>
					<FcAddDatabase size={20} />
					<div>
						<small>add a new supplier</small>
					</div>
				</button>
			</Link>
			<Link to='/audit'>
				<button onClick={() => resetAuditPage()}>
					<FcSurvey size={20} />
					<div>
						<small>generate an audit file</small>
					</div>
				</button>
			</Link>
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
