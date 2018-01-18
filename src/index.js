import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './redux/reducers';
import middlewares from './redux/middlewares';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
	values: {
		key: {
			to: 'default value',
		},
	},
};

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(middlewares)
);

console.log('store', store);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
