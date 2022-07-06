import React from 'react'
import Card from 'react-bootstrap/Card'
import './teamMember.css'

const Member = (props) => {
	return (
		<Card className="card">
			<img className="image"
				src={props.imgUrl}
				alt="profile" />
			<Card.Body>
				<Card.Title className="title text-center">
					{props.name} <br />
					<small>{props.title}</small>
				</Card.Title>
				<Card.Text className="text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default Member