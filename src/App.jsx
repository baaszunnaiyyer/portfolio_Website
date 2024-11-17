import './App.css'
import { Routes,Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage.jsx'
import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'



function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/Project' element={<Project/>} />
    </Routes>
  )
}

export default App
