import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './client/components/App.jsx';
import { Provider } from 'react-redux';
import store from './client/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App></App>
    </Provider>
);