import { useState } from 'react'
import {
  AttachFile
} from '@mui/icons-material';
import styles from './UploadImageButton.module.css'
function handleFiles(files) {
  alert("Number of files: " + files.length);
}
const UploadImageButton = () => {
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
      id='file-upload'
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
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
        className={dragActive ? styles.labelFileUploadTriggered : ""}
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
    // <div>
    //   <div >
    //     <div className={styles.uploadTitle}>Search your product with Potastore AI</div>
    //     <div className={styles.uploadZone} onDragEnter={handleDrag} onSubmit={(event) => event.preventDefault()}>
    //       <button type="file" className={styles.uploadFile} onClick={onButtonClick}>
    //         <span>
    //           <AttachFile style={{ width: '24px', height: '24px' }} />
    //           Drag An Image Here or Upload A File
    //         </span>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default UploadImageButton