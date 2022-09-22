import React from 'react';
import './style.css';

const Modal = ({ setSelectedImg, selectedImg }) => {

    const handleClick = (e) => {
        if (e.target.id === 'backdrop') {
            setSelectedImg(null);
        }
    }

    return (
        <div class="backdrop" onClick={handleClick} id="backdrop">
            <img src={selectedImg} alt="enlarged pic"/>
        </div>
    )
}

export default Modal;

