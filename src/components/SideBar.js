import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SideBar = () => {

    return (
        <Container>
            <ul>
                <li>Students</li>
                <li>
                    <Link to="/students">- View Students</Link>
                </li>
                <li>
                    <Link to="/student/add">- Add Student</Link>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </Container>
    )
}

const Container = styled.div`
    width: 300px;
    height: calc(100vh - 70px);
    border: 1px solid #000;

    ul {
        list-style: none;

        li {
            border-bottom: 1px solid #000;
            height: 40px;
            display: flex;align-items: center;
            padding-left: 10px;
            cursor: pointer;
        }
    }
`

export default SideBar
