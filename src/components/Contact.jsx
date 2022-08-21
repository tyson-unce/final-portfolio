import React from 'react';
import { useState, useEffect } from 'react';
import './styles/Contact.scss';

const Contact = () => {
	const initialValues = { email: '', feedback: '', name: '' };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};

	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(formValues);
		}
	}, [formErrors]);

	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.email) {
			errors.email = 'a valid email address is required';
		} else if (!regex.test(values.email)) {
			errors.email = 'please input correct email address format';
		}
		if (!values.feedback) {
			errors.feedback = 'a message is required';
		}
		if (!values.name) {
			errors.name = 'please input a name';
		}
		return errors;
	};
	return (
		<div className='contact' id='contactpage'>
			<div>
				<form className='inputs' onSubmit={handleSubmit}>
					<h1>Contact me</h1>
					<input
						type='name'
						name='name'
						placeholder='Name'
						value={formValues.name}
						onChange={handleChange}
					/>
					<p className='formErrors'>{formErrors.name}</p>

					<input
						type='email'
						name='email'
						placeholder='name@email.com'
						value={formValues.email}
						onChange={handleChange}
					/>
					<p className='formErrors'>{formErrors.email}</p>
					<input
						name='feedback'
						placeholder='send me a message!'
						value={formValues.message}
						onChange={handleChange}
					/>
					<p className='formErrors'>{formErrors.feedback}</p>

					<button type='submit' name='submit' value='Submit'>
						Send
					</button>
					{Object.keys(formErrors).length === 0 && isSubmit ? (
						<div className='uiMessage'>Thank you for your feedback!</div>
					) : (
						''
					)}
				</form>
			</div>
		</div>
	);
};

export default Contact;
