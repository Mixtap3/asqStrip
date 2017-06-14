import React from 'react';
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { studentSignupRequest } from '../../actions';

class SignupPage extends React.Component {

	render(){
		const { studentSignupRequest } = this.props
		return (
			<div className="row">
				<div className="col-md-4 col-md-offset-4">
					<SignupForm studentSignupRequest={studentSignupRequest} />
				</div>
			</div>
		)
	}
}


const mapDispatchToProps = {
	studentSignupRequest
}

SignupPage.propTypes = {
	studentSignupRequest: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(SignupPage);
