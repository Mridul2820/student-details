import React, { useContext } from 'react'
import UserContext from '../context/userContext';

const DashBoard = () => {
    const { user } = useContext(UserContext)

    console.log("user", user);
    return (
        <div>
            dash
        </div>
    )
}

export default DashBoard
