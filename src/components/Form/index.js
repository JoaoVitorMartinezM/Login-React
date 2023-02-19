import React, {useState} from "react";
import "./Form.css";
import Label from "../Label"
import Input from "../Input"
import Button from "../Button";


const Form = (props, ) => {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Login: ${login}, Password: ${pass}`);
     
      localStorage.setItem("autenticacao",JSON.stringify({login, pass}));
      
      
      
      setPass('');
      setLogin('');
    }

    return(
        
       
        <form className="container-forms" onSubmit={handleSubmit}>

            <Label name="Login"/>
            <Input placeholder="Type your username or e-mail" value={login} onChange={(event) => setLogin(event.target.value)}/>

            <Label name="Password"/>
            <Input placeholder="Type your username or e-mail" value={pass} onChange={(event) => setPass(event.target.value)}/>

            <div className="div-botao">
                <Button text="Click-Me"/>
            </div>

        </form>

            


    )

}

export default Form;