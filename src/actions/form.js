import { FORM_TYPES } from '../reducers/form';
import store from '../store';

export const updateName = (id, event) => {
	return {
		type: FORM_TYPES.FORM_CHANGE_NAME,
		id,
		name: event.target.value
	};
};

export const updateEmail = (id, event) => {
	return {
		type: FORM_TYPES.FORM_CNANGE_EMAIL,
		id,
		email: event.target.value
	};
};

export const reset = () => {
	return {
		type: FORM_TYPES.FORM_RESET
	};
};

export const autofill = (data) => {
	return {
		type: FORM_TYPES.FORM_AUTOFILL,
		name: data.name,
		email: data.email
	};
};

export const submitForm = (id) => {
	let {name, email} = store.getState().formReducer;
	return {
		type: 'ADD_USER',
		name, email
	}
};