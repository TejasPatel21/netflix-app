import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false)
    const history = useNavigate()

    const handleScroll = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        }
        else{
            handleShow(false)
        }
    }
   

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll",handleScroll)
        // eslint-disable-next-line
    })

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className='nav_content'>
                <img onClick={() => {history('/')}} className='nav_logo' src='https://www.abacustechnologies.com/wp-content/uploads/2020/05/580b57fcd9996e24bc43c529.png'
                    alt=''
                />
                <img onClick={() => {history("/profile")}} className='nav_avatar' src='https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png'
                    alt=''
                />
            </div>
        </div>
    )
}

export default Nav