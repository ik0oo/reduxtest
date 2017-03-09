import React from 'react';
import { Link } from 'react-router';
import { ROUTES } from '../../router';
import store from '../../store';
import userActions from '../../actions/user';
import Header from '../view/header';

export default function Layout ({children}) {
	const state = store.getState().userReduser;
	console.log(state)

	return (
		<section className="layout">
			<Header
					{...state.mainWallet}
					className="layout__header" />

			<aside className="layout__aside">
				{state.users.map(user => {
					return <div
							key={user.id}>
						<hr />
						<div>name: {user.name}</div>
						<div>email: {user.email}</div>
						<h3>wallet: </h3>
						{user.wallet.map(item => {
							return <div key={item.date}>
									{item.date && <div>date: {item.date.toString()}</div>}
									{item.rur && <div>rur: {item.rur}</div>}
									{item.eur && <div>eur: {item.eur}</div>}
									{item.usd && <div>usd: {item.usd}</div>}
							</div>
						})}

						<Link to={ROUTES.HOME + user.id}>edit</Link>
						<br />
					</div>
				})}

				<br/ >


				<Link to={ROUTES.HOME}>create</Link>
			</aside>
			<div className="layout__main">{children}</div>
		</section>
	);
}
