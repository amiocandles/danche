import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Life from './pages/demo/Life.js';
import Admin from './admin.js'
import Router from './router.js'
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore';
import * as serviceWorker from './serviceWorker';
// Redux Store对象，管理所有的Redux状态
const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
    <Router />
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
