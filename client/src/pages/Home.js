import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BUTTON_STYLES, LINK_STYLES } from '../components/styles'
import ChapDisplay from '../components/ChapDisplay'
import { MainGraphic } from '../assets/MainGraphic'
import { AuthContext } from '../components/context/authContext'

export const Home = () => {

    const { user, logout } = useContext(AuthContext)

    const onLogout = () => {
        logout();
    }

    return (
        <>
            <MainGraphic />
            {user ? 
                <button style={BUTTON_STYLES} onClick={onLogout}>logout</button> 
                : 
                <>
                <button style={BUTTON_STYLES}><Link to='/register' style={LINK_STYLES}>sign up</Link></button>
                <button style={BUTTON_STYLES}><Link to='/login' style={LINK_STYLES}>login</Link></button>
                </>
            }       
            <ChapDisplay />
        </>
    )
}
