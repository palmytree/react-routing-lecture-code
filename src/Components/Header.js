import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

export default props => (
	<Navbar bg='dark' variant='dark'>
		<Navbar.Brand>React Routing</Navbar.Brand>
		<Nav>
			<Nav.Link>
				<Link to='/'>Home</Link>
			</Nav.Link>
			<Nav.Link>
				<Link to='/about'>About</Link>
			</Nav.Link>
			<Nav.Link>
				<Link to='/contact'>Contact</Link>
			</Nav.Link>
		</Nav>
	</Navbar>
)
