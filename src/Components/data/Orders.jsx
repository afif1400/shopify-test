import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import axios from 'axios';
import './orders.css';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const Row = ({ row }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.order_number}
        </TableCell>
        <TableCell align='left'>{row.created_at}</TableCell>
        <TableCell align='left'>{row.gateway}</TableCell>
        <TableCell align='left'>
          <span className={'status' + row.financial_status}>
            {row.financial_status}
          </span>
        </TableCell>
        <TableCell align='left'>{row.subtotal_price}</TableCell>
        <TableCell align='left'>{row.total_price}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Typography variant='h6' gutterBottom component='div'>
                Products
              </Typography>
              {row.line_items.map((items) => {
                return (
                  <div className='product_card'>
                    <div className='box-1'>
                      <span className='product_title'>{items.name}</span>
                      <br />
                      <span className='product_quantity'>{items.quantity}</span>
                      <br />
                      <span className='product_sku'>{items.sku}</span>
                    </div>
                    <div className='box-2'>
                      <span className='price'>{items.price}</span>&emsp;x&emsp;
                      <span className='quantity'>{items.quantity}</span>
                    </div>
                    <div className='box-3'>
                      <span className='total_amount'>
                        Rs.&ensp;
                        {parseInt(items.price) * parseInt(items.quantity)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

export default function OrdersTable() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.get('http://localhost:7000/orderlist');
    setOrders(response.data.orders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <TableContainer component={Paper}>
      <button
        type='submit'
        className='btn btn-medium waves-effect waves-light hoverable accent-3 create_order_button'
      >
        <span>+</span> create order
      </button>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Order Number</TableCell>
            <TableCell align='left'>Created At</TableCell>
            <TableCell align='left'>Gateway</TableCell>
            <TableCell align='left'>Status</TableCell>
            <TableCell align='left'>Sub Total</TableCell>
            <TableCell align='left'>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders ? (
            orders.map((order) => {
              return <Row key={order.order_number} row={order} />;
            })
          ) : (
            <div className='preloader_spinner'>
              <div class='preloader-wrapper big active'>
                <div class='spinner-layer spinner-blue'>
                  <div class='circle-clipper left'>
                    <div class='circle'></div>
                  </div>
                  <div class='gap-patch'>
                    <div class='circle'></div>
                  </div>
                  <div class='circle-clipper right'>
                    <div class='circle'></div>
                  </div>
                </div>

                <div class='spinner-layer spinner-red'>
                  <div class='circle-clipper left'>
                    <div class='circle'></div>
                  </div>
                  <div class='gap-patch'>
                    <div class='circle'></div>
                  </div>
                  <div class='circle-clipper right'>
                    <div class='circle'></div>
                  </div>
                </div>

                <div class='spinner-layer spinner-yellow'>
                  <div class='circle-clipper left'>
                    <div class='circle'></div>
                  </div>
                  <div class='gap-patch'>
                    <div class='circle'></div>
                  </div>
                  <div class='circle-clipper right'>
                    <div class='circle'></div>
                  </div>
                </div>

                <div class='spinner-layer spinner-green'>
                  <div class='circle-clipper left'>
                    <div class='circle'></div>
                  </div>
                  <div class='gap-patch'>
                    <div class='circle'></div>
                  </div>
                  <div class='circle-clipper right'>
                    <div class='circle'></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
