import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiBarChartLine } from 'react-icons/ri';
import { IoNotificationsOutline } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';

import './BottomNav.css';

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="container">
        <div className="bottom-nav-container">
          <div className="bottom-nav-toggle">
            <FaBars size={25} />
          </div>
          <div className="bottom-nav-icons">
            <AiOutlineSearch size={25} />
            <RiBarChartLine size={25} />
            <IoNotificationsOutline size={25} />
            <HiOutlineMail size={25} />
            <BsPerson size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
