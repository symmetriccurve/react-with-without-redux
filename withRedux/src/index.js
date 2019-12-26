import React from 'react';
import ReactDOM from 'react-dom';

import Wall from './Wall';

//Redux
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true }));

ReactDOM.render(
        <Provider store={store}>
            <Wall />
        </Provider>, 
        document.getElementById('root')
);

