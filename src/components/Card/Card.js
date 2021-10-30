import { BsDot } from 'react-icons/bs';

import './Card.css';

const Card = () => {
  return (
    <div className="card-item-container">
      <div className="card-item-heading">
        <p className="card-item-title">Q054546</p>
        <p className="card-item-price">SAR 500</p>
      </div>
      <div className="card-item-date">
        <p className="card-item-date-text">
          28/10/2012 | expires at 28/10/2012
        </p>
      </div>
      <div className="card-item-person">
        <span className="card-item-id">KP</span>
        <span className="card-item-name">Mona Kane</span>
      </div>
      <div className="card-item-footer">
        <span className="card-item-footer-id">
          <span className="card-item-id-dot">
            <BsDot
              className="card-icon-dot"
              color="#0777CE"
              style={{ marginTop: '5px' }}
            />
          </span>
          <span className="card-item-id-text">Quotation</span>
        </span>
        <span className="card-item-id card-item-id2">MK</span>
      </div>
    </div>
  );
};

export default Card;
