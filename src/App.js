import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import Home from "./components/Home"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import WorkExperience from "./components/WorkExperience"

import './App.css';

const App = () =>{

  return(
    <BrowserRouter>
      <Routes>
          <Route to="/" element={<Home />} />
          <Route to="/skills" element={<Skills />} />
          <Route to="/projects" element={<Projects />} />
          <Route to="/experience" element={<WorkExperience/>} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
