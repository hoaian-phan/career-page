import React from 'react'
import './home.css'
import smile from '../../assets/banner-smile.jpg'
import smile4 from '../../assets/banner-smile-4.jpg'
import smile3 from '../../assets/banner-smile-3.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const Home = () => {
	return (
		<section id="#" className="light-bg">
			<Container className="contain-padding">
				<Row className="align-items-center">
					<Col lg={6} sm={12} className="p-5">
						<h1 className="lg-text pb-5">Mission-driven Health monitor</h1>
						<h4 className="pb-5">Join us as we work to transform the health of women and their families by providing the most trusted health monitoring services on the planet. </h4>
						<iframe width="75%" src="https://www.youtube.com/embed/8jGugq6XVcg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</Col>
					<Col className="p-3">
						<Row className="p-2">
							<Col className="text-center">
								<img
									alt="woman_smile"
									src={smile}
									width="70%"
									className="img-border fluid"
								></img>
							</Col>
							<Col className="text-center">
								<img
									alt="woman_smile"
									src={smile3}
									width="70%"
									className="img-border fluid "
								></img>
							</Col>
						</Row>
						<Row className="p-2">
							<Col className="text-center">
								<img
									alt="woman_smile"
									src={smile4}
									width="50%"
									className="img-border fluid"
								></img>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Home