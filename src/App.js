import React, { useState } from 'react';
import Setup from './components/Setup';
import Chat from './components/Chat';
import { io } from 'socket.io-client';
const socket = io.connect("http://localhost:3001");


function App() {
  const [name,setName] = useState("");
  if(name == ""){
    return(
      <div>
          <Setup nameSetter = {setName}></Setup>
      </div>
    )
  }
  else{
    return(
      <div>
          <Chat user = {name} connect = {socket}></Chat>
      </div>
    )
  }
}

export default App;
