import React, {useState} from 'react'
import styles from './ResetPassword.module.css'
import {
  Visibility, 
  VisibilityOff
} from '@mui/icons-material';
// import {Link} from 'react-router-dom'

const usePasswordToggle = () => {
  const [visibility, setVisibility] = useState(false); 
  const Icon = (
      visibility 
      ?  (<VisibilityOff onClick = {() => setVisibility(!visibility)}/>)
      : (<Visibility onClick = {() => setVisibility(!visibility)}/>)
  )
  const InputType = visibility ? "text" : "password"; 
  return [InputType,Icon]; 
}

const ResetPassword = () => {
  const [newPassword, newPasswordIcon] = usePasswordToggle(); 
  const [confirmNewPassword, confirmNewPasswordIcon] = usePasswordToggle(); 
  return (
    <div className={styles.right}>
    <div className={styles.centerRightContainer}>
      <div className={styles.heading}>
        <div className={styles.title}> Reset Password </div>
      </div>

      <div className={styles.input}>
        <div className = {styles.inputBox}>
          <div className={styles.text}>Type your new password here</div>
          <input className={styles.inputContainer} type = {newPassword}></input>
         <span  className = {styles.eye} >
          {newPasswordIcon}
          </span>
        </div>

        <div className = {styles.inputBox}>
        <div className={styles.text}>Confirm new password</div>
        <input className={styles.inputContainer} type = {confirmNewPassword}></input>
        <span  className = {styles.eye} >
          {confirmNewPasswordIcon}
          </span>
        </div>

        <div className={styles.btn}>
          <button className={styles.createBtn}> Confirm  </button>

        </div>  

      </div>
    </div>
  </div>
  )
}

export default ResetPassword;