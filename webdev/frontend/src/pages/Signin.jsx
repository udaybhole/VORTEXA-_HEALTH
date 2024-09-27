import { useNavigate } from "react-router-dom"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useState } from "react"
import axios from "axios"
import { AppBar } from "../components/Appbar"




export const Signin = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("")
  const [password, setPassword] = useState("")
  return <div>
    <div>
      <AppBar></AppBar>
    </div>




   <div className="bg-slate-300 h-screen flex justify-center">

    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials..."} />

        <InputBox onChange={e => {
          setusername(e.target.value)
        }} placeholder="udaybhole@gmail.com" label={"Email"} />

        <InputBox onChange={e => {
          setPassword(e.target.value)
        }} placeholder="123456" label={"Password"} />


        <div className="pt-4">
          <Button onClick={async () => {

            const response = await axios.post("http://localhost:3000/api/user/signin", {
              username,
              password
            })

            localStorage.setItem("token", response.data.token);
            navigate("/category")
          }} label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have a account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
    </div>
  </div>
}
