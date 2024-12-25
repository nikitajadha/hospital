import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './User.css';
import { useEffect } from 'react';

export default function User() {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('isLogin') === null) {
            navigate('/')
        }
    },[])
    const Logout = () => {
        localStorage.removeItem('isLogin')
        navigate('/')
    }

    return (

        <>
            <div className='header'>
                <h2>Patient</h2>
                <div className='links'>
                    <NavLink to='home'>Home</NavLink>
                    <NavLink to='appointment'>Appointment</NavLink>
                    <NavLink to='profile'>Profile</NavLink>
                    <NavLink to='status'>Appointment Status</NavLink>
                    <button onClick={Logout} type='submit'>Logout</button>
                </div>
            </div>
            
            <Outlet />

        </>
    )
}