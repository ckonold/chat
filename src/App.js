import React, { useState } from 'react';
import Setup from './components/Setup';
import Chat from './components/Chat';



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
          <Chat user = {name}></Chat>
      </div>
    )
  }
}

export default App;
