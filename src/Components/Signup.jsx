import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setname] = useState("");
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();

    const Register = async() => {
      
        try{
        await axios.post("", {name, UserName, Password});
        navigate('/Login')


        }
        catch(err){
            console.log({error: err})
        }

    }

  return (
    <div>
        <button onClick={Register}>Submit</button>
    </div>
  )
}

export default Signup