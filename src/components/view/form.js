import React from 'react';

export default class Form extends React.Component {

	static defaultProps = {
		name: '',
		email: '',
		rur: '',
		usd: '',
		eur: '',
		conditions: false,
		isEditMode: false
	}

	constructor (props) {
		super(props);

		this.state = {
			name: this.props.name,
			email: this.props.email,
			rur: this.props.rur,
			eur: this.props.eur,
			usd: this.props.usd
		};

		this.handleChange = this.handleChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.submitEdit = this.submitEdit.bind(this);
		this.send = this.send.bind(this);
	}

	handleChange (e) {
		const target = e.target;
		const name = target.name;
		const type = target.type;
		const value = target.value;
		const checked = target.checked;

		this.setState({
			[name]: type === 'checkbox' ? checked : value
		});
	}

	componentWillReceiveProps (nextProps) {
		this.setState({
			name: nextProps.name,
			email: nextProps.email,
			rur: nextProps.rur,
			eur: nextProps.eur,
			usd: nextProps.usd
		})
	}

	submitForm () {
		this.props.submitForm({
			name: this.state.name,
			email: this.state.email,
			rur: this.state.rur,
			eur: this.state.eur,
			usd: this.state.usd
		});

		this.setState({
			name: '',
			email: '',
			rur: '',
			eur: '',
			usd: '',
			conditions: false
		})
	}

	submitEdit () {
		this.props.submitEdit({
			name: this.state.name,
			email: this.state.email,
			id: this.props.id
		});
	}

	send () {
		this.props.send({
			rur: this.state.rur,
			eur: this.state.eur,
			usd: this.state.usd,
			id: this.props.id
		})
	}

	render () {
		const {name, email, id, isEditMode, error} = this.props;

		return (
			<form>
				<h2>{isEditMode ? 'Edit User' : 'New User'}</h2>
				<div>
					<label>name</label>
					<input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
				</div>

				<div>
					<label>email</label>
					<input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
				</div>
				{!isEditMode
					? <div>
						<label>
							<input
									type="checkbox"
									name="conditions"
									checked={this.state.conditions}
									onChange={this.handleChange} />
							some text
						</label>
					</div>
					: <button type="button" disabled={!this.state.name || !this.state.email} onClick={this.submitEdit}>Save</button>
				}

				<div>rur: <input type="number" name="rur" value={this.state.rur} onChange={this.handleChange} /></div>
				<div>eur: <input type="number" name="eur" value={this.state.eur} onChange={this.handleChange} /></div>
				<div>usd: <input type="number" name="usd" value={this.state.usd} onChange={this.handleChange} /></div>


				{!isEditMode
					? <button type="button" disabled={!this.state.conditions || !this.state.name || !this.state.email} onClick={this.submitForm} >Save</button>
					: <button type="button" onClick={this.send} >Send</button>
				}

				<div>{error}</div>
			</form>
		);
	}
}