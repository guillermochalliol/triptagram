import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import './style.css';

const ImageGrid = ({ setSelectedImg }) => {
const { docs } = useFirestore('images')
    return(
        <div className="grid">
            {docs && docs.map(doc => (
                <div className="wrap" key={doc.id} onClick={() => setSelectedImg(doc.url)}>
                    <img src={doc.url} alt="uploade img"/>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;
