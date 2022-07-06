# Career Page

This is a career page I built for an arbitrary company as a single page app using React framework.

When loading the page, it calls internal APIs to display team members and open positions.

After candidates submit their applications, post requests are sent to the server and update the database.


## Technologies Used

- Back-end: Python Flask because of its lightweight and ease of use
- Front-end: Single Page app with React, Javascript, HTML, React Bootstrap, AJAX, JSON
- APIs: internal APIs for Team members and Jobs


## Set Up

To run this project, install it locally:

- Clone this repository
```
$ git clone https://github.com/hoaian-phan/qvin_career_page.git
```

- Go into the repository
```
$ cd qvin_career_page
```
1. First, you need to start the server: Go into the flask-server repository
```
$ cd flask-server
```

- Create a virtual environment on MacOS
```
$ virtualenv env
```
On Windows OS
``` 
$ virtualenv env --always-copy
```

- Activate virtual env
``` 
$ source env/bin/activate
```

- Install dependencies
```
$ pip3 install -r requirements.txt
```

- Start the server
```
$ python3 server.py
```

2. Client: Start a new terminal and go into the client repository
```
$ cd qvin_career_page/client
```

- Install dependencies:
```
$ npm install
```

- Run the app
```
$ npm start
```

You can now navigate to 'localhost:3000/' to access this project.