import './styles/styles.css'
import { Route, Routes } from 'react-router-dom'
import Project1 from './Projects/projects1/Project1'
import Project2 from './Projects/projects2/Project2'
import Nav from './Nav'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Project1 />} />
        <Route path="/project-2" element={<Project2 />} />
      </Routes>
    </div>
  )
}

export default App
