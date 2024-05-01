import './OrderManagement.css'
import ShopNavbar from '../../components/ShopNavbar/ShopNavbar';
import OrderList from '../../components/OrderList/OrderList';

import {Stack} from "@mui/material";


const OrderManagement = () => {
  return (
    <Stack direction="row">
        <ShopNavbar />
        <OrderList />
    </Stack>
  )
}

export default OrderManagement;
