import React,{useState} from "react";

export default Login = () => {
    const [email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        console.log(email);
        }
    return (
        <>
        <form onSubmit ={handleSubmit}>
            <lable for="email">email</lable>
            <input type="email" placeholder="enter email-id" id="email" name="email"/>
            <lable for="email">password</lable>
            <input type="password" placeholder="*********" id="password" name="password"/>
            <button>Log In</button>
           </form> 
           <button>Don't have an account? register here.</button>
           </>
    )
}