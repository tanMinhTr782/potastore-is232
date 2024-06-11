import {useState, useEffect } from 'react'
import styles from './SearchByImage.module.css'
import {useLocation, Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import BeatLoader from "react-spinners/BeatLoader";
const override = {
  display: "block",
  margin: "0 auto",
};

const SearchByImage = () => {
  const [result, setResult] = useState([]); 
  const [numberResult, setNumberResult] = useState(0); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 
  const { state } = useLocation();
  const [preview, setPreview] = useState("./img/search_img_bg.jpg");
  
  const ResultCard = ({product}) => {
    return (
      <div  className = {styles.scanResult}>
          <img src = {product.image} className = {styles.resultImage} onClick = {() => navigate(`/products/${product.id}`)}/>
          <p onClick = {() => navigate(`/products/${product.id}`)}>{product.name}</p>
          <button className = {styles.addToCart} onClick={() => handleAddToCart(product, 1)}> Add to cart</button>
      </div>
    )
  }

    const getResult = (image) => { 
    setLoading(true); 
    const apiUrl = 'http://localhost:3001/image'; 
    const formData=new FormData();
    formData.append('images', image);
    const requestOptions = { 
      method: 'POST', 
      body: formData
    }; 
    fetch(apiUrl, requestOptions)
    .then(response => {
      if (!response.ok) { 
        throw new Error("Network response was not ok"); 
      }
      return response.json(); 
    })
    .then(file => {
      setResult(file.items);
      setNumberResult(file.items.length); 
      setLoading(false); 
    })
    .catch(error => {
      console.error('Error:', error);
    });
    } 
    
    function handleChange(e) {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        // at least one file has been selected so do something
        const objectUrl = URL.createObjectURL( e.target.files[0]); 
        setPreview(objectUrl); 
        getResult(e.target.files[0]);
      }

    }
    useEffect(() => {
      if (state == null) {
          setPreview("./img/search_img_bg.jpg");
          return;
      }
      const objectUrl = URL.createObjectURL(state.image); 
      setPreview(objectUrl);
      getResult(state.image); 
      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl)
  }, [])
  const handleAddToCart = (product, quantity) => {
    if(quantity > 0){
      if(localStorage.getItem('cart')){
        let cart = JSON.parse(localStorage.getItem('cart'));
        const index = cart.findIndex(ele => ele.id === product.id);
        if(index !== -1){
          cart[index].quantity += quantity;
        }
        else{
          const cartItem = {
            id: product.id,
            name: product.name,
            image: product.image, 
            price: product.price,
            quantity: quantity,
          }
          cart.push(cartItem);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
    else {
      if(localStorage.getItem('cart')){
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart = cart.filter(item => item.id !== product.id)
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
  }
  
  return (
    <div>
      <Navbar page = "SearchByImage" />
      <div  className = {styles.container}>
      <div className={styles.left}>
        <div className={styles.leftContainer}>
        <img src={preview} alt="Potastore_cover" width="800px" height="907px" />
          <div className={styles.btn}>
          <input
        type='file'
        id='input-file-upload'
        className={styles.inputFileUpload}
        multiple={false}
        onChange = {handleChange}
      />
            <label
        id={styles.labelFileUpload}
        htmlFor='input-file-upload'
      >
        <div className={styles.createBtn}>
          <p>
            Upload
          </p>
        </div>
      </label>
            </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.centerRightContainer}>
          {
            loading ? (
              <div className = {styles.loader}>
                      <BeatLoader
        color="black"
        loading={loading}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
              </div>
            )
            : (
              <>
<div className={styles.heading}>
            <div className={styles.title}>We found 
              {numberResult ? (<span> {numberResult} results </span>) : (<span>0 result </span>)}  
              with your image 
              </div>
          </div>
          {numberResult > 0 ? (<div className= {styles.resultContainer}>
            {result.map(res => 
                <ResultCard product={res}/>
            )}
          </div>) : (<div className = {styles.subtitle}> Try uploading more images</div>)}
              </>
            )
          }



        </div>
      </div>
      </div>
    </div>

  )
}

export default SearchByImage;