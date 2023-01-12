
// packages
import { useState, useEffect } from 'react';
// utils
import { createChat, showChat } from '../../utils/api';

export default function Chat(props) {
	const [formData, setFormData] = useState({ chat: '' });
	const [showForm, setShowForm] = useState(false);
	const [chats, setChats] =useState([]);
	const [displayChats, setDisplayChats] = useState(false)
	
	// get chat
	function getChats() {
		showChat().then((data) => setChats(data))
       
	}
    
	
	useEffect(() => {
		getChats();
	}, [])

	//handles
	function handleChange(event) {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		createChat(formData).then(() => getChats()).finally(() => setFormData({ chat: "" }));
	}

	
	// render JSX
	return (
		<div className='chat-container'>	
			<div className="">
				<button className="btn btn-primary" onClick={()=>{setDisplayChats(!displayChats)}}>chats</button>
			</div>
			{displayChats ? <div className="chat-display">
				<div className='chat-form'>
					<button
						className='btn btn-primary'
						onClick={() => {
							setShowForm(!showForm);
						}}>
						Leave a chat
					</button>
					{showForm ? (
						<form>
							<input
								name='chat'
								className='form-control'
								type='text'
								placeholder='...'
								onChange={handleChange}
								value={formData.chat}
							/>

							<button className='btn btn-primary' onClick={handleSubmit}>
								Chat
							</button>
						</form>
					) : null}
				</div>
				<div className='display-chats'>
					<h1><u>Chats</u></h1>
					{console.log(chats)}
					{chats.map((chat, i) => (
						
						<div key={i}> {chat.user?.username || 'Anonymous'}: {chat.chat} </div>
                        
					))}
				</div>
			</div> : null}
			
		</div>
	);
}