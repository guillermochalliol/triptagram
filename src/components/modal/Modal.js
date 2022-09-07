import React from 'react';
import { BACKDROP } from './style';

const Modal = ({ setSelectedImg, selectedImg }) => {

    const handleClick = (e) => {
        if (e.target.id === 'backdrop') {
            setSelectedImg(null);
        }
    }

    return (
        <BACKDROP onClick={handleClick} id="backdrop">
            <img src={selectedImg} alt="enlarged pic"/>
        </BACKDROP>
    )
}

export default Modal;

