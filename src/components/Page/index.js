import get from 'lodash/fp/get';
import propTypes from 'prop-types';
import React from 'react';

const Page = ({ actions, values }) => {
	const emailValue = get('email', values);
	const emailChange = ({ target: { value } }) => actions.change('email', value);
	{/*
		TODO: Extract value get & change to generic HoC
	*/}
	return (
		<main>
			<h1>Dashboard</h1>
			<label htmlFor="email-input">Email</label>
			<input id="email-input" onChange={emailChange} value={emailValue} />
		</main>
	);
};

Page.propTypes = {
	actions: propTypes.object.isRequired,
	values: propTypes.object.isRequired,
};

export default Page;
