import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

import BoxIcon from '../BoxIcon/BoxIcon';

import './MobileNav.css';

const MobileNav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          <div className="navbar-toggle-container">
            <span className="navbar-toggle-icon">
              <FaBars size={20} />
            </span>
            <BoxIcon boxText="Price requests" />
          </div>
          <div className="navbar-search-icon">
            <AiOutlineSearch size={20} color="#7D7D7F" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
