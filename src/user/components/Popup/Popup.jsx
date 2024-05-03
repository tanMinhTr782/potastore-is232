import React, {useState} from 'react'
import { Close } from '@mui/icons-material'
import styles from './Popup.module.css'

const information = {
  name: '', 
  phone: '', 
  address: ''
}

const Popup = ({ trigger, setTrigger, onSubmit, deliveryInfo}) => {
  const [name, setName] = useState(deliveryInfo?.name); 
  const [phone, setPhone] = useState(deliveryInfo?.phone); 
  const [address, setAddress] = useState(deliveryInfo?.address); 
  const handleSubmit = (e) => {
    e.preventDefault();
    const conf = window.confirm("Are you sure want to save the information?");
    if (!conf) return; 
    information.name = name; 
    information.phone = phone; 
    information.address = address;
    console.log(information);
    onSubmit(information);
    setTrigger(e); // close the form
  }
  return trigger ?
    (<div className={styles.popup}>
      <div className = {styles.popupContent}>
      <div className = {styles.popupHeader}>
      <div className = {styles.headerText}> 
        Billing Information
        <p className={styles.subInputName} >We'll never share your information with anyone else.</p>
      </div>

      <button onClick={setTrigger} className = {styles.close}> <Close /></button>
       </div> 
      
      <div className={styles.namePhone}>
        <div className={styles.name}>
          <p className={styles.label}> Full Name </p>
          <input type="text" value = {name} placeholder="Lorem ipsum" className={styles.inputName} onChange = {(e)=>setName(e.target.value)}required/>
        </div>
        <div className={styles.name}>
          <p className={styles.label}> Phone </p>
          <input type="text" value = {phone} placeholder="+8412345678" className={styles.inputName} onChange = {(e)=>setPhone(e.target.value)}required/>
        </div>
      </div>

      <div className={styles.namePhone}>
        <div className={styles.name}>
          <p className={styles.label}> Address </p>
          <input value = {address} placeholder="268 Ly Thuong Kiet Road, Ward 14, District 10, Ho Chi Minh City" className={styles.address} onChange = {(e)=>setAddress(e.target.value)} required/>
        </div>
      </div>



      <div className={styles.formBtnContainer}>
        <div>
          <button className={styles.submitBtn} onClick = {handleSubmit}> Save</button>
        </div>
        <div>
          <button className={styles.btn} onClick={setTrigger}> Cancel </button>
        </div>
      </div>
      </div>
    </div>)
    : ("")
}

export default Popup