import React from 'react';
import { useSelector } from 'react-redux';

import MainContainer from './containers/MainContainer.jsx';
import Sidebar from './components/Sidebar.jsx'

const App = () => {
    return <div className="top-container">
        <h1>ColorShop</h1>
        <MainContainer />
        <Sidebar />
    </div>
}

export default App;