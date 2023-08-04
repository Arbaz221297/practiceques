import Navbar from "./navbar";
import { useEffect, useState } from "react";
const { Box, Flex, Heading, Text, Select, Input, Button } = require("@chakra-ui/react")



const Notes =()=>{
   
        const [notes,setNotes]=useState("");
         const token =localStorage.getItem("pscToken")
         const getData=()=>{
            fetch ("http://localhost:8080/notes",{
                method:"GET",
                headers :{
                    'Authorization':`Bearer ${token}`
                }
            })
            .then((res)=>res.json())
            .then((res)=>console.log(res))
            .catch((err)=>console.log(err))
           }
   useEffect(()=>{
    getData();


   },[])
   

  if(!localStorage.getItem("pscToken")){
    return <Heading> pl. Login</Heading>
  }
    
    return (
       
          <Box >
            <Navbar/>
          
            <Text>Notes here</Text>
            {
                notes && notes.localeCompare((note,index)=>{
                    return <Box><Text>{note.Heading}</Text>
                    <Button>DELETE</Button></Box>
                })
            }
          

          </Box>
      
    )
    
}
export default Notes;