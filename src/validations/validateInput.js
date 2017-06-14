import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (data.name.length == 0) {
    errors.name = 'This field is required';
  }
  if (data.email.length == 0) {
    errors.email = 'This field is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (data.school.length == 0) {
    errors.school = 'This field is required';
  }
  if (data.education.length == 0) {
    errors.education = 'This field is required';
  }
  if (data.year.length == 0) {
    errors.year = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
