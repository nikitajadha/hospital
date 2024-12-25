import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './Admin.css';
import { useEffect } from 'react';

export default function Admin() {

  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('isLogin') === null) {
      navigate('/')
    }
  }, [])
  const Logout = () => {
    localStorage.removeItem('isLogin')
    navigate('/')
  }


  return (
    <>
      <div className='header'>
        <h2>Doctor</h2>
        <div className='links'>
          <NavLink to='dashboard'>Dashboard</NavLink>
          <NavLink to='doctors'>Doctors</NavLink>
          <NavLink to='Appointment'>Appointment</NavLink>
          <NavLink to='Patient'>Patients</NavLink>
          <button onClick={Logout} type='submit'>Logout</button>

        </div>
      </div>
      <Outlet />


    </>
  )

}