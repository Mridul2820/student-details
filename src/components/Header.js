import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { AiFillBell } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'

const Header = () => {
    return (
        <Container>
            <LeadLogo to="/">LEAD Logo</LeadLogo>
            <User>
                <AiFillBell size="24px" />
                <FaUserAlt size="18px" />
                <p>Person Name</p>
            </User>
        </Container>
    )
}

const Container  = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 0 10px;
    border: 2px solid #000;
`

const LeadLogo  = styled(Link)`
    padding: 5px 20px;
    border: 2px solid #000;
`

const User = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
        margin-left: 10px;
    }
    
`

export default Header
