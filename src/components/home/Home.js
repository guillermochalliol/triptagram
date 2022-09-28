import { useState } from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";



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
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleLogout}>logout</button>
        </div>
    );
};

export default Home;