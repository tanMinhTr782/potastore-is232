import React from 'react'
import styles from './ResetPassword.module.css'
import {
  ArrowForward, 
  ArrowBack
} from '@mui/icons-material';
import {Link, useNavigate} from 'react-router-dom'

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.right}>
    <div className={styles.centerRightContainer}>
      <div className={styles.heading}>
      <Link  to = '/SignIn'>
      <ArrowBack style = {{width: '44px', height: '41px'}}/>
      </Link>
        <div className={styles.title}> Reset Password </div>
      </div>

      <div className={styles.input}>


        <div className={styles.text}>Your Registered Email</div>
        <input className={styles.inputContainer} placeholder='example@example.com'></input>


        <div className={styles.btn}>
          <button className={styles.createBtn} onClick={() =>  { navigate('/ResetPassword1') }}>Continue  <ArrowForward className={styles.arrow}/> </button>
        </div>

      </div>
    </div>
  </div>
  )
}

export default ResetPassword;