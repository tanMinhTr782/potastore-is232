import {useState, useEffect} from 'react'

import styles from './BillingInfo.module.css'
import Popup from '../../components/Popup/Popup'
const deliveryData = {
  name: '',
  phone: '',
  address: ''
}

const DeliveryInfo = ({ deliveryData, setFormOpen , handleDelete}) => {
  return (
    <>
      <div className={styles.leftForm}>
        <div className={styles.billingInfo}>
          <p>{deliveryData.name}| <b>{deliveryData.phone}</b></p>
          <p>{deliveryData.address}</p>
        </div>
      </div>

      <div className={styles.avatarContainer}>
        <div className={styles.btnContainer}>
          <button className={styles.submitBtn} onClick = {setFormOpen}> Edit</button>
          <button className={styles.btn} onClick = {handleDelete}> Delete </button>
        </div>
      </div>
    </>
  )
}

const BillingInfo = () => {
  const [openForm, setOpenForm] = useState(false); 
  const toggleForm = (e) => {
    e.preventDefault();
    setOpenForm(!openForm)
  }
  const handleInfoChange = (data) => {
    deliveryData.name = data?.name; 
    deliveryData.phone = data?.phone; 
    deliveryData.address = data?.address; 
    console.log(deliveryData);
    return; 
  }
  const handleDelete = (e) => {
    const conf = window.confirm("Are you sure want to clear all information?"); 
    if (!conf) return; 
    deliveryData.name = ''; 
    deliveryData.phone = ''; 
    deliveryData.address = ''; 
    return; 
  }
  useEffect(() => {
    // action on update of movies
  }, []);
  return (
    <div className={styles.rightContainer}>
      <p className={styles.label}> Delivery Address </p>
      <form className={styles.form}>

        {deliveryData.name !== ''

          ? (<>      
            <DeliveryInfo deliveryData={deliveryData} setFormOpen={toggleForm} handleDelete = {handleDelete} />
            <Popup trigger = {openForm} setTrigger={(e) => toggleForm(e)} onSubmit = {handleInfoChange} deliveryInfo = {deliveryData}/>
          </>)
          : (<div>
            <button className={styles.addBtn} onClick = {toggleForm}> Add new delivery address </button>
            <Popup trigger = {openForm} setTrigger={(e) => toggleForm(e)} onSubmit = {handleInfoChange} deliveryInfo = {deliveryData}/>
          </div>)
        }

      </form>
    </div>
  )
}

export default BillingInfo