import { useState } from 'react';
import { Cell, Column, HeaderCell, Table } from 'rsuite-table';
import { AiOutlineStar } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';

import fakeData from './tableData.json';

import './DashTables.css';

const data = fakeData.filter((v, i) => i < 8);

const DashTables = () => {
  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const [loading, setLoading] = useState(false);

  const getData = () => {
    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === 'string') {
          x = x.charCodeAt();
        }
        if (typeof y === 'string') {
          y = y.charCodeAt();
        }
        if (sortType === 'asc') {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return data;
  };

  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  const cellID = 'Q054546';
  const customerName = 'Mona Kane';

  return (
    <div>
      <Table
        height={420}
        data={getData()}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        loading={loading}
        onRowClick={(data) => {
          console.log(data);
        }}
      >
        <Column width={170} fixed sortable>
          <HeaderCell className="cell-title">ID Number</HeaderCell>

          <Cell
            children={
              <span className="cell-number-children">
                <span className="cell-number-icon">
                  <AiOutlineStar color="#bfbfc1" size={20} />
                </span>
                <span className="cell-number">Q054546</span>
              </span>
            }
            dataKey="id"
            className="id-cell"
          />
        </Column>

        <Column width={170} fixed sortable>
          <HeaderCell className="cell-title">Refrence Number</HeaderCell>
          <Cell
            dataKey="refrenceNumber"
            children={<span className="bold-number">54546654</span>}
          />
        </Column>

        <Column width={170} sortable>
          <HeaderCell className="cell-title">Creation Date</HeaderCell>
          <Cell
            dataKey="creationDate"
            children={<span className="bold-number">28/10/2012</span>}
          />
        </Column>

        <Column width={170} sortable>
          <HeaderCell className="cell-title">Expiry Date</HeaderCell>
          <Cell
            dataKey="expiryDate"
            children={<span className="bold-number">12/06/2020</span>}
          />
        </Column>

        <Column width={170} sortable>
          <HeaderCell className="cell-title">Customer</HeaderCell>
          <Cell
            dataKey="customer"
            children={
              <span className="customer">
                <span className="customer-id">KP</span>
                <span className="customer-name">{customerName}</span>
              </span>
            }
          />
        </Column>

        <Column width={180} sortable>
          <HeaderCell className="cell-title">Status</HeaderCell>
          <Cell
            dataKey="status"
            children={
              <p className="dots-icon">
                <BsDot color="#E74C54" className="dots-icons" />
                <span className="dots-text">Expired</span>
              </p>
            }
          />
        </Column>

        <Column width={170}>
          <HeaderCell className="cell-title">Total Amount</HeaderCell>
          <Cell
            dataKey="totalAmount"
            children={
              <span style={{ color: '#8D8D8D' }}>
                <span style={{ marginRight: '5px', display: 'inline-block' }}>
                  SAR
                </span>
                <span>15000</span>
              </span>
            }
          />
        </Column>

        <Column width={120}>
          <HeaderCell className="cell-title">Sales Person</HeaderCell>

          <Cell
            children={
              <p className="avatar">
                <img
                  src="https://lh3.googleusercontent.com/proxy/RyagdYOdvGZdYhWzWA5Z-hMZuw6yWTwO-I70AtY-SbtEwgxYd8uhEk-kMHBXFV3Ufd8UwxMyFKrdtM3pLQ"
                  alt=""
                />
                <span>Ramy</span>
              </p>
            }
            dataKey="salesPerson"
          />
        </Column>
      </Table>
    </div>
  );
};

export default DashTables;
