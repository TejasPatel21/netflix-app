import { getAuth } from 'firebase/auth';
import React, { useContext } from 'react'
import { Users } from '../Context';
import Nav from '../Nav';
import './ProfileScreen.css';

function ProfileScreen() {
    const { use } = useContext(Users);
    const auth = getAuth();
    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen_body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen_info'>
                    <img src='https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png'
                        alt=''
                    />
                    <div className='profileScreen_details'>
                        <h2>{use.email}</h2>
                        <div className='profileScreen_plans'>
                            <h3>Plans</h3>
                            <button onClick={() => auth.signOut()} className='profileScreen_signOut'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen