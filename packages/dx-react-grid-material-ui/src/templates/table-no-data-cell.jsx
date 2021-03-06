import React from 'react';
import PropTypes from 'prop-types';

import {
    TableCell,
} from 'material-ui';

import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('TableNoDataCell', theme => ({
  cell: {
    textAlign: 'center',
    padding: `${theme.spacing.unit * 5}px 0`,
  },
}));

export const TableNoDataCellBase = ({ style, colspan, classes }) => (
  <TableCell
    style={style}
    className={classes.cell}
    colSpan={colspan}
  >
    <big className="text-muted">No data</big>
  </TableCell>
);

TableNoDataCellBase.propTypes = {
  style: PropTypes.shape(),
  colspan: PropTypes.number,
  classes: PropTypes.object.isRequired,
};

TableNoDataCellBase.defaultProps = {
  style: null,
  colspan: 1,
};

export const TableNoDataCell = withStyles(styleSheet)(TableNoDataCellBase);
