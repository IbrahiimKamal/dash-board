import { useState } from 'react';
import { Pagination } from 'rsuite';

import './Paginations.css';

const Paginations = () => {
  const [activePage, setActivePage] = useState(5);
  return (
    <div className="paginations">
      <Pagination
        prev="< Prev"
        next="Next >"
        size="md"
        total={100}
        limit={10}
        activePage={activePage}
        onChangePage={setActivePage}
      />
    </div>
  );
};

export default Paginations;
