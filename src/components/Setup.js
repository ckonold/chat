import React, { useState } from 'react';


function Setup(props){
    const [tempName, setTempName] = useState("")
    const [error,setError] = useState();

    function monitorChange(e){
           setTempName(e.target.value)
    }

    function click(e){
        e.preventDefault()
        if(tempName === ""){
            setError("Name Cannot Be Empty")
        }
        else if(tempName.length < 3 ){
            setError("Name has to be at least 3 characters.")
        }
        else if(tempName === "blank" || tempName === "Blank"){
            setError("Name Cannot Be Blank ")
        }
        else{
            props.nameSetter(tempName)
        }
        
    }

    return(
        <form>
            <h3>{error}</h3>
            <input onInput={monitorChange}></input>
            <button onClick={click}>Set Name</button>
        </form>
    )
}

export default Setup; 