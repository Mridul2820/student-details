import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../GlobalStyles';

const Login = () => {

    return (
        <LoginContainer>
            <LoginMain>
                <h1>Login to Your Account</h1>
                <Form>
                    <InputGroup>
                        <label>Email ID</label>
                        <input 
                            aria-label="Enter Your Email Address"
                            type="email" 
                        />
                    </InputGroup>
                    <InputGroup>
                        <label>Password</label>
                        <input
                            aria-label="Enter Your Password"
                            type="password"   
                        />
                    </InputGroup>
                    <Button>
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

const SignupLink = styled.div`
    text-align: center;
    margin-top: 15px;

    a {
        color: blue;
    }
`

export default Login
