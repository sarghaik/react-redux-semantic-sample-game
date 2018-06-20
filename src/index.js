import React from 'react';  
import ReactDOM from 'react-dom';  
import { Provider } from 'react-redux';  
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';  
import dotenv from 'dotenv';
import AppRouter from './router';  
import reducers from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

dotenv.config();
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);  
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
      <AppRouter/>
    </Provider>,document.getElementById('root'));

registerServiceWorker();
