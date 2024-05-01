import React from 'react'
import {
  ArrowForward,
  ArrowBack
} from '@mui/icons-material';
import styles from './SearchByImage.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';

const ResultCard = ({productName, img}) => {
  return (
    <div  className = {styles.scanResult}>
        <img src = {img} className = {styles.resultImage}/>
        <p>{productName}</p>
        <button className = {styles.addToCart}> Add to cart</button>
    </div>
  )
}
const SearchByImageFound = () => {
    const navigate = useNavigate();
    const numberOfResultFound = 5; 
  return (
    <div>
      <Navbar />
      <div  className = {styles.container}>
      <div className={styles.left}>
        <div className={styles.leftContainer}>
          <img src="./img/search_img_bg.jpg" alt="Potastore_cover" width="800px" height="907px" />
          <div className={styles.btn}>
              <button className={styles.createBtn} >Upload </button>
            </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.centerRightContainer}>
          <div className={styles.heading}>
            <div className={styles.title}>We found {numberOfResultFound} results with your image </div>
          </div>
          <div className= {styles.resultContainer}>
                <ResultCard productName = "Mocchau Strawberry" img = "./img/MocchauStrawberry.jpg"/>
                <ResultCard productName = "Mocchau Strawberry" img = "./img/MocchauStrawberry.jpg"/>
                <ResultCard productName = "Mocchau Strawberry" img = "./img/MocchauStrawberry.jpg"/>
                <ResultCard productName = "Mocchau Strawberry" img = "./img/MocchauStrawberry.jpg"/>
                <ResultCard productName = "Mocchau Strawberry" img = "./img/MocchauStrawberry.jpg"/>
          </div>

        </div>
      </div>
      </div>
    </div>

  )
}

export default SearchByImageFound;