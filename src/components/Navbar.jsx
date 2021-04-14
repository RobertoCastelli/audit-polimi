import React from 'react'
import icona from '../images/icona.png'
import { Link, NavLink } from 'react-router-dom'
import { FcAddDatabase, FcReadingEbook, FcViewDetails } from 'react-icons/fc'

const Navbar = () => {
	return (
		<>
			<nav className='navbar-wrapper'>
				<div className='navbar-icona'>
					<Link to='/'>
						<img className='icona' src={icona} alt='icona' />
					</Link>
				</div>
				<ul className='navbar-ul'>
					<li>
						<NavLink
							to='/database'
							activeClassName='navbar-li-active'
							className='navbar-li'>
							<div className='navbar-li-icon'>
								<FcAddDatabase size={20} />
							</div>
							<div className='navbar-li-label'>add supplier</div>
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/audit'
							activeClassName='navbar-li-active'
							className='navbar-li'>
							<div className='navbar-li-icon'>
								<FcViewDetails size={20} />
							</div>
							<div className='navbar-li-label'>add audit</div>
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/auth'
							activeClassName='navbar-li-active'
							className='navbar-li'>
							<div className='navbar-li-icon'>
								<FcReadingEbook size={20} />
							</div>
							<div className='navbar-li-label'>auth</div>
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navbar
