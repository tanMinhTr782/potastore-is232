import React, { useState} from 'react'
import styles from "./Navbar.module.css"
import {
    ShoppingCartOutlined,
    SearchOutlined,
    CameraAlt,
    ArrowForward,
} from '@mui/icons-material';
import { useNavigate } from "react-router-dom"; 
import {Link} from 'react-router-dom';
import UploadImageButton from '../UploadImageButton/UploadImageButton'
import UserMenu from '../UserMenu/UserMenu'
const Navbar = ({page}) => {
    const [openSearchByImage, setOpenSearchByImage] = useState(false);
    const isAuthen = false; 
    // triggers when file is selected with click

    const navigate = useNavigate(); 
    const hideNavbar = window.location.pathname.startsWith("/shop");
    if (hideNavbar) {
      return null;
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <div className= {styles.item}>
                    <Link to="/" className={styles.logo}> <img src='/logo.png' alt = "Potastore"/></Link>
                </div>
                {
                    page != "SearchByImage" ? (
                        <>
                                        <div className={styles.Search}>
                    <div className= {styles.searchWrapper}>
                        <input className={styles.searchContainer} placeholder="Search">
                        </input>

                        <button className= {styles.button}>
                            <SearchOutlined style={{ color: 'white' }} />
                        </button>
                        <button className= {styles.button}>
                            <CameraAlt style={{ color: 'white' }} onClick = {() => {setOpenSearchByImage(!openSearchByImage)}}/>
                        </button>
                    </div>
                    {openSearchByImage && <UploadImageButton setOpen={setOpenSearchByImage}/>}
                </div>
                        </>
                    )
                    : 
                    (
                        <>
                        </>
                    )
                }

            </div>


            <div className={styles.right}>
                <button className={styles.cartBtn} onClick={() =>  { navigate('/cart') }}>
                    <ShoppingCartOutlined className={styles.cart} />
                </button>
                {
                    !isAuthen ? 
                    (<UserMenu/>)
                    : (
                <button className={styles.signinBtn}  onClick={() =>  { navigate('/SignIn') }}> 
                    <span className={styles.cartCount}>Sign in</span>
                    <ArrowForward className={styles.arrow}/>
                </button>
                    )
                }


            </div>
        </div>
    )
}
export default Navbar; 