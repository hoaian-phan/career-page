import React from 'react'
import Home from './components/home/Home.jsx'
import Navigation from './components/nav/Navigation'
import About from './components/about/About'
import Values from './components/values/Values'
import Mission from './components/mission/Mission'
import TeamMembers from './components/teamMembers/TeamMembers'
import Jobs from './components/jobs/Jobs'
/* if time allowed, will add a Contact section */

const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Home />
      <About />
      <Values />
      <Mission />
      <TeamMembers />
      <Jobs />

    </React.Fragment>
  )
}

export default App