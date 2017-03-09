import React from 'react';
import { connect } from 'react-redux';
import Form from '../view/form';
import * as userActions from '../../actions/user';

class FormContainer extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			error: ''
		};

		this.addUser = this.addUser.bind(this);
	}

	componentDidMount () {
		userActions.selectUser({});
	}

	addUser (actions) {
		try {
			userActions.updateWallet(this.props.mainWallet, actions);
			userActions.addUser(actions);
		} catch (e) {
			this.setState({error: e})
		}
	}

	render () {
		return (
			<div>
				<Form
					{...this.props.activeUser}
					error={this.state.error}
					submitForm={this.addUser} />
			</div>
		);
	}
}

export default connect(
	store => ({
		activeUser: store.activeUser,
		mainWallet: store.mainWallet
	})
)(FormContainer);
