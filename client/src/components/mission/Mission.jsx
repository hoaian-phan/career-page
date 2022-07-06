import React from 'react'
import Container from 'react-bootstrap/Container'
import mission from '../../assets/mix-mission.jpg'


const Mission = () => {
	return (
		<section id="mission" className="pb-5 contain-padding">
			<Container className="contain-padding">
				<h1 className="pb-5 text-center md-text">We are dedicated to diversity, health, and professional growth of our employees. </h1>
				<div className="text-center">
					<img
						alt="team-growth"
						src={mission}
						width="40%"
						className="img-border fluid"
					></img>
				</div>
				<h4 className="p-5 text-center">When our employees have access to proper tools and resources,
					they change the future for themselves and their loved ones.
					They also transform the local economies where they live and work,
					as well as the countless customers whom their products serve.
				</h4>

			</Container >
		</section >
	)
}

export default Mission