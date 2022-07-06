import React, { useState, useEffect } from 'react'
import Job from './Job'


const Jobs = () => {

	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		fetch("/jobs.json")
			.then(res => res.json())
			.then(data => {
				if (data.success === true) {
					setJobs(data.jobs);
					console.log("Display jobs");
				} else {
					setJobs([]);
				}
			})
	}, [])

	const openJobs = [];

	for (const job of jobs) {
		openJobs.push(
			<Job
				key={job.jobId}
				title={job.title}
				url={job.url}
				jobId={job.jobId}
				location={job.location}
				department={job.department}
			/>
		);
	}
	// Handle APIs call success or unsuccess: If successfully loaded the data, show the data;
	// but if having problems, handle gracefully by hiding the whole section from visitors
	const handleJobsStatus = () => {
		if (jobs.length !== 0) {
			return (
				<div>{openJobs}</div>
			)
		} else {
			return (
				<p> Please check back later for job opportunities</p>
			)
		}
	}


	return (
		<section id="jobs" className="p-5 lightest-bg">
			<h1 className="lg-text pb-5 text-center">Open Positions</h1>
			<div>{handleJobsStatus()}</div>
		</section>
	)
}

export default Jobs