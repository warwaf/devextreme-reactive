import React from 'react';
import { TableRowDetail as TableRowDetailBase } from '@devexpress/dx-react-grid';
import { TableDetailToggleCell } from '../templates/table-detail-toggle-cell';
import { TableDetailCell } from '../templates/table-detail-cell';

const detailToggleTemplate = props => <TableDetailToggleCell {...props} />;
const detailCellTemplate = props => <TableDetailCell {...props} />;

export const TableRowDetail = props => (
  <TableRowDetailBase
    detailToggleTemplate={detailToggleTemplate}
    detailCellTemplate={detailCellTemplate}
    detailToggleCellWidth={42}
    {...props}
  />
);
