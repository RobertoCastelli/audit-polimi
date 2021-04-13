import React from 'react'
import { Link } from 'react-router-dom'

const AuditForm = () => {
	return (
		<div>
			<h1> AuditForm</h1>
			<Link to=' audit-main-page'>
				<button type='submit'>submit</button>
			</Link>
		</div>
	)
}

export default AuditForm
