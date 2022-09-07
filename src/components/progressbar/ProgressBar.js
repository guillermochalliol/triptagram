import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import { PROGRESSBAR } from "./style";

const ProgressBar = ({ file, setFile }) => {
    const { progress, url } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);
    return (
        <PROGRESSBAR width={progress + "%"}/>
    )
};

export default ProgressBar;    