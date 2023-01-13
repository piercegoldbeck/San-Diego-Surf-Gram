
import { useState } from "react";


//components for app
import Chat from "./components/Chat";
import Post from "./components/Post";
//pages for app
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {

  const [isLoggedIn, setLoginStatus] = useState(false);
	const [user, setUser] = useState([]);
	// Api data

  return (
    <div className="App">
       <h1><u>SAN DIEGO SURFGRAM</u></h1>
       {isLoggedIn && <h4>...YOU ARE LOGGED IN TO SAN DIEGO SURF GRAM AND CAN LEAVE A CHAT OR POST</h4>}
       {!isLoggedIn && <h4>...YOU HAVE LOGGED OUT OF SAN DIEGO SURF GRAM AND CANNOT LEAVE A CHAT OR POST</h4>}
       <button onClick={()=>{setLoginStatus(false); localStorage.clear() } }>
          LogOut
       </button>
       <h1></h1>
       <u>check out surf chat below to connect with others:</u>
      <Chat />
      <h1></h1>
      <u>check user posts to view possible surf locations:</u>
      <Post />
      <SignUp
       isLoggedIn={isLoggedIn} 
       setLogInStatus={setLoginStatus} 
       setUser={setUser}
      />
    	<Login
				isLoggedIn={isLoggedIn}
				setLogInStatus={setLoginStatus}
				setUser={setUser}
				user={user}
			/>
    </div>
  );
}

export default App;
