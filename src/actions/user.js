import store from '../store';
import { USER_TYPES } from '../reducers/user';

export const addUser = (action) => {
	// var mainWallet = store.getState().userReducer.mainWallet;

	store.dispatch({
		type: USER_TYPES.ADD_USER,
		name: action.name,
		email: action.email,
		wallet: [{
			date: new Date,
			rur: action.rur,
			eur: action.eur,
			usd: action.usd
		}]
	});

	store.dispatch({
		type: USER_TYPES.SELECT_USER
	});
};

export const selectUser = (action) => {
	store.dispatch({
		type: USER_TYPES.SELECT_USER,
		id: action.id
	});
};

export const editUser = (action) => {
	store.dispatch({
		type: USER_TYPES.EDIT_USER,
		name: action.name,
		email: action.email,
		id: action.id
	});

	store.dispatch({
		type: USER_TYPES.SELECT_USER,
		id: action.id
	});
};

export const sendToUser = (action) => {
	store.dispatch({
		type: USER_TYPES.ADD_NEW_BILL,
		id: action.id,
		date: new Date,
		rur: action.rur,
		eur: action.eur,
		usd: action.usd
	});
};

export const updateWallet = (mainWallet, action) => {
	let {rur, eur, usd} = mainWallet;

	const wallet = {
		rur: rur - action.rur,
		eur: eur - action.eur,
		usd: usd - action.usd
	};

	for (let i in wallet) {
		if (wallet[i] < 0) throw 'you do not have enough money';
	}

	store.dispatch({
		type: USER_TYPES.CHANGE_WALLET,
		rur: wallet.rur,
		eur: wallet.eur,
		usd: wallet.usd
	});
};