import React, { useEffect } from 'react';
import Signup from '../components/Authentication/Signup';
import Login from '../components/Authentication/Login';
import {Box,Text, Container, Tab, Tabs, TabList, TabPanels, TabPanel} from '@chakra-ui/react';
import { useHistory } from "react-router-dom";

const Homepage = () => {


  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
        <Box d="flex" 
        justifyContent='center'
        p={3}
        bg={'white'}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="work sans" color='black' textAlign='center'>TalkTime</Text>
        </Box>
        <Box bg='white'color='black' w="100%" p={4} borderRadius="lg" borderWidth="1px" >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel><Login/></TabPanel>
            <TabPanel><Signup/></TabPanel>
          </TabPanels>
        </Tabs>
        </Box>
    </Container>
  )
}

export default Homepage