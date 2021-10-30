import {
  AiOutlineSearch,
  AiOutlineInsertRowLeft,
  AiOutlineBars,
  AiOutlineAppstore,
} from 'react-icons/ai';
import { IoIosStarOutline } from 'react-icons/io';
import { BiFilterAlt } from 'react-icons/bi';
import { BsFullscreen } from 'react-icons/bs';
import { FiColumns } from 'react-icons/fi';
import { Button, Dropdown, Input, InputGroup } from 'rsuite';

import './SearchFilters.css';

const SearchFilters = () => {
  return (
    <div className="filters-container">
      <div className="filters-search">
        <div className="input-search-container">
          <InputGroup inside>
            <InputGroup.Button>
              <AiOutlineSearch size={25} color="#D7D8DC" />
            </InputGroup.Button>
            <Input placeholder="Search" className="input-search" />
          </InputGroup>
        </div>
        <div>
          <Button className="filters-btn">
            <span className="btn-icon-container">
              <span className="btn-icon-text">Favorites</span>
              <IoIosStarOutline className="btn-icon" size={18} />
            </span>
          </Button>

          <Dropdown title="Status" className="filters-dropdown">
            <Dropdown.Item>New File</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>About</Dropdown.Item>
          </Dropdown>

          <Dropdown title="Status" className="filters-dropdown">
            <Dropdown.Item>New File</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>About</Dropdown.Item>
          </Dropdown>

          <Dropdown title="Status" className="filters-dropdown">
            <Dropdown.Item>New File</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>About</Dropdown.Item>
          </Dropdown>

          <Button className="filters-btn">
            <span className="btn-icon-container">
              <BiFilterAlt className="btn-icon btn-icon-text" size={18} />
              <span>More Filters</span>
            </span>
          </Button>
        </div>
      </div>
      {/*  */}
      <div>
        <Button className="filters-btn">
          <span className="btn-icon-container">
            <AiOutlineInsertRowLeft
              className="btn-icon btn-icon-text"
              size={18}
            />
            <span>Rows</span>
          </span>
        </Button>
        <Button className="filters-btn">
          <span className="btn-icon-container">
            <FiColumns className="btn-icon btn-icon-text" size={18} />
            <span>Columns</span>
          </span>
        </Button>

        <Button className="filters-btn filters-btn-bg">
          <AiOutlineBars color="#E69F89" />
        </Button>

        <Button className="filters-btn">
          <AiOutlineAppstore />
        </Button>

        <Button className="filters-btn">
          <BsFullscreen />
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;
