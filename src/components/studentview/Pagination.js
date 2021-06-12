import React from 'react'
import styled from 'styled-components'

const Pagination = () => {
    return (
        <Container>
            <ul>
                <li>{`<`}</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>{`>`}</li>
            </ul>
        </Container>
    )
}

const Container = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        display: flex;
        list-style: none;

        li {
            padding: 0 10px;
            color: #5F7EAA;
            font-weight: 600;
            cursor: pointer;
            font-size: 18px;

            &:not(:last-child) {
                border-right: 1px solid #000;
            }
        }
    }
`


export default Pagination
