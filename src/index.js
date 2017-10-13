import React from 'react';
import ReactDOM from 'react-dom';
import './views/css/index.css';
import App from './views/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
