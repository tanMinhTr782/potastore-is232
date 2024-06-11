import styles from './Home.module.css'
import CategoryCard from '../../components/categoryCard/CategoryCard'
import Dropdown from '../../components/Dropdown/Dropdown'
import ProductCard from '../../components/productCard/ProductCard';
import { useState, useEffect } from 'react';

const type = ["Fruit", "Vegetable", "All Type"];
const availability = ["Per fruit", "Per pack", "All Availability"];
const price = ["From low to high", "From high to low", "All Price"];
// const [loginErr, setLoginErr] = useState("");

// const onFinish = async (event) => {
//   event.preventDefault();
//   const data = new FormData(event.currentTarget);
//   const accessToken = localStorage.accessToken;

//   try {
//     // Make a POST request to your login API endpoint
//     const response = await fetch("http://localhost:3000/products", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${accessToken}`,
//       },
//       body: JSON.stringify({
//         take: 10,
//         skip: 1,
//         categoryId: data.get("categoryId"),
//       }),
//     });
//     if (data.get("take") === "" || data.get("skip") === "" || data.get("skip") === "")
//       setLoginErr("unfilled");
//     // Check if the request was successful (status code 2xx)
//     else if (response.ok) {
//       // Login successful, you can handle the response accordingly
//       const userData = await response.json();
//       // console.log('Login successful. User data:', userData);
//       localStorage.setItem("role", userData.role);
//       localStorage.setItem("accessToken", userData.accessToken);
//       if(userData.role === 'Customer'){
//         window.location.href = "../";
//       }
//       else window.location.href = "../shop";
//     } else {
//       // Login failed, handle the error response
//       const errorData = await response.json();
//       // console.error('Login failed:', errorData);
//       setLoginErr("invalid");
//     }
//   } catch (error) {
//     // Handle network or other errors
//     // console.error('Error during login:', error);
//     setLoginErr("invalid");
//   }
// };

const products = [
  {
    name: 'Mocchau Strawberry',
    price: '6.48',
    rating: '4.9',
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    imgUrl: '/img/MocchauStrawberry.jpg', 
    soldFigure: '14',
  },
  {
    name: 'Dalat Potato',
    price: '5.99',
    rating: '3.5',
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    imgUrl: '/img/potato.jpg', 
    soldFigure: '268',
  },
  {
    name: 'Pineapple',
    price: '3.99',
    rating: '5.0',
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    imgUrl: '/img/ppap.png', 
    soldFigure: '1957',
  },

];

const Home = () => {

  // const [products, setProducts] = useState([]);
  // const url = 'http://localhost:3000/product';

  const accessToken = localStorage.accessToken;


  return (
    <div className={styles.container}>

      <h1 className={styles.title}>Shop</h1>
      <br></br>
      <div className={styles.categoryContainer}>
        <CategoryCard imgUrl='/img/FruitCategory.jpg' title="FRUITS" numberOfItem='5' />
        <CategoryCard imgUrl='/img/VegetableCategory.jpg' title="VEGETABLES" numberOfItem='5' />
      </div>
      <div className={styles.productContainer}>
        <div className={styles.filter}>
          <span className={styles.filterTitle}>Sort by :</span>
          <Dropdown options={type} />
          <Dropdown options={price} />
          <Dropdown options={availability} />
          <button className={styles.filterBtn}>
            <span className={styles.wordsOnButton}>Filter</span>
          </button>
        </div>
        <div className={styles.productCardList}>
          {products.map((product) => (
            <ProductCard {...product} />
          ))} 
        </div>
      </div>
    </div>
  )
}

export default Home; 