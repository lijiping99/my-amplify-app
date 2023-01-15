import { Outlet, Link } from "react-router-dom";
import Search from './Search'

const Layout = () => {
  return (
    <>
       <h1>we love marathon...<br/> share your time, share the fun</h1>
      <nav>
           <Link to="/">Home</Link>&emsp;<Link to="/contact">Contact</Link>&emsp;<Link to="/about">About</Link><br/><br/>
            <Link to="/register">Register Your Marathon Record</Link><br/><br/>
            <Link to="/marathons/gender">All Rankings</Link>&emsp;<Link to="/marathons/gender/F">Female Rankings</Link>&emsp;<Link to="/marathons/gender/M">Male Rankings</Link><br/><br/>
            <Link to="/marathons/age/30-">30- Rankings</Link>&emsp;<Link to="/marathons/age/30-50">30-50 Rankings</Link>&emsp;<Link to="/marathons/age/50+">50+ Rankings</Link><br/><br/>
            <Search /><br/><br/>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;