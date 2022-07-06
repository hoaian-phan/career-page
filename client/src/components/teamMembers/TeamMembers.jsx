import React, { useState, useEffect } from 'react'
import Member from './Member'
import './teamMember.css'


const TeamMembers = () => {

	const [members, setMembers] = useState([]);

	useEffect(() => {
		fetch("/team_members.json")
			.then(res => res.json())
			.then(data => {
				if (data.success === true) {
					setMembers(data.members);
					console.log("Display members");
				} else {
					setMembers([]);
				}
			})
	}, [])

	const teamMembers = [];

	for (const member of members) {
		teamMembers.push(
			<Member
				key={member.id}
				name={member.name}
				title={member.title}
				imgUrl={member.imgUrl}
			/>
		);
	}

	// Handle APIs call success or unsuccess: If successfully loaded the data, show the data;
	// but if having problems, handle gracefully by hiding the whole section from visitors
	const handleMembersStatus = () => {
		console.log("members", members)
		if (members.length !== 0) {
			return (
				<section id="teamMembers" className="py-5 light-bg">
					<h1 className="text-center contain-padding md-text p-5">Our Amazing Team</h1>

					<div className="grid">{teamMembers}</div>

				</section>
			)
		}
	}

	return (
		<div>{handleMembersStatus()}</div>
	)
}

export default TeamMembers