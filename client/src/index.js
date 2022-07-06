import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Highlight the navLink when scrolling
document.getElementsByTagName('body')[0].onscroll = function () {
  const contentIds = ["about", "values", "mission", "teamMembers", "jobs"];
  const navIds = ["navAbout", "navValues", "navMission", "navTeamMembers", "navJobs"];
  for (var i = navIds.length - 1; i >= 0; i--) {
    // get position of the content div compare to the top
    var pagePosition = document.getElementById(contentIds[i]).getBoundingClientRect().top;
    if (pagePosition < 100) {
      for (var j = navIds.length - 1; j >= 0; j--) {
        if (i === j)
          document.getElementById(navIds[j]).classList.add("active");
        else
          document.getElementById(navIds[j]).classList.remove("active");
      }
      return;
    }
  }
};