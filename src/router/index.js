import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from '../components/layouts';
import CreateContainer from '../components/containers/create-container';
import EditContainer from '../components/containers/edit-container';

export const ROUTES = {
	'HOME': '/',
	'EDIT_PAGE': '/:id'
};

export default (
	<Router history={browserHistory}>
		<Route path={ROUTES.HOME} component={Layout}>
			<IndexRoute component={CreateContainer} />
			<Route path={ROUTES.EDIT_PAGE} component={EditContainer} />
		</Route>
	</Router>
);