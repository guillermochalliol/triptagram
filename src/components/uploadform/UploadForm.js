import React, { useState, useEffect } from 'react';
import Modal from '../modal/Modal';
import ProgressBar from '../progressbar/ProgressBar';
import "./style.css"

const UploadForm = ({userId}) => {

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
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!file) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [file]);
    useEffect(() => {

    }, [file]);
    return (
        <form className='uploadForm'>
            <label onClick={()=>setShowModal(true)}>
                <span>+</span>
            </label>
            <div className='output'>
               {showModal && 
                    <Modal>
                        <section onClick={ handleShowModal } id="backdrop"className="backdrop z-20 text-gray-600 body-font relative">
                            <div className="px-5 py-24 mx-auto flex">
                                <div className="bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font uppercase">Picture</h2>
                                    <p className="leading-relaxed mb-5 text-gray-600">Please Upload a picture </p>
                                    <input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                                    type='file' onChange={inputChangeHandler} title='Upload image file (.png, .jpeg)' id="uploadFile"/>
                                    {file && <img alt="preview" className="h-auto w-60 m-auto" src={preview} />}
                                    {file && <div>{file.name}</div>}
                                    {error && <div className='error'>{error}</div>}
                                    {submit && <ProgressBar file={file} setFile={setFile} setSubmit={setSubmit} setShowModal={setShowModal} title={title} description={description} userId={userId}/> }

                                    
                                    <div className="relative mb-4">
                                        
                                        <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
                                        <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} name="title" maxLength="20" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                    <div className="relative mb-4">
                                        <label htmlFor="description" className="leading-7 text-sm text-gray-600">Description</label>
                                        <textarea id="description" onChange={(e) => setDescription(e.target.value)} name="description" maxLength="50" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out table"></textarea>
                                    </div>
                                    <button onClick={handleSubmit} className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Uplopad</button>
                                    <p className="text-xs text-gray-500 mt-3">This is a modal using React Portal</p>
                                </div>
                            </div>
                        </section>
                    </Modal>
                    }
                
            </div>
        </form>
    )
}

export default UploadForm;