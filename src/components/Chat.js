import Message from "./Message";
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';


function Chat(props){
   let socket = props.connect    

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
   
    // useEffect(() =>{
    //      socket.on("Send",(message) =>{
        
    //     console.log(message)
    // })
        
    // },[])

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