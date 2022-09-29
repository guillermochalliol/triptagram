import { useUserAuth } from "../../context/UserAuthContext";
import {Link} from "react-router-dom";

const Home = () => {
    const {  user } = useUserAuth();

    return (
        <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
                <div className="relative pt-36 ml-auto">
                    <div className="lg:w-2/3 px-3 text-center mx-auto">
                        <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">A new Way to reach your Photos <span className="text-primary dark:text-white">Triptagram.</span></h1>
                        <p className="mt-8 text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
                        <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                        {user ? <>
                            <Link className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max" to="/gallery">
                                <span className="relative text-base font-semibold text-white">
                                    Check Your Photos
                                </span>
                            </Link>
                            
                        </>
                        : <>
                            <Link className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max" to="signup">
                                <span className="relative text-base font-semibold text-white">
                                    Register
                                </span>
                            </Link>
                            <Link className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max" to="login">
                                <span className="relative text-base font-semibold text-white">
                                    Login
                                </span>
                            </Link>
                        </>
                        }
                        </div>
                    <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex grid grid-cols-3 ">
                            <div className="text-center">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Collaborate with me</h6>
                                <p className="mt-2 text-gray-500">Send me money</p>
                            </div>
                            <div className="text-center">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">12 pictures for free</h6>
                                <p className="mt-2 text-gray-500"> You can Save 12 images  with title and description</p>
                            </div>
                            <div className="text-center">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Free Account</h6>
                                <p className="mt-2 text-gray-500">Create an account with your email, Gmail or Github</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </div>
    );
};

export default Home;