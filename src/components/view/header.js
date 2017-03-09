import React from 'react';

export default function Header ({rur, eur, usd}) {
	return (
		<div>
			<span>rur: {rur}</span>
			<span>eur: {eur}</span>
			<span>usd: {usd}</span>
		</div>
	);
}