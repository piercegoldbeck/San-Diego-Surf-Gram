
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

//pages for app
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
       this is the start of the app 
      <Chat />
    
    </div>
  );
}

export default App;
