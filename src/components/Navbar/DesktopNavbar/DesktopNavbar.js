import { Navbar, Nav, Dropdown } from 'rsuite';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { IoNotificationsOutline } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';
import { RiBarChartLine } from 'react-icons/ri';

import './DesktopNavbar.css';

const DesktopNavbar = () => {
  return (
    <Navbar>
      <Nav className="active-menu active-menu-border">
        <Dropdown title="Questions">
          <Dropdown.Item>Company</Dropdown.Item>
          <Dropdown.Item>Team</Dropdown.Item>
          <Dropdown.Item>Contact</Dropdown.Item>
        </Dropdown>
      </Nav>

      <Nav className="active-menu">
        <Dropdown title="Invoices">
          <Dropdown.Item>Company</Dropdown.Item>
          <Dropdown.Item>Team</Dropdown.Item>
          <Dropdown.Item>Contact</Dropdown.Item>
        </Dropdown>
      </Nav>

      <Nav className="active-menu">
        <Dropdown title="Receipts">
          <Dropdown.Item>Company</Dropdown.Item>
          <Dropdown.Item>Team</Dropdown.Item>
          <Dropdown.Item>Contact</Dropdown.Item>
        </Dropdown>
      </Nav>

      <Nav className="active-menu">
        <Dropdown title="Customers">
          <Dropdown.Item>Company</Dropdown.Item>
          <Dropdown.Item>Team</Dropdown.Item>
          <Dropdown.Item>Contact</Dropdown.Item>
        </Dropdown>
      </Nav>

      <Nav className="active-menu">
        <Dropdown title="Products">
          <Dropdown.Item>Company</Dropdown.Item>
          <Dropdown.Item>Team</Dropdown.Item>
          <Dropdown.Item>Contact</Dropdown.Item>
        </Dropdown>
      </Nav>

      <Nav className="active-menu">
        <Nav.Item>Reports</Nav.Item>
      </Nav>

      <Nav pullRight>
        <Nav.Item>
          <AiOutlineSearch size={25} />
        </Nav.Item>
        <Nav.Item>
          <RiBarChartLine size={25} />
        </Nav.Item>
        <Nav.Item>
          <IoNotificationsOutline size={25} />
        </Nav.Item>
        <Nav.Item>
          <HiOutlineMail size={25} />
        </Nav.Item>
        <Nav.Item>
          <BsPerson size={25} />
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default DesktopNavbar;
