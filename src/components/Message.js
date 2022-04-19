function Message(props){
    return(
        <div>
            <p> <b>{props.user}: </b> {props.text}</p>
        </div>
    )
}

export default Message; 