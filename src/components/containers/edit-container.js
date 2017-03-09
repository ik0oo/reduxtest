import React from 'react';
import { connect } from 'react-redux';
import Form from '../view/form';
import * as userActions from '../../actions/user';

class FormContainer extends React.Component {
	constructor (props) {
		super(props);
		this.send = this.send.bind(this);
	}

	componentDidMount () {
		this.updateActiveUser(Number(this.props.params.id));
	}

	componentWillReceiveProps (nextProps) {
		let nextId = nextProps.params.id;
		let prevId = this.props.params.id;

		if (nextId !== prevId) this.updateActiveUser(Number(nextId))
	}

	updateActiveUser (id) {
		userActions.selectUser({id});
	}

	send (actions) {
		try {
			userActions.updateWallet(this.props.mainWallet, actions);
			userActions.sendToUser(actions);
		} catch (e) {
			this.error = e;
		}
	}

	render () {
		return (
			<div>
				<Form
					{...this.props.activeUser}
					error={this.erorr}
					isEditMode={true}
					submitEdit={userActions.editUser}
					send={this.send}/>
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
