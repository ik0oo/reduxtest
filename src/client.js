import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './store';
import router from './router';

const render = () => {
	return ReactDOM.render(
		<Provider store={store}>
			{router}
		</Provider>,
		document.getElementById('root')
	);
};

render();
store.subscribe(render);

