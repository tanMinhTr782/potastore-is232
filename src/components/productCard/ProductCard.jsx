import React from 'react'
import styles from './ProductCard.module.css'
import {Star, ShoppingCartOutlined, ArrowForwardIos } from '@mui/icons-material'
import { useNavigate } from "react-router-dom";

const ProductCard = (product) => {
    const navigate = useNavigate();

  return (
    <div className  = {styles.container} onClick={()=> navigate(`/products/${product.id}`)}>
        <div className = {styles.card}>
            <div className = {styles.imgContainer}>
            <img src = {product.image} className = {styles.imgProduct} alt = {product.name}/>
        </div>
        <div className = {styles.info}>
            <div className = {styles.titleAndRating}>
                    <span className = {styles.title}>{product.name}</span> 
                    <span className = {styles.rating}> 
                        <Star className = {styles.star} />
                        <span>4.9</span>
                        </span>
            </div>
            <div className = {styles.description}>{product.description.slice(0, 140) + '...'}</div>
            <div className = {styles.sales}> <b style = {{color: 'black'}}>{product.quantity}</b> available</div>
            <div className = {styles.price}> {product.price} VND</div>
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