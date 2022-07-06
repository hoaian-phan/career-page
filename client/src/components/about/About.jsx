import React from 'react'
import Figure from 'react-bootstrap/Figure'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CEOprofile from '../../assets/CEO-profile.jpg'
import './about.css'

const About = () => {
	return (
		<section id="about" className="pb-5">
			<Container className="contain-padding">
				<Row className="align-items-center">
					<Col lg={6} sm={12} className="p-5 text-center">
						<Figure>
							<Figure.Image
								alt="CEO-profile"
								src={CEOprofile}
								width="275"
								className="img-border fluid text-center"
							/>
							<Figure.Caption>
								<h5>Elaina Alvarado </h5>
								<h6>CEO, Founder, Red Circle</h6>
							</Figure.Caption>
						</Figure>
					</Col>
					<Col lg={6} sm={12} className="p-3 align-items-center">
						<h1 className="mid-text pb-5 text-center">We are just getting started</h1>
						<h4 className="pb-5 text-center">"Our product has the opportunity to really transform millions of lives around the planet.</h4>
						<h4 className="pb-5 text-center">And we are the team that can make it happen.
							You can be a part of the change, too." </h4>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default About