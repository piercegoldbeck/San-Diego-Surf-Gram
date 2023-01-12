
import Chat from '../../components/Chat';

export default function Home(props) {
	return (
		<div className='Home page'>
			
			<div className='comment-section'>
				<Chat />
			</div>
		</div>
	);
}