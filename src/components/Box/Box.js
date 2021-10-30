import './Box.css';

const Box = ({ icon, text, className }) => {
  return (
    <div className={['box', className].join(' ')}>
      {icon && <span className="box-icon">{icon}</span>}
      <p className="box-text">{text}</p>
    </div>
  );
};

export default Box;
