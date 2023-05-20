import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import './index.css'

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="container mx-auto px-6 pb-4">
        <Outlet />
      </main>
      <Footer /> 
    </div>
  )
}

export default App
