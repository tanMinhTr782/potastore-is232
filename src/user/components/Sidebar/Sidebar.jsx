import React from 'react'
import styles from './Sidebar.module.css'
import { AccountCircle, BlindsClosed, Key, MonetizationOn, Logout
} from '@mui/icons-material'
import BillingInfo from '../../pages/BillingInfo/BillingInfo';
import UserOrders from '../../pages/Orders/UserOrders';
import UserInfo from '../../pages/UserInfo/UserInfo';
import { useNavigate } from 'react-router-dom';
const SidebarData = [
  {
    id: 1, 
    name: 'User Information',
    icon: <AccountCircle/>, 
    link: '/user/info'
  }, 
  {
    id: 2, 
    name: 'Order Management',
    icon: <BlindsClosed/>, 
    link: '/user/orders'
  }, 
  // {
  //   id: 3, 
  //   name: 'Change Password',
  //   icon: <Key/>
  // }, 
  {
    id: 4, 
    name: 'Billing Information',
    icon: <MonetizationOn/>, 
    link: '/user/billing'
  }, 
  {
    id: 5, 
    name: 'Log out',
    icon: <Logout/>
  }, 
]
const NameCard = () => {

}
const Sidebar = () => {
  const navigate = useNavigate(); 
  return (
    <div className = {styles.container}>
      <div className = {styles.nameCard}>
        <img src = "\img\ppap.png" className = {styles.avatar}></img>
        <div className = {styles.userInfo}>
          <p>Lorem ipsum</p>
          <span style = {{fontSize: '12px', color: '#333333'}}>Your profile</span>
        </div>
      </div>
        <ul className = {styles.list}>
          {SidebarData.map((item) => {
            return (
              <li key = {item.id} className = {styles.row} onClick = {() => navigate(item.link)}>
                {" "}
                <div className = {styles.icon}>{item.icon} </div>
                {" "}
                <span className = {styles.name} target = "_blank" >{item.name}</span>
              </li>
            ); 
})}
        </ul>
    </div>
  )
}

export default Sidebar