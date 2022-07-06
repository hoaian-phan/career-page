from flask import Flask, request, jsonify

MEMBER_DATA = [
    {
        "name": "Elaina Alvarado",
        "title": "CEO, Founder",
        "imgUrl": "/static/img/CEO-profile.jpg",
        "id": 1,
    },
    {
        "name": "Jadiel Miles",
        "title": "CTO",
        "imgUrl": "/static/img/team1.jpg",
        "id": 2,
    },
    {
        "name": "Ava Hatfield",
        "title": "CFO",
        "imgUrl": "/static/img/team2.jpg",
        "id": 3,
    },
    {
        "name": "Kiana Mueller",
        "title": "COO",
        "imgUrl": "/static/img/team3.jpg",
        "id": 4,
    },
    {
        "name": "Lamar Hamilton",
        "title": "Director of Marketing",
        "imgUrl": "/static/img/team4.jpg",
        "id": 5,
    },
    {
        "name": "Daisy Hernandez",
        "title": "Director of People",
        "imgUrl": "/static/img/team5.jpg",
        "id": 6,
    },
    {
        "name": "Martha Perez",
        "title": "Product Manager",
        "imgUrl": "/static/img/team6.jpg",
        "id": 7,
    },
    {
        "name": "Cherish Nixon",
        "title": "Product Design",
        "imgUrl": "/static/img/team7.jpg",
        "id": 8,
    },
    {
        "name": "Tobias Klein",
        "title": "Software Engineer",
        "imgUrl": "/static/img/team8.jpg",
        "id": 9,
    },
    {
        "name": "Madeleine Buckley",
        "title": "Chief Accountant",
        "imgUrl": "/static/img/team9.jpg",
        "id": 10,
    },
    {
        "name": "Irvin Henry",
        "title": "Director of R&D",
        "imgUrl": "/static/img/team10.jpg",
        "id": 11,
    },
    {
        "name": "Abdullah Mercado",
        "title": "Customer Specialist",
        "imgUrl": "/static/img/team11.jpg",
        "id": 12,
    },
    {
        "name": "Alivia Lester",
        "title": "Engineering Lead",
        "imgUrl": "/static/img/team12.jpg",
        "id": 13,
    },
    {
        "name": "Quinten Guerrero",
        "title": "R&D Lead",
        "imgUrl": "/static/img/team13.jpg",
        "id": 14,
    },
    {
        "name": "Ethan Valdez",
        "title": "Recruiter",
        "imgUrl": "/static/img/team14.jpg",
        "id": 15,
    },
    
]

LOCATION = "Remote"

JOBS = [
    {
        "title": "Software Engineer",
        "url": "/job_url/1",
        "location": LOCATION,
        "department": "Engineering",
        "jobId": 1,
    },
    {
        "title": "Supply Chain Manager",
        "url": "/job_url/2",
        "location": LOCATION,
        "department": "Production",
        "jobId": 2,
    },
    {
        "title": "R&D Manager",
        "url": "/job_url/3",
        "location": LOCATION,
        "department": "R&D",
        "jobId": 3,
    },
    {
        "title": "Web Developer",
        "url": "/job_url/4",
        "location": LOCATION,
        "department": "Engineering",
        "jobId": 4,
    },
    {
        "title": "Data Analyst",
        "url": "/job_url/5",
        "location": LOCATION,
        "department": "Engineering",
        "jobId": 5,
    },
]

# This is a dictionary of job applications, with the key being jobId, the value being a list of dictionaries
# where each element is an application (a dictionary with name, email, linkedInUrl)
# Here I initialize a dictionary with jobId as keys and an empty list as values
JOB_APPLICATIONS = {}
for job in JOBS:
    open_job_id = job["jobId"]
    JOB_APPLICATIONS[open_job_id] = []
print(JOB_APPLICATIONS)




app = Flask(__name__)

# Team members API route
@app.route("/team_members.json")
def members():
    """ Return a JSON list of team members """

    return {"success": True, "members": MEMBER_DATA}


# Get jobs API route
@app.route("/jobs.json")
def jobs():
    """ Return a JSON list of open jobs """

    return {"success": True, "jobs": JOBS}


# Post job application API route
@app.route("/job/<id>", methods = ["POST"])
def apply(id):
    """ Save job applications to our database"""

    # Get inputs from the form
    name = request.get_json().get("name")
    email = request.get_json().get("email")
    linkedInUrl = request.get_json().get("linkedInUrl")
    print("jobId", id, type(id))

    # If the application is missing required fields, return 400
    if not name or not email or not linkedInUrl:
        return jsonify({"sucess": "missing", "status": "Please fill in all required fields."})

    # Type convert
    id = int(id)
    # Check if this email address already applies for this job
    if id in JOB_APPLICATIONS:
        print("applications for jobId ", id, JOB_APPLICATIONS[id])
        for application in JOB_APPLICATIONS[id]:
            print("existing application", application)
            if application["email"] == email:
                return jsonify({"success": "applied", "status": "You already applied for this job"})
        
    # In reality, I'll save this application to my database, but for now, I only save it to a list of applications
    JOB_APPLICATIONS[id].append({ "name": name, "email": email, "linkedInUrl": linkedInUrl })
    print("All applications", JOB_APPLICATIONS)
    return jsonify({"success": True, "status": "Successfully submitted your application"})



if __name__ == "__main__":
    app.run(debug=True)