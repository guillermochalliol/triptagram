import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';

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
        <div className="w-full bg-gray-200 rounded-full">
            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{ width: progress + '%' }}> {progress.toFixed(0)+'%'}</div>
        </div>
    )
};

export default ProgressBar;    