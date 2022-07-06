import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import customerCentric from '../../assets/customer-centric.jpg'
import autonomyTeam from '../../assets/autonomy-team.jpg'
import healthcare from '../../assets/healthcare.jpg'
import './value.css'

const Values = () => {
	return (
		<section id="values" className="p-5 cream-bg">
			<h1 className="text-center contain-padding md-text"> Our Values</h1>
			<Container className="p-5">
				<Row>
					<Col lg={4} md={12} className="p-3 text-center">
						<article>
							<img
								alt="customer"
								src={customerCentric}
								width="75%"
								className="img-border fluid align-items-center pb-4"
							></img>
							<h3 className="pb-2 px-3 text-center"> Customer-centric products</h3>
							<p className="pb-2 px-3 text-center">Re-imagine the world of feminine products and serve the unique customer needs of
								monitoring their health daily.
							</p>
						</article>
					</Col>
					<Col lg={4} md={12} className="p-3 text-center">
						<article>
							<img
								alt="team"
								src={autonomyTeam}
								width="75%"
								className="img-border fluid align-items-center pb-4"
							></img>
							<h3 className="pb-2 px-3 text-center"> Via autonomous teams</h3>
							<p className="pb-2 px-3 text-center">Work on small, high velocity and autonomous teams tackling challenging problems
								in areas like Products, Supply Chain, Sales, Payments, Customer Experience and more.
							</p>
						</article>
					</Col>
					<Col lg={4} md={12} className="p-3 text-center">
						<article>
							<img
								alt="healthcare"
								src={healthcare}
								width="75%"
								className="img-border fluid align-items-center pb-4"
							></img>
							<h3 className="pb-2 px-3 text-center"> Global scale and impact</h3>
							<p className="pb-2 px-3 text-center">Build systems and products for high availability, scale, and resilience given our global reach
								and the critical impact of healthcare services on our customers’ lives.
							</p>
						</article>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Values