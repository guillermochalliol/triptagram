import React, { useState } from 'react';
import Header from './components/header/Header';
import ImageGrid from './components/imagegrid/ImageGrid';
import UploadForm from './components/uploadform/UploadForm';
import { GlobalStyles } from "./styles/Global";
import Modal from './components/modal/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="app">
    <GlobalStyles />
    <Header />
    <UploadForm/>
    <ImageGrid setSelectedImg={setSelectedImg} />
    {selectedImg && (
      <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
    )}
    </div>
  );
}

export default App;