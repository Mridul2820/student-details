import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Signup = () => {

    return (
        <SignupContainer>
            <SignupMain>
                <h1>Create an Account</h1>
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
                    <Button>Submit</Button>
                </Form>
                <LoginLink>
                    <p>Already have an acoount?</p>
                    <Link to="/login">Log in</Link>
                </LoginLink>
                
            </SignupMain>
        </SignupContainer>
    )
}

const SignupContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #fff;
`
const SignupMain = styled.div`
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

const LoginLink = styled.div`
    text-align: center;
    margin-top: 15px;

    a {
        color: blue;
    }
`

export default Signup
