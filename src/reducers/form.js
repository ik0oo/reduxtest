const initialState = {
	name: '',
	email: ''
};

export const FORM_TYPES = {
	FORM_CHANGE_NAME : 'FORM_CHANGE_NAME',
	FORM_CNANGE_EMAIL: 'FORM_CNANGE_EMAIL',
	FORM_RESET       : 'FORM_RESET',
	FORM_AUTOFILL    : 'FORM_AUTOFILL',
};

export const formReducer = (state = initialState, action) => {
	switch (action.type) {
		case FORM_TYPES.FORM_CHANGE_NAME:
			return {
				...state,
				name: action.name
			};

		case FORM_TYPES.FORM_CNANGE_EMAIL:
			return {
				...state,
				email: action.email
			};

		case FORM_TYPES.FORM_RESET:
			return {
				...state,
				name: '',
				email: ''
			};

		case FORM_TYPES.FORM_AUTOFILL:
			return {
				...state,
				name: action.name,
				email: action.email
			};

		default:
			return state;
	}
};