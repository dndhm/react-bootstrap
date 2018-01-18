import propTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions';

import Page from '../Page';

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

export const mapStateToProps = ({ values }) => ({ values });

const App = props => {
	const { actions, values } = props;

	return (<Page actions={actions} values={values} />);
};

App.propTypes = {
	actions: propTypes.object.isRequired,
	values: propTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
