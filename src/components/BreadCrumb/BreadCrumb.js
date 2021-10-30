import { MdArrowForwardIos } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';

import Box from '../Box/Box';

import { Breadcrumb } from './BreadCrumb.styles';
import './BreadCrumb.css';

const BreadCrumb = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      className="crumb-container"
    >
      <Breadcrumb separator={<MdArrowForwardIos />}>
        <Breadcrumb.Item href="/">sales</Breadcrumb.Item>
        <Breadcrumb.Item href="/components">Components</Breadcrumb.Item>
        <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
      </Breadcrumb>

      <div className="crumb-box-container">
        <Box text="import" className="box-item" />
        <Box icon={<AiOutlinePlus />} text="request price" />
      </div>
    </div>
  );
};

export default BreadCrumb;
