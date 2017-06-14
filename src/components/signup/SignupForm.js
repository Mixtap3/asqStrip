import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'
import validateInput from '../../validations/validateInput'
import TextFieldGroup from '../common/TextFieldGroup'

class SignupForm extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			name: '',
			email: '',
			school: '',
			education: '',
			year: '',
			errors: {},
			isLoading: false
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	isValid(){
		const { errors, isValid } = validateInput(this.state);

		if(!isValid){
			this.setState({ errors });
		}
		
		return isValid;
	}

	onSubmit(event){
		event.preventDefault()

		// Post student to firebase here
		if(this.isValid()){
			this.setState({ errors: {}}) //isLoading: true
			this.props.studentSignupRequest(this.state)
		}

	};

	onChange(event){
		this.setState({ [event.target.name]: event.target.value })
	}

	render(){
		const { errors } = this.state

		return (
			<form onSubmit={this.onSubmit}>
		    	<TextFieldGroup
						onChange = {this.onChange}
						value = {this.state.name}
						name="name" 
						classname="form-group" 
						placeholder="Your Name"
						error= {errors.name} />
				<TextFieldGroup
						onChange = {this.onChange}
						value = {this.state.email}
						name="email" 
						classname="form-group" 
						placeholder="Email"
						error= {errors.email} />
				<TextFieldGroup
						onChange = {this.onChange}
						value = {this.state.school}
						name="school" 
						classname="form-group" 
						placeholder="School"
						error= {errors.school} />
				<div className="row">
					<TextFieldGroup
						onChange = {this.onChange}
						value = {this.state.education}
						name="education" 
						classname="form-group col-xs-6" 
						placeholder="Education"
						error= {errors.education} />
					<TextFieldGroup
						onChange = {this.onChange}
						value = {this.state.year}
						name="year" 
						classname="form-group col-xs-6" 
						placeholder="Year"
						error= {errors.year} />
				</div>
				<button disabled={this.state.isLoading} type="submit" className="btn btn-primary">
					Submit
				</button>
		    </form>
		)
	}; 
}

SignupForm.propTypes = {
	studentSignupRequest: PropTypes.func.isRequired
}


export default SignupForm;