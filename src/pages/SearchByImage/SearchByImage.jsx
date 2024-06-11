import {useState, useEffect} from 'react'
import styles from './SearchByImage.module.css'
import {useLocation, useNavigation, Link } from 'react-router-dom'
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
const SearchByImage = () => {
  const [result, setResult] = useState([]); 
  const [numberResult, setNumberResult] = useState(0); 
  const [loading, setLoading] = useState(false);

  const { state } = useLocation();
  const [preview, setPreview] = useState("./img/search_img_bg.jpg");

    const getResult = (image) => { 
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
  }, [state])
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
          <div className={styles.heading}>
            <div className={styles.title}>We found {numberResult} results with your image </div>
          </div>
          {numberResult > 0 ? (<div className= {styles.resultContainer}>
            {result.map(res => 
                <ResultCard productName = {res.name} img = {res.image}/>
            )}
          </div>) : (<div className = {styles.subtitle}> Try uploading more images</div>)}


        </div>
      </div>
      </div>
    </div>

  )
}

export default SearchByImage;