import './AccountManagement.css'
import ShopNavbar from '../../components/ShopNavbar/ShopNavbar';
import AccountTable from '../../components/AccountTable/AccountTable';

import {Stack} from "@mui/material";


const AccountManagement = () => {
  return (
    <Stack direction="row">
        <ShopNavbar />
        <AccountTable />
    </Stack>
  )
}

export default AccountManagement;
