import { AiOutlinePlus } from 'react-icons/ai';

import DesktopNavbar from '../../components/Navbar/DesktopNavbar/DesktopNavbar';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import SearchFilters from '../../components/SearchFilters/SearchFilters';
import DashTables from '../../components/DashTables/DashTables';
import Paginations from '../../components/Paginations/Paginations';
import MobileNav from '../../components/MobileNav/MobileNav';
import Box from '../../components/Box/Box';
import MobileSearchFilter from '../../components/MobileSearchFilter/MobileSearchFilter';
import BottomNav from '../../components/BottomNav/BottomNav';
import Card from '../../components/Card/Card';
import Sidebar from '../../components/Sidebar/Sidebar';

import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <div className="show-hide-mobile">
        <MobileNav />
        <div className="container">
          <div className="crumb-box-container">
            <Box icon={<AiOutlinePlus />} text="request price" />
            <Box text="import" className="box-item mx-3" />
          </div>

          <div className="mt-3">
            <MobileSearchFilter />
          </div>

          <div
            style={{
              minHeight: '100vh',
            }}
          >
            <div className="my-3">
              <Card />
            </div>
            <div>
              <Card />
            </div>
          </div>
        </div>
        <BottomNav />
      </div>

      <div className="desktop-hide-show">
        <div>
          <Sidebar />
        </div>

        <div className="px-3">
          <div className="mb-2">
            <DesktopNavbar />
          </div>
          <div className="mb-4">
            <BreadCrumb />
          </div>
          <div className="mb-3">
            <SearchFilters />
          </div>
          <DashTables />
          <div>
            <Paginations />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
