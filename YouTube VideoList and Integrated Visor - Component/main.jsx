import React from 'react';
import ReactDOM from 'react-dom/client';
import { PortfolioMultimedia, DialogYouTube } from './components';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
            <PortfolioMultimedia /> 
            <DialogYouTube />
    </React.StrictMode>
)
