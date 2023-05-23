import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidenav from "./Header/sidenav";
import { Outlet } from "react-router-dom";
import './index.css'

const App = () => {

  const [show, setShow] = useState(false)

  const toggleShow = () => setShow(prev => !prev)

  return (
    <div className={`flex flex-col h-screen w-screen pl-72 duration-300 ${show ? null : 'space-toggle'} `}>
      <Header onClick={toggleShow} />
      <main className="container mx-auto flex flex-col overflow-hidden min-h-full px-10 pb-4 z-0 pt-28">
        <Outlet />
        <Footer /> 
      </main>
      <Sidenav show={show} />
    </div>
  )
}

export default App
