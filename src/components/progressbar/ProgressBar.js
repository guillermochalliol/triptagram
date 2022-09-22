import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';


const progressbar = {
    height: '5px',
    background: '#efb6b2',
    marginTop: '20px',
}

const ProgressBar = ({ file, setFile }) => {

    const { progress, url } = useStorage(file);
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <div style={{...progressbar, width: progress+'%'} }></div>
    )
};

export default ProgressBar;    