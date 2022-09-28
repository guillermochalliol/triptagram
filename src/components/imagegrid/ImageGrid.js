import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import './style.css';

const ImageGrid = ({ setSelectedImg, userId }) => {
    const { docs } = useFirestore('images',userId);
 
    return(
        <div className="flex flex-wrap m-4">
            {docs.length > 0 ? docs.map(doc => (
            <div className="xl:w-1/6 lg:w-1/4 sm:w-1/2  w-full p-4" key={doc.id} onClick={() => setSelectedImg(doc.url)}>
                    <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-60 xl:h-52 md:h-48 sm:h-52 object-cover object-center" src={doc.url}/>
                        <div className="px-8 py-10 relative z-1 w-full h-60 xl:h-52 md:h-48 sm:h-52 border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1 uppercase">{doc.title||""}</h2>
                            <p className="leading-relaxed">{doc.description||"No data available"}</p>
                        </div>
                </div>
            </div>
            )):
            <div className="text-center m-auto">No Pictures</div>}
        </div>
    
    )
}

export default ImageGrid;
