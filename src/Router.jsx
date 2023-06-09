import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home' 
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Sports from './pages/Sports'
import Slots from './pages/Slots'
import Originals from './pages/BetOrignals'
import LiveCasino from './pages/LiveCasino'
import AllGamesPage from './pages/AllGames/allgames'
import CrashGamePage from './pages/CrashGame'
import App from './App'
import ScrollToTop from './components/ScrollToTop'

const Router = ( ) => {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="sports" element={<Sports />} />
          <Route path="slots" element={<Slots />}  />
          <Route path="originals" element={<Originals />}  />
          <Route path="livecasino" element={<LiveCasino />}  />
          <Route path="allgames" element={<AllGamesPage />}  />
          <Route path="crash" element={<CrashGamePage />}  />
        </Route>
      </Routes>
    </>
  )
}

export default Router
