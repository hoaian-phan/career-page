import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../assets/Red Circle-logos/RedCircle-logos_transparent.jpg'


const Navigation = () => {
	return (
		<Container>
			<Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#" bg="warning">
						<img
							alt="Red-Circle-logo"
							src={logo}
							width="50"
							height="50"
							className="d-inline-block align-top"
						/>{' '}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<Nav.Link id="navAbout" href="#about">Who We Are</Nav.Link>
							<Nav.Link id="navValues" href="#values">Our Values</Nav.Link>
							<Nav.Link id="navMission" href="#mission">Mission</Nav.Link>
							<Nav.Link id="navTeamMembers" href="#teamMembers">Team Members</Nav.Link>
							<Nav.Link id="navJobs" href="#jobs">Jobs</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	)
}

export default Navigation