
import { useState } from 'react';
import StoreIcon from '@material-ui/icons//Store';
import Menu from '@material-ui/icons//Menu';
import Close from '@material-ui/icons//Close';
import Brightness7 from '@material-ui/icons//Brightness7';
import Brightness2 from '@material-ui/icons//Brightness2';
import { Link } from "react-router-dom";
import { Container } from "./Navbar.styles";

function Navbar() {

  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => setDarkMode(!darkMode);

  const [click, setClick] = useState(false);
  const navToggle = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  window.addEventListener('resize', closeMobileMenu);
  
  return (
      <Container>
          <li className='menu'>
            {click === false ? 
              (<Menu onClick={navToggle} />) : 
              (<Close onClick={navToggle} />)
            }
          </li>
          <nav className={click ? 'navActive' : 'nav'}>
            <li className='logo'><StoreIcon /></li>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/store'>Store</Link></li>
              <li><Link to='/login'>Login</Link></li>
            </ul>
            <div className="other">
              <li><input type='text' placeholder="Search"/></li>
              <li className='darkMode'>{darkMode === false ? 
                (<Brightness2 onClick={changeMode} />) : 
                (<Brightness7 onClick={changeMode} />)}
              </li>
            </div>
            
          </nav>
      </Container>
  )
}

export default Navbar;