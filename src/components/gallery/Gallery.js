import { useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";

import ImageGrid from "../imagegrid/ImageGrid";
import Modal from "../modal/Modal";
import UploadForm from "../uploadform/UploadForm";

const Gallery = () => {
    const { user } = useUserAuth();
    const [selectedImg, setSelectedImg] = useState(null);
    const handleClick = (e) => {
        if (e.target.id === 'backdrop') {
            setSelectedImg(null);
        }
    }
    
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pt-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Welcome {user.displayName || user.email}</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                </div>
            </div>
            <UploadForm  userId={user.uid} />
            <ImageGrid setSelectedImg={setSelectedImg} userId={user.uid} />
            {selectedImg && (
                <Modal>
                    <div className="backdrop z-20" onClick={handleClick} id="backdrop">
                        <div className="p-2 m-4 rounded-2xl bg-white">
                            <img className="rounded-2xl max-w-[100%] max-h-[80vh]" src={selectedImg} alt="enlarged pic" />
                        </div>
                    </div>
                </Modal>
            )}
      
        </section>
    );
};

export default Gallery;