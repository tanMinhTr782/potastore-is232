import React, {useState} from 'react'
import styles from './ChangePass.module.css'
import {
    Visibility, 
    VisibilityOff
  } from '@mui/icons-material';
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
const ChangePass = () => {
    const [currentPwd, currentPwdIcon] = usePasswordToggle(); 
    const [newPwd, newPwdIcon] = usePasswordToggle(); 
    const [confirmNewPwd, confirmNewPwdIcon] = usePasswordToggle(); 
        return (
            <div className = {styles.rightContainer}>
            <form className = {styles.form}>
              <div className = {styles.leftForm}>
              <div className = {styles.name}>
              <label className = {styles.label}> Current Password </label>
              <div className = {styles.input}>
              <input 
                    type = {currentPwd} 
                    className = {styles.inputName}
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"

                />
              <span className = {styles.eye}>{currentPwdIcon}</span>
               </div>
              </div>

              <div className = {styles.name}>
              <label className = {styles.label}> New Password  </label>
              <div className = {styles.input}>
              <input 
                    type = {newPwd} 
                    className = {styles.inputName}
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"

                />
              <span className = {styles.eye}>{newPwdIcon}</span>
               </div>
              </div>

              <div className = {styles.name}>
              <label className = {styles.label}> Confirm <br/>New Password  </label>
              <div className = {styles.input}>
              <input 
                    type = {confirmNewPwd} 
                    className = {styles.inputName}
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"

                />
              <span className = {styles.eye}>{confirmNewPwdIcon}</span>
               </div>
              </div>

              <div className = {styles.btnContainer}>
              <button className = {styles.submitBtn}> Submit</button>
              <button className = {styles.btn}> Cancel </button>
            </div>
              </div>
            </form>
         </div>
        )
      }
export default ChangePass