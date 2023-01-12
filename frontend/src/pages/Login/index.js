
export default function LogIn(props) {
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
			<div className='card loggin-form' style={{ width: '20rem' }}>
				<div className='card-body'>
					<h1>Login</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor='username' className='form-label'>
							Username:{' '}
						</label>
						<input
							className='form-control'
							type='text'
							name='username'
							onChange={handleChange}
							defaultValue={formState.username}
						/>
						<label htmlFor='password' className='form-label'>
							Password:{' '}
						</label>
						<input
							className='form-control'
							type='password'
							name='password'
							onChange={handleChange}
							defaultValue={formState.password}
						/>
						<button className='btn btn-primary' type='submit'>
							Login
						</button>
					</form>
				</div>
			</div>
		);
}