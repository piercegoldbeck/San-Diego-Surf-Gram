
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

//components for app
import Chat from "./components/Chat";
//pages for app
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {

  return (
    <div className="App">
       <h1>SAN DIEGO SURFGRAM</h1>
       check out surf chat below to connect with others:
      <Chat />
      <SignUp/>
    
    </div>
  );
}

export default App;
