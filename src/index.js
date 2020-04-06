import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/js/axios';
import './assets/css/animate.min.css';
import './Index.scss'
import {Provider} from 'react-redux';
import store from './store/store';
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

