import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom'

class Write extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		if (loginStatus) {
			return (
				<div>Write a article</div>
			)
		}else {
			return <Navigate replace to='/login' />
		}
	}
}

export default connect(
    state => ({
        loginStatus: state.getIn(['loginReducer', 'login'])
    }),
    {}
)(Write)