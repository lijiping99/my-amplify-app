import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
       <h1>Super Simple Marathon Ranking App</h1>
      <nav>
            <Link to="/">Home</Link><br/>
          
            <Link to="/register">Register Your Marathon Record</Link><br/>
          
            <Link to="/marathonsrankings">Marathons Rankings</Link><br/>
         
            <Link to="/contact">Contact</Link><br/>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;