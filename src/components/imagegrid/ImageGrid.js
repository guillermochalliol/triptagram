import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { GRID, WRAP } from './style';

const ImageGrid = ({ setSelectedImg }) => {
const { docs } = useFirestore('images')
    return(
        <GRID>
            {docs && docs.map(doc => (
                <WRAP key={doc.id} onClick={() => setSelectedImg(doc.url)}>
                    <img src={doc.url} alt="uploade img"/>
                </WRAP>
            ))}
        </GRID>
    )
}

export default ImageGrid;
