import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getAuth } from "../redux/auth/action"
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
// import { Link } from "react-router-dom"

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

export const Login = () => { 

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")

  const [pass, setPass] = useState("")

  const auth = useSelector(store => store.authData.isAuth)
  const error = useSelector(store => store.authData.error)
  const id = useSelector(store => store.authData.id)
  const load = useSelector(store => store.authData.loading)
  // console.log(error)
  // console.log(id)

  useEffect(() => {

    if (auth) {
      navigate("/")
    }

  }, [auth])

  const handleSubmit = () => {
    const data = {
      email: email,
      password: pass
    }
    dispatch(getAuth(data))
  }

  return (

    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      marginTop='-141px'
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        {error && <div style={{
          textAlign: "center", color: "white", fontSize: '20px',
          borderRadius: '10px',
          background: 'red'
        }}>Wrong Credentials</div>}
        {load && <div style={{
          textAlign: "center", color: "white", fontSize: '20px',
          borderRadius: '10px',
          background: 'blue'
        }}>Loading</div>}
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={e => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={e => setPass(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                onClick={() => handleSubmit()}
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

  )
}

