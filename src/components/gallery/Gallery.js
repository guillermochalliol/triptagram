import { useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import useFirestore from '../../hooks/useFirestore';
import ImageGrid from "../imagegrid/ImageGrid";
import Modal from "../modal/Modal";
import UploadForm from "../uploadform/UploadForm";

const Gallery = () => {
    const { user } = useUserAuth();
    const [selectedImg, setSelectedImg] = useState({});
    const { docs } = useFirestore('images', user.uid);
    const handleClick = (e) => {
        if (e.target.id === 'backdrop') {
            setSelectedImg({});
        }
    }
    
    return (
        <div className="text-gray-600 body-font">
            <div className="container px-5 pt-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Welcome {user.displayName || user.email}</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                </div>
            </div>
            <UploadForm userId={user.uid} enable={docs.length>12?false:true}/>
            <ImageGrid setSelectedImg={setSelectedImg} docs={docs} />
            {selectedImg.url && (
                <Modal>
                    <div className="backdrop z-20" onClick={handleClick} id="backdrop">
                        <div className="p-2 m-4 rounded-2xl bg-white">
                            <img className="rounded-2xl max-w-[100%] max-h-[80vh]" src={selectedImg.url} alt="enlarged pic" />
                            <h2 className="text-center tracking-widest text-sm title-font font-medium text-primary mb-1 uppercase mt-2">{selectedImg.title || ""}</h2>
                            <p className="text-center leading-relaxed">{selectedImg.description || "No data available"}</p>
                            <button onClick={() => setSelectedImg({})} className="text-center flex rounded-full bg-primary mx-auto text-white px-5 py-2 my-2">Close</button>
                        </div>
                    </div>
                </Modal>
            )}
      
        </div>
    );
};

export default Gallery;