import Header from "./Header";
import Footer from "./Footer";
import Sidenav from "./Header/sidenav";
import { Outlet } from "react-router-dom";
import './index.css'

const App = () => {
  return (
    <div className="flex flex-col h-screen w-screen pl-72">
      <Header />
      <main className="flex flex-col overflow-hidden min-h-full px-10 pb-4 z-0 pt-28">
        <Outlet />
      </main>
      <Sidenav />
      <Footer /> 
    </div>
  )
}

export default App
