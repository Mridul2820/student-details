import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase/firebase'

const Login = () => {
    const history = useHistory()

    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    const isInvalid = password === '' || emailAddress === ''

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            await auth.signInWithEmailAndPassword(emailAddress, password)
            history.push('/')
        } catch (error) {
            setPassword('')
            setError(error.message)
        }
    }

    return (
        <LoginContainer>
            <LoginMain>
                <h1>Login to Your Account</h1>
                <Form onSubmit={handleLogin} method="POST">
                    <InputGroup>
                        <label>Email ID</label>
                        <input 
                            aria-label="Enter Your Email Address"
                            type="email" 
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                    </InputGroup>
                    <InputGroup>
                        <label>Password</label>
                        <input
                            aria-label="Enter Your Password"
                            type="password"
                            onChange={({ target }) => setPassword(target.value)}
                            autoComplete="on"    
                        />
                    </InputGroup>
                    <Button 
                        type="submit" 
                        disabled={isInvalid}
                    >
                        Submit
                    </Button>
                </Form>
                <SignupLink>
                    <p>Don't have an acoount?</p>
                    <Link to="/signup">Sign up</Link>
                </SignupLink>
                
            </LoginMain>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #fff;
`

const LoginMain = styled.div`
    background: #eee;
    padding: 30px 40px;
    border: 1px solid #444;

    h1 {
        font-size: 24px;
        text-align: center;
        margin-bottom: 15px;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    label {
        margin-bottom: 5px;
        font-size: 14px;
    }

    input {
        padding: 5px;
        width: 250px;
    }
`

const Button = styled.button`
    padding: 5px 15px;
    background: #ccc;
    border: 1px solid #444;
    margin-top: 10px;
`

const SignupLink = styled.div`
    text-align: center;
    margin-top: 15px;

    a {
        color: blue;
    }
`

export default Login
