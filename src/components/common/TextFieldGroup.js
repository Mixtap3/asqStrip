import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'

const TextFieldGroup = ({onChange, value, name, placeholder, error, classname, id, aria_describedby}) => {

	console.log("classname: " + classname)
	return (
		<div className={classnames(classname, {'has-error': error})}>
			<input 
				onChange = {onChange}
				value = {value}
				name={name} 
				placeholder={placeholder}
				className="form-control" /> 
			{error && <span className="help-block">{error}</span>}
		</div>
	)
}

TextFieldGroup.propTypes = {

	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	error: PropTypes.string 

}

TextFieldGroup.defaultProps = {
	type: 'text'
}

export default TextFieldGroup