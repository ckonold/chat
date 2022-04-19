import Message from "./Message";
import React, { useState } from 'react';
import { io } from 'socket.io-client';
const socket = io.connect("http://localhost:3001");

function Chat(props){
    

    const [messages, setMessages] = useState([]);
    const [sendMess, setSendMess] = useState();
    const [enteredText, setEnteredText] = useState()
    function sendMessage(e){
        e.preventDefault()
        socket.emit("message",{message: sendMess, user: props.user})
        setMessages([...messages,sendMess])
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
          setSendMess("")
    
    }
    function handleChange(e){
        setSendMess(e.target.value);
    }

    const log = messages.map((message) =>
            <Message text = {message} user = {props.user}></Message>
    )

    return(
        <div>
            <div>
                    {log}     
            </div>
            <form>
              
                <input onChange={handleChange}></input>
                <button onClick={sendMessage}>Send!</button>
            </form>

        </div>
    )

}

export default Chat; 