import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';


const progressbar = {
    height: '5px',
    background: '#efb6b2',
    marginTop: '20px',
}

const ProgressBar = ({ file, setFile, setShowModal,setSubmit, title, description, userId }) => {

    const { progress, url } = useStorage(file, title, description, userId);
    useEffect(() => {
        if (url) {
            setFile(null);
            setShowModal(false);
            setSubmit(false);
        }
    }, [url, setFile, setShowModal, setSubmit]);

    return (
        <div style={{...progressbar, width: progress+'%'} }></div>
    )
};

export default ProgressBar;    