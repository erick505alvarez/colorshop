import React from 'react';
import Gallery from '../components/gallery.jsx';
import Navigation from '../components/Navigation.jsx';
import { useSelector } from 'react-redux';



const MainContainer = () => {
    // hooks
    const currState = useSelector((state) => state);
    
    // 
    const docState = currState.documents
    console.log('MainContainer state:', currState);

    return (
        <div class='main-container'>
            <Navigation galleryType={docState.galleryType}/>
            <Gallery documets={docState.docs}/>
        </div>
    )
}

export default MainContainer;