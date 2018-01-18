import get from 'lodash/fp/get';
import React from 'react';
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions';

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

export const mapStateToProps = ({ values }) => ({ values });

const App = props => {
	const { values, actions } = props;

	const value = get(['key', 'to'], values);

	return (<h1 onClick={() => actions.change(['key', 'to'], 'new value')}>App heading: {value}</h1>);
};

App.propTypes = {
	actions: propTypes.object.isRequired,
	values: propTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
