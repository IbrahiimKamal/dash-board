import { Breadcrumb as BreadcurmApp } from 'rsuite';
import styled from 'styled-components';

export const Breadcrumb = styled(BreadcurmApp)`
  display: flex;
  align-items: center;

  .rs-breadcrumb-item {
    color: #bebfc1;
    font-size: 14px;
    text-transform: capitalize;
  }

  .rs-breadcrumb-item-active {
    color: #000;
    font-weight: 500;
  }

  .rs-breadcrumb-separator {
    font-size: 16px;
    margin-top: 7px;
  }
`;
