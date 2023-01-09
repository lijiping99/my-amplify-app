import { Outlet, Link } from "react-router-dom";
import Amplify, { API } from 'aws-amplify'

const Layout = () => {
  const handleLinkClick = event => {
    console.log('Link clicked');
    API.get("api4ae2a13d","/marathons").then(response => {
      console.log(response)
    });
    // 👇️ refers to the link element
    //console.log(event.currentTarget);
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link onClick={handleLinkClick} to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
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