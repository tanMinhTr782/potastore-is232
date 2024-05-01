import { useState } from 'react'
import {
  AttachFile, 
  Close
} from '@mui/icons-material';
import styles from './UploadImageButton.module.css'
function handleFiles(files) {
  alert(files[0].name);
  console.log(files); 
}
const UploadImageButton = ({setOpen}) => {
  const [dragActive, setDragActive] = useState(false);
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // at least one file has been selected so do something
      handleFiles(e.target.files);
    }
    //console.log(event)
  };
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    }
    else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // at least one file has been dropped so do something
      handleFiles(e.dataTransfer.files);
    }
  };
  return (
    <form
      className = {styles.upImageBox}
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className = {styles.upImageTitle}>
        <p className={styles.uploadTitle}>Search your product with Potastore AI</p>
        <button style = {{border: 'none', backgroundColor: 'transparent', cursor: 'pointer'}} onClick = {() => setOpen(false)}><Close /></button>
      </div>
      <input
        type='file'
        id='input-file-upload'
        className={styles.inputFileUpload}
        multiple={false}
        onChange={handleChange}
      />
      <label
        id={styles.labelFileUpload}
        htmlFor='input-file-upload'
        style = {dragActive ?{ backgroundColor: '#737373', color: 'white' }: {backgroundColor: '#F9F9F9', color: 'black'}}
      >
        <div className={styles.uploadFile}>
          <p>
            <AttachFile style={{ width: '24px', height: '24px' }} />
            Drag An Image Here or Upload a file
          </p>
        </div>
      </label>
      {dragActive && <div
        id={styles.dragFileElement}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}>

      </div>
      }
    </form>
  )
}

export default UploadImageButton