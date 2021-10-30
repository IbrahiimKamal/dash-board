import { FaBars } from 'react-icons/fa';
import { GrHomeRounded } from 'react-icons/gr';
import { IoSettingsOutline } from 'react-icons/io5';

import BoxIcon from '../BoxIcon/BoxIcon';

import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icons">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <FaBars size={25} />
          </li>
          <li className="sidebar-item">
            <GrHomeRounded size={25} />
          </li>

          <li className="sidebar-icon-item sidebar-active-item">
            <BoxIcon size={25} className="sidebar-box-icon" />
          </li>

          <li className="sidebar-icon-item">
            <BoxIcon size={25} />
          </li>

          <li className="sidebar-icon-item">
            <BoxIcon size={25} />
          </li>

          <li className="sidebar-icon-item">
            <BoxIcon size={25} />
          </li>
        </ul>
      </div>

      <div className="sidebar-settings">
        <IoSettingsOutline size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
