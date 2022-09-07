import React, { useState } from 'react';
import ProgressBar from '../progressbar/ProgressBar';
import { FORM, LABEL, OUTPUT } from "./style"

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
        <FORM>
            <LABEL htmlFor='uploadFile'>
                <input type='file' onChange={inputChangeHandler} title='Upload image file (.png, .jpeg)' id="uploadFile"/>
                <span>+</span>
            </LABEL>
            <OUTPUT>
                { error && <div className='error'>{ error }</div> }
                { file && <div>{file.name}</div> }
                { file && <ProgressBar file={file} setFile={setFile}/> }
            </OUTPUT>
        </FORM>
    )
}

export default UploadForm;