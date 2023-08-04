import {Box,Button,Flex,Input,Heading} from "@chakra-ui/react"
import { Link } from "react-router-dom";
const Navbar =()=>{
    return (
        <Box width="100%">
          <Flex justify="end" gap="50px">
            <Link to="/"><Heading color="blue">Home</Heading></Link>
            <Link to="/login"><Heading color="blue">login</Heading></Link>      
            <Link to="/signup"><Heading color="blue">Signup</Heading></Link>   
            <Link to="/notes"><Heading color="blue">Notes</Heading></Link>   

          </Flex>
                
        </Box>
    )
}
export default Navbar;