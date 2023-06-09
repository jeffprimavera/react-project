import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidenav from "./Header/sidenav";
import { Outlet } from "react-router-dom";
import './index.css';
import './_app.scss';
import ScrollToTop from "./components/ScrollToTop";

const App = () => {

  const [show, setShow] = useState(false)

  const toggleShow = () => setShow(prev => !prev)

  return (
    <>
      <ScrollToTop />
      <div className={`flex flex-col h-screen w-screen pl-72 overflow-x-hidden transition-all delay-200 hp__wrapper ${show ? null : 'space-toggle'} `}>
        <Header onClick={toggleShow} />
        <main className="container mx-auto flex flex-col px-10 pb-4 z-0 pt-28">
          <Outlet />
        </main>
        <Footer />
        <Sidenav show={show} />
      </div>
    </>
  )
}

export default App
