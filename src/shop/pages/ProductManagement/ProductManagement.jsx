import './ProductManagement.css'
import ShopNavbar from '../../components/ShopNavbar/ShopNavbar';
import ProductTable from '../../components/ProductTable/ProductTable';

import {Stack} from "@mui/material";


const ProductManagement = () => {
  return (
    <Stack direction="row">
        <ShopNavbar />
        <ProductTable />
    </Stack>
  )
}

export default ProductManagement;
