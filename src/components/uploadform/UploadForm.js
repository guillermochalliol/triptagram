import React, { useState } from 'react';
import ProgressBar from '../progressbar/ProgressBar';
import "./style.css"

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const fileTypes = ['image/png', 'image/jpeg'];
    const inputChangeHandler = (event) => {
        let selectedFile = event.target.files[0];
        if (selectedFile && fileTypes.includes(selectedFile.type)){
            setFile(selectedFile);
            setError('');
        } else {
            setFile(null);
            setError('Please select file (.png, .jpeg)');
        }
    }

    return (
        <form className='uploadForm'>
            <label htmlFor='uploadFile'>
                <input type='file' onChange={inputChangeHandler} title='Upload image file (.png, .jpeg)' id="uploadFile"/>
                <span>+</span>
            </label>
            <div className='output'>
                { error && <div className='error'>{ error }</div> }
                { file && <div>{file.name}</div> }
                { file && <ProgressBar file={file} setFile={setFile}/> }
            </div>
        </form>
    )
}

export default UploadForm;