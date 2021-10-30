import DesktopNavbar from '../../components/Navbar/DesktopNavbar/DesktopNavbar';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import SearchFilters from '../../components/SearchFilters/SearchFilters';
import DashTables from '../../components/DashTables/DashTables';
import Paginations from '../../components/Paginations/Paginations';

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
