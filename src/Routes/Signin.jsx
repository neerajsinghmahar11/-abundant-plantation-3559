import { NavLink } from 'react-router-dom';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useState ,useEffect,useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
  export default function Signin() {
    const {authState} = useContext(AuthContext)
    const [loginData,setLoginData]=useState([]);
    const [inputLogin,setInputLogin]=useState({
      email:"",
      password:""
    });
    let setLocal;
    let Name=JSON.parse(localStorage.getItem("userName"));
    
    let name;
    let value;
    const handleInput=(e)=>{
      name=e.target.name;
      value=e.target.value;
      setInputLogin({...inputLogin, [name]:value });
    }
    
    // if(Name=true){
    //   let form=document.getElementById("loginForm");
    //   form.innerHTML=null;
    // }

    useEffect(()=>{
      axios
        .get("https://cheerful-dungarees-slug.cyclic.app/users")
            .then(data => {
                setLoginData(data.data)
            })
            .catch(error => {
                console.log(error)
              });
    },[]);
    const checkLoginData=()=>{
      if(inputLogin.email!=="" && inputLogin.password!==""){
            
              let checkup=false;
              loginData.map((el)=>{
            if(el.Email==inputLogin.email && el.Password ==inputLogin.password){
              checkup=true;
              setLocal=el.firstName;
            }
          });
          console.log(checkup)
          if(!checkup){
            alert("wrong Details")
          }else{
            alert("success")
            authState.isAuth=true;
            localStorage.setItem("userName",JSON.stringify(setLocal));
          }

          }else{
            if(inputLogin.email=="" && inputLogin.password!==""){
              
              return alert("Fill the username");
            }
            else if(inputLogin.password==="" && inputLogin.email!==""){
              return alert("Fill the password");
            }
            else{
              return alert("Fill username and password");
            }
          }
          
        }

    return(
      <div>{Name ? <button style={{backgroundColor:"red",marginTop:"120px",color:"white",fontSize:"20px", padding:"6px",borderRadius:"20px"}}>Logout</button> : "" } 
            <Flex
            id='loginForm'
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input name='email' value={inputLogin.email} id='email' onChange={handleInput} required type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input name='password' value={inputLogin.password} id='password' onChange={handleInput} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                
                <Stack  pt={6}>
                  <Text align={'center'}>
                    Don't have an account?
                    <NavLink to="/signup"><Link color={'blue.400'}>Create Account</Link></NavLink>
                  </Text>
                </Stack>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                onClick={checkLoginData}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
      </div>
    )
  }