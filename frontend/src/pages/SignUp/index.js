import { useState, useEffect } from 'react';
import { signUp } from '../../utils/api';
import { useNavigate } from 'react-router-dom';


export default function SignUp(props) {
	const initialState = { username: '', password: '' };
	const [formState, setFormState] = useState(initialState);
	const navigate = useNavigate();

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.name]: event.target.value })};
		
		function handleSubmit(event) {
			event.preventDefault();
			signUp(formState).then((data) => {
				localStorage.token = data.token;
				localStorage.user_Id = data.user._id;
				props.setUser(data.user);
			});
			navigate('/user/login')
		};

		return (
			<div className='card signup-form' style={{ width: '20rem' }}>
				<div className='card-body'>
					<h1>Sign Up</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor='username' className='form-label'>
							<p>Username</p>
							<input
								className='form-control'
								type='text'
								name='username'
								value={formState.username}
								onChange={handleChange}
								required
							/>
						</label>
						<label htmlFor='password' className='form-label'>
							<p>Password</p>
							<input
								className='form-control'
								type='password'
								name='password'
								value={formState.password}
								onChange={handleChange}
								required
							/>
						</label>
						<button className='btn btn-primary' type='submit'>
							Sign Up
						</button>
					</form>
				</div>
				
			</div>
		);
	}
