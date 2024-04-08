import React from 'react'
import styles from './ProductCard.module.css'
import {Star, ShoppingCartOutlined, ArrowForwardIos } from '@mui/icons-material'

const ProductCard = ({name, price, rating, description, imgUrl, soldFigure}) => {

  return (
    <div className  = {styles.container}>
        <div className = {styles.card}>
            <div className = {styles.imgContainer}>
                <img src = {imgUrl} className = {styles.imgProduct} alt = {name}/>
        </div>
        <div className = {styles.info}>
            <div className = {styles.titleAndRating}>
                    <span className = {styles.title}>{name}</span> 
                    <span className = {styles.rating}> 
                        <Star className = {styles.star} />
                        <span>{rating}</span>
                        </span>
            </div>
            <div className = {styles.description}>{description}</div>
            <div className = {styles.sales}> <b style = {{color: 'black'}}>{soldFigure}</b> sold</div>
            <div className = {styles.price}> ${price}</div>
            <div className = {styles.btnGroup}>
            
            <button className = {styles.btnContainer}>
                <span className = {styles.btnText}>Add to cart</span>
                <ShoppingCartOutlined className={styles.cart}/>
            </button>
            
            <button className = {styles.btnContainer}> 
                <span className = {styles.btnText}>Learn More</span>
                <ArrowForwardIos className={styles.cart}/>
            </button>
            
            </div>

        </div>
        </div>
    </div>
  )
}

export default ProductCard; 