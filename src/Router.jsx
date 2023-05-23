import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home' 
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Sports from './pages/Sports'
import App from './App'

const Router = ( ) => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route
          path="about"
          element={<About />}
        />
        <Route
          path="contact"
          element={<Contact />}
        />
        <Route
          path="projects"
          element={<Projects />}
        />
        <Route
          path="sports"
          element={<Sports />}
        />
      </Route>
    </Routes>
  )
}

export default Router
