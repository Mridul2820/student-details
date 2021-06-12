import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <LoginContainer>
            <LoginMain>
                <h1>Login to Your Account</h1>
                <Form>
                    <InputGroup>
                        <label>Email ID</label>
                        <input type="email" />
                    </InputGroup>
                    <InputGroup>
                        <label>Password</label>
                        <input type="password" />
                    </InputGroup>
                    <Button type="submit">Submit</Button>
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
