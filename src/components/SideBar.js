import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const SideBar = () => {

    return (
        <Container>
            <ul>
                <li>Students</li>
                <li>
                    <NavLink to="/students" activeClassName="active">
                        - View Students
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/student/add" activeClassName="active">
                        - Add Student
                    </NavLink>
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
    min-height: calc(100vh - 70px);
    border: 1px solid #000;

    ul {
        list-style: none;

        li {
            border-bottom: 1px solid #000;
            min-height: 40px;
            display: flex;align-items: center;
            cursor: pointer;
            max-width: 250px;

            a {
                width: 250px;
                min-height: 40px;
                padding-left: 10px;
                padding-top: 7px;
            }

            .active {
                background-color: #95BCF2;
            }
        }
    }
`

export default SideBar
