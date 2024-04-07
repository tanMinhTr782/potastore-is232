import styles from './Dropdown.module.css';
import { KeyboardArrowDown } from '@mui/icons-material';
import { useState } from 'react';
const Dropdown = ({options}) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("All");

  return (
      <div className={styles.dropdown}>
        <div className={styles.dropdownBtn} onClick={e => setIsActive(!isActive)}> 
        {selected} <KeyboardArrowDown />
        </div>
        {isActive && (
          <div className={styles.dropdownContent}>
            {options.map((option) => (
              <div
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
                }}
                className={styles.dropdownItem}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
  )
}

export default Dropdown;