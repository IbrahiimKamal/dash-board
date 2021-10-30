import { AiOutlineSearch } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';
import { Input, InputGroup } from 'rsuite';

import './MobileSearchFilter.css';

const MobileSearchFilter = () => {
  return (
    <div className="filter-search-container">
      <div>
        <InputGroup inside>
          <InputGroup.Button>
            <AiOutlineSearch size={25} color="#D7D8DC" />
          </InputGroup.Button>
          <Input placeholder="Search" className="input-search" />
        </InputGroup>
      </div>
      <div className="filters-icon-container">
        <BiFilterAlt size={20} />
        <span>Filters</span>
      </div>
    </div>
  );
};

export default MobileSearchFilter;
