import { useState } from 'react'
import { loginToAccount } from '../../utils/api';
import { useNavigate } from 'react-router-dom';


export default function LogIn(props) {
    
    //states for login page
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        loginToAccount(formState)
            .then((data) => {
                localStorage.token = data.token;
                props.setLogInStatus(true)
                props.setUser(data.user)
            })
            navigate('/')
    }

    return (
			<div>
				<div>
					<h1>Login</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor='username'>
							Username:{' '}
						</label>
						<input
							type='text'
							name='username'
							onChange={handleChange}
							defaultValue={formState.username}
						/>
						<label htmlFor='password'>
                            <h1></h1>
							Password:{' '}
						</label>
						<input
							type='password'
							name='password'
							onChange={handleChange}
							defaultValue={formState.password}
						/>
						<button type='submit'>
							Login
						</button>
					</form>
				</div>
			</div>
		);
}