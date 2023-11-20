import { React, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';


import TitleBar from '../atom/ArtikelTitle';

import ArtikelBaru from '../organism/ArtikelBaru';
import ArtikelModal from '../organism/BacaArtikel';

const AddArtikel = () => {
   
  const [showPopup, setShowPopup] = useState(false);
  const [articleData, setArticleData] = useState({
    title: '',
    articleContent: '',
    selectedCategories: [],
    image: null,
  });

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = () => {
    
    console.log('Submitting data:', articleData);

   
    handleClosePopup();
  };

  const handleTitleChange = (newTitle) => {
   
    setArticleData((prevData) => ({
      ...prevData,
      title: newTitle,
    }));
  };

    return (
      
        <>
        <div className="page-container"/>
        <TitleBar
        onSubmit={() => handleSubmit()}
        title={articleData.title} 
      />
      <ArtikelBaru onTitleChange={handleTitleChange} />
        <Button onClick={handleShowPopup}>Open Popup</Button>
       
        {/*<ArtikelModal show={showPopup} handleClose={handleClosePopup}> </ArtikelModal>*/}
         </>
    );
  };

export default AddArtikel