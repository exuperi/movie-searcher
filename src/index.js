import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import './index.scss';
import Filter from './containers/Filter'
import Movies from './containers/Movies'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Filter />
        <Movies />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
