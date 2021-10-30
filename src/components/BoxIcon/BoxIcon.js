import { FcMms } from 'react-icons/fc';

import './BoxIcon.css';

const BoxIcon = ({ boxText, className, size = 20 }) => {
  return (
    <div className={`${'box-icons-container'} ${className}`}>
      <span className="box-icons">
        <FcMms size={size} />
      </span>
      {boxText && <span className="box-icons-text">{boxText}</span>}
    </div>
  );
};

export default BoxIcon;
