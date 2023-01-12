import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
       <h1>Super Simple Marathon Ranking App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register Your Marathon Record</Link>
          </li>
          <li>
            <Link to="/marathons">Marathons Rankings</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;