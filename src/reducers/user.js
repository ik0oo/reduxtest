const initialState = {
	users: [],
	activeUser: {
		name: '',
		email: ''
	},
	mainWallet: {
		rur: 1000,
		eur: 1000,
		usd: 1000
	}
}

export const USER_TYPES = {
	ADD_USER: 'ADD_USER',
	EDIT_USER: 'EDIT_USER',
	SELECT_USER: 'SELECT_USER',
	ADD_NEW_BILL: 'ADD_NEW_BILL',
	CHANGE_WALLET: 'CHANGE_WALLET'
}

export const userReduser = (state = initialState, action) => {
	switch (action.type) {
		case USER_TYPES.ADD_USER:
			return {
				...state,
				users: [
					...state.users,
					{
						id: state.users.length,
						name: action.name,
						email: action.email,
						wallet: action.wallet
					}
				]
			};

		case USER_TYPES.EDIT_USER:
			console.log(action);
			return {
				...state,
				users: state.users.map(user => {
					if (user.id !== action.id) return user;

					return Object.assign({}, user, {
						name: action.name,
						email: action.email
					});
				})
			};

		case USER_TYPES.SELECT_USER:
			return {
				...state,
				activeUser: action.id !== undefined ? state.users.filter(user => user.id === action.id)[0] : initialState.activeUser
			};

		case USER_TYPES.ADD_NEW_BILL:
			console.log(state, action);
			return {
				...state,
				users: state.users.map(user => {
					if (user.id !== action.id) return user;

					return Object.assign({}, user, {
						wallet: [
							...user.wallet,
							{
								date: action.date,
								rur: action.rur,
								eur: action.eur,
								usd: action.usd
							}
						]
					});
				})
			};

		case USER_TYPES.CHANGE_WALLET:
			return {
				...state,
				mainWallet: Object.assign({}, state.mainWallet, {
						rur: action.rur,
						usd: action.usd,
						eur: action.eur
				})
			};

		default:
			return state;
	}
}