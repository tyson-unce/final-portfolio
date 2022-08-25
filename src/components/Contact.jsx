import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import './styles/Contact.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const form = useRef();
	const initialValues = { email: '', feedback: '', name: '' };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	setFormErrors(validate(formValues));
	// 	setIsSubmit(true);
	// };
	const sendEmail = (e) => {
		console.log('sent');
		emailjs
			.sendForm(
				'service_mbh5o2s',
				'template_2jdwmbt',
				form.current,
				'tHwndaU8odSAb0r_Z'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		sendEmail();
		event.target.reset();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};
	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmit) {
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
				<form ref={form} className='inputs' onSubmit={handleSubmit}>
					<h1>Contact me</h1>
					<input
						type='name'
						name='name'
						placeholder='firstName lastName'
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
						type='text'
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
						<div className='uiMessage'>
							Thank you for your feedback! I will reach back out to you shortly!
						</div>
					) : (
						''
					)}
					{/* {Object.keys(formErrors).length === 0 && isSubmit ? sendEmail() : ''} */}
				</form>
			</div>
		</div>
	);
};

export default Contact;
