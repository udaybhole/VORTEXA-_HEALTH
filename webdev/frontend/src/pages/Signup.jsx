import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { AppBar } from "../components/Appbar"


export const Signup = ()=>{

  const [name, setName] = useState("")
  const [username, setusername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();



    return(
        <div>
        <div>
            <AppBar />
        </div>
        

        <div className="bg-slate-300 h-screen flex justify-center">

<div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={e =>{
          setName(e.target.value)
        }} placeholder="Uday" label={"Name"} />


        <InputBox onChange={e =>{
          setusername(e.target.value)
        }} placeholder="udaybhole@gmail.com" label={"Email"} />


        <InputBox onChange={e =>{
          setPassword(e.target.value)
        }} placeholder="******" label={"Password"} />


        <div className="pt-4">
          <Button onClick={async() =>{

           const response = await axios.post("http://localhost:3000/api/user/signup",{
              username ,
              name,
              password
            })

            localStorage.setItem("token",response.data.token);
            navigate("/category")
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>

    </div>
    </div>
    )
}






