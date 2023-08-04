import Navbar from "./navbar";
import { useState } from "react";
const { Box, Flex, Heading, Text, Select, Input, Button } = require("@chakra-ui/react")



const Login =()=>{
   
        const [email,setEmail]=useState("");
    const [password,setPass]=useState("");
   

    const handleSubmit=()=>{
        const payload={
            email,
            password,
          
        }

        fetch ("http://localhost:8080/user/login",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body :JSON.stringify(payload)
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            if(res.token){
                localStorage.setItem("pscToken",res.token)
            }
        })

        .catch((err)=>console.log(err))
    }
    
    return (
       
          <Box >
            <Navbar/>
          
            <Text>login here</Text>
            <Box>
                <Input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                <Input type="text" placeholder="Password" onChange={(e)=>setPass(e.target.value)}/>
               
                <Button onClick={handleSubmit}>Login</Button> 
            </Box>

          </Box>
      
    )
    
}
export default Login;