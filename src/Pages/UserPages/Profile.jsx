import { useNavigate } from 'react-router-dom'
import './Profile.css'
import { useEffect } from 'react'

export default function Profile(){
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('isLogin') === null) {
            navigate('/')
        }
    }, [])
    return(
        <>
            <div className="profile-container">
                <div className="cards">
                    <div className="images">
                        <img src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' width={'60%'} height={'200px'}></img>
                    </div>
                    <div className="info">
                        <h4>Name : <span>{JSON.parse(localStorage.getItem('isLogin')).fullname}</span></h4>
                        <h4>Email Id : <span>{JSON.parse(localStorage.getItem('isLogin')).username}</span></h4>   
                        <h4>Password : <span>{JSON.parse(localStorage.getItem('isLogin')).password}</span></h4>                     
                    </div>
                </div>
            </div>
        </>
    )
}