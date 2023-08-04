import Navbar from "./navbar";

import { useState } from "react";
const { Box, Flex, Heading, Text, Select, Input, Button } = require("@chakra-ui/react")

const Signup =()=>{
    const [email,setEmail]=useState("");
    const [password,setPass]=useState("");
    const [age,setAge]=useState("");

    const handleSubmit=()=>{
        const payload={
            email,
            password,
            age
        }

        fetch ("http://localhost:8080/user/signup",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body :JSON.stringify(payload)
        })
        .then((res)=>res.json())
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }
    
    return (
       
          <Box >
            <Navbar/>
          
            <Text>Signup here</Text>
            <Box>
                <Input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                <Input type="text" placeholder="Password" onChange={(e)=>setPass(e.target.value)}/>
                <Input type="text" placeholder="Age" onChange={(e)=>setAge(e.target.value)}/>
                <Button onClick={handleSubmit}>Register</Button> 
            </Box>

          </Box>
      
    )
}
export default Signup;