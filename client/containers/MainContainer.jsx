import React from 'react';
import { useSelector } from 'react-redux';

import Gallery from '../components/Gallery.jsx';
import Navigation from '../components/Navigation.jsx';


const MainContainer = () => {
    return (
        <div className='main-container'>
            <Navigation />
            <Gallery />
        </div>
    )
}

export default MainContainer;