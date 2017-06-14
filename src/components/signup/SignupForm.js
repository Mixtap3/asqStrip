import React from 'react';
import PropTypes from 'prop-types'


class SignupForm extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			name: '',
			email: '',
			school: '',
			education: '',
			year: ''
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	// isValid(){
	// 	const { error, isValid }validateInput(this.state);

	// 	if(!isValid){
	// 		this.setState({ errors });
	// 	}
		
	// 	return isValid;
	// }

	onSubmit(event){
		event.preventDefault()
		console.log(this.state)

		if(this.isValid){
			// Post student to firebase here
			this.props.studentSignupRequest(this.state)
			Console.log("Submitting student")
		}
	}

	onChange(event){
		this.setState({ [event.target.name]: event.target.value })
	}

	render(){
		return (
			<form onSubmit={this.onSubmit}>
		    	<div className="form-group">
					<input 
						onChange = {this.onChange}
						value = {this.state.name}
						name="name" 
						className="form-control" 
						id="exampleInputEmail1" 
						aria-describedby="nameHelp" 
						placeholder="Your Name" />
				</div>
				<div className="form-group">
					<input 
						onChange = {this.onChange}
						value = {this.state.email}
						name="email" 
						className="form-control" 
						id="exampleInputEmail1" 
						aria-describedby="emailHelp" 
						placeholder="Email" />
				</div>
				<div className="form-group">
					<input 
						onChange = {this.onChange}
						value = {this.state.school}
						name="school" 
						className="form-control" 
						id="exampleInputSchool1" 
						aria-describedby="schoolHelp" 
						placeholder="School" />
				</div>
				<div className="row">
					<div className="form-group col-xs-6">
						<input 
						onChange = {this.onChange}
						value = {this.state.education}
						name="education" 
						className="form-control" 
						id="exampleInputEducation1" 
						aria-describedby="educationHelp" 
						placeholder="Education" />
					</div>
					<div className="form-group col-xs-6">
						<input 
						onChange = {this.onChange}
						value = {this.state.year}
						name="year" 
						className="form-control" 
						id="exampleInputYear1" 
						aria-describedby="yearHelp" 
						placeholder="Year" />
					</div>
				</div>
				<button type="submit" className="btn btn-primary">
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