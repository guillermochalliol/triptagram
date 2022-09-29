import React, { useState, useEffect } from 'react';
import Modal from '../modal/Modal';
import ProgressBar from '../progressbar/ProgressBar';
import "./style.css"

const UploadForm = ({userId, enabled}) => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(null);
    const [preview, setPreview] = useState();
    const [submit, setSubmit] = useState(false);
    const [title, setTitle]= useState("");
    const [description, setDescription]= useState("");
    const fileTypes = ['image/png', 'image/jpeg'];

    const inputChangeHandler = (event) => {
        let selectedFile = event.target.files[0];
        if (selectedFile && fileTypes.includes(selectedFile.type)){
            setFile(selectedFile);
            setError('');
           } else {
            setFile(null);
            setError('Please select file (.png, .jpeg)');
        }
    }

    const handleShowModal=(e)=>{
        if (e.target.id === 'backdrop') {
            setShowModal(null);
        }
    }

    const handleSubmit = () => {
        setSubmit(true)
    }

    useEffect(() => {
        if (!file) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [file]);

    return (
        <div className='uploadForm mx-3' >
            <button disabled={enabled} className="relative flex m-auto h-11 w-full items-center justify-center px-6 disabled:before:bg-gray-500 disabled:cursor-not-allowed before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max" onClick={() => setShowModal(true)}>
                <span className="relative text-base font-semibold text-white">
                    Add a picture
                </span>
            </button>
        
            <div className='output'>
               {showModal && 
                    <Modal>
                        <section onClick={ handleShowModal } id="backdrop"className="backdrop z-20 text-gray-600 body-font relative">
                            <div className="px-5 py-24 mx-auto flex">
                                <div className="bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font uppercase">Picture</h2>
                                    <p className="leading-relaxed mb-5 text-gray-600">Please Upload a picture </p>
                                    {file && <img alt="preview" className="h-auto w-60 m-auto" src={preview} />}

                                        <label className="bg-indigo bg-primary rounded-full text-white font-bold py-2 px-4 my-4 w-full inline-flex text-cenetr items-center">
                                            <span className="m-auto"> 
                                                <svg className="text-center inline" fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                                                </svg>
                                            Choose File
                                            </span>
                                            <input className="cursor-pointer absolute block opacity-0 pin-r pin-t" type="file" name="vacancyImageFiles" onChange={inputChangeHandler} title='Upload image file (.png, .jpeg)' id="uploadFile" />
                                        </label>
                                    
                                    {file && <div className="text-xs text-gray-500 mt-3">{file.name}</div>}
                                    {error && <div className='error text-red-500 text-xs text-gray-500'>{error}</div>}
                                    {submit && <ProgressBar file={file} setFile={setFile} setSubmit={setSubmit} setShowModal={setShowModal} title={title} description={description} userId={userId}/> }

                                    
                                    <div className="relative mb-4">
                                        
                                        <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
                                        <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} name="title" maxLength="20" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                    <div className="relative mb-4">
                                        <label htmlFor="description" className="leading-7 text-sm text-gray-600">Description</label>
                                        <textarea id="description" onChange={(e) => setDescription(e.target.value)} name="description" maxLength="50" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out table"></textarea>
                                    </div>
                                    <button disabled={enabled} className="relative flex m-auto h-11 w-full items-center justify-center px-6 disabled:before:bg-gray-500 disabled:cursor-not-allowed before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max" onClick={handleSubmit}>
                                        <span className="relative text-base font-semibold text-white">
                                            Uplopad
                                        </span>
                                    </button>
                                   
                                    <p className="text-xs text-gray-500 mt-3">This is a modal using React Portal</p>
                                </div>
                            </div>
                        </section>
                    </Modal>
                    }
            </div>
        </div>
    )
}

export default UploadForm;