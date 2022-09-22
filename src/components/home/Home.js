import { useState } from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";

import Header from "../header/Header";
import ImageGrid from "../imagegrid/ImageGrid";
import Modal from "../modal/Modal";
import UploadForm from "../uploadform/UploadForm";

const Home = () => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };
    const [selectedImg, setSelectedImg] = useState(null);
    console.log(user)
    return (
        <div>
            <div className="p-4 box mt-3 text-center">
                Hello Welcome {user.displayName || user.email} <br />
            </div>
            <div className="d-grid gap-2">
                <button onClick={handleLogout}>
                    Log out
                </button>
            </div>
            <Header />
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            {selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>
    );
};

export default Home;