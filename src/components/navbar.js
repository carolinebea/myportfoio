import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
   <div>

    <ul>
    <li><Link to = '/'>Home</Link></li>
    <li><Link to = '/Portfolio'>Portfolio</Link></li>
    <li><Link to = '/Resume'>Resume</Link></li>
    <li><Link to = '/Contact'>Contact</Link></li>
    </ul>

   </div>
  );
};

export default NavBar;
