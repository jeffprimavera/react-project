import {Link} from 'react-router-dom'

const Sidenav = () => {
  return (
    <div className="navbar bg-base-100">
      <aside className="flex-1">
        Thiis iS Side Nav
      </aside>
      {/* <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li><Link to="projects">Projects</Link></li>
        </ul>
      </div> */}
    </div>
  )
}

export default Sidenav
