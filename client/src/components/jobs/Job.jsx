import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './job.css'

const Job = (props) => {

	// Handle show Application form as sidebar
	const [show, setShow] = useState(false);
	const handleClose = () => {
		setShow(false);
	}
	const handleShow = () => setShow(true);

	// Handle Application form input and submit
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [linkedInUrl, setUrl] = useState("");

	const idJob = props.jobId; // to pass with post request url

	// Reset form after each submission
	const resetForm = () => {
		setName('')
		setEmail('')
		setUrl('')
	}

	// Handle Submit when clicking Submit button on Modal
	const handleSubmit = () => {
		// 1. Validate form: all required fields and minimally validated
		// Select feedback fields
		const nameValidation = document.querySelector("#nameValidation");
		const emailValidation = document.querySelector("#emailValidation");
		const linkedInValidation = document.querySelector("#linkedInValidation");

		// Reset feedback fields after each submit
		let name_validated = true;
		let email_validated = true;
		let linkedIn_validated = true;

		nameValidation.innerHTML = '';
		emailValidation.innerHTML = '';
		linkedInValidation.innerHTML = '';

		if (name === '') {
			nameValidation.innerHTML = "<i>Please enter your name</i>";
			name_validated = false;
		}

		if (email === '') {
			emailValidation.innerHTML = "<i>Please enter your email</i>";
			email_validated = false;
		} else if (!email.includes("@")) {
			emailValidation.innerHTML = "<i>Please enter a valid email</i>";
			email_validated = false;
		}

		if (linkedInUrl === '') {
			linkedInValidation.innerHTML = "<i>Please enter your LinkedIn URL</i>";
			linkedIn_validated = false;

		} else if (!linkedInUrl.includes("www.linkedin.com/")) {
			linkedInValidation.innerHTML = "<i>Please enter a valid LinkedIn URL</i>";
			linkedIn_validated = false;
		}

		// 2. If form is already validated, send post request to server
		if (name_validated && email_validated && linkedIn_validated) {
			fetch(`/job/${idJob}`, {
				method: 'POST',
				body: JSON.stringify({ 'name': name, 'email': email, 'linkedInUrl': linkedInUrl }),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then(res => res.json())
				.then(data => {
					console.log(data);
					if (data) {
						alert(data.status);
					} else {
						alert("Sorry we cannot process your submission. Please try again later.");
					}
					resetForm();
					handleClose();
				})
		}
	}


	return (
		<>
			<Container fluid>
				<Row className="p-4 job-display">
					<Col xs={12} md={5} className="text-center">
						<h5  >
							{props.title}
						</h5>
					</Col>
					<Col xs={12} md={3} className="text-center">
						<h6 className="" >
							{props.department}
						</h6>
					</Col>
					<Col xs={12} md={2} className="text-center">
						<h6 className="" >
							{props.location}
						</h6>
					</Col>
					<Col xs={12} md={2} className="text-center">
						<Button variant="outline-warning" onClick={handleShow}>Apply</Button>{' '}

					</Col>
				</Row>
			</Container>

			<Modal
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={show}
				onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						<a className="text-center" href="{props.jobUrl}">
							{props.title}
						</a>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form id="candidateForm">
						<Form.Group className="mb-3" controlId="yourName">
							<Form.Label>Your Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter your name"
								value={name}
								onChange={(event) => setName(event.target.value)}
							/>
							<div class="validation" id="nameValidation"></div>

						</Form.Group>
						<Form.Group className="mb-3" controlId="yourEmail">
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
							<div class="validation" id="emailValidation"></div>
						</Form.Group>

						<Form.Group className="mb-3" controlId="linkedIn">
							<Form.Label>Your LinkedIn</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter LinkedIn url"
								value={linkedInUrl}
								onChange={(event) => setUrl(event.target.value)}
							/>
							<div class="validation" id="linkedInValidation"></div>
						</Form.Group>
					</Form >

				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button
						variant="outline-primary"
						onClick={() => {
							handleSubmit()
						}}>
						Submit
					</Button>{' '}
				</Modal.Footer>
			</Modal>
		</>
	)
}


export default Job