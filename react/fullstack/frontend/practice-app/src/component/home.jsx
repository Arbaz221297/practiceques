import Navbar from "./navbar";

const { Box, Flex, Heading, Text, Select } = require("@chakra-ui/react")

const Home =()=>{
    return (
        <Box>
            <Flex>
                <Navbar/>
                <br/>

               
               
            </Flex>
            <Heading>Home</Heading>
        
        </Box>
    )
}
export default Home;