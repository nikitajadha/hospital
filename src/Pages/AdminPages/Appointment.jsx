import { NavLink } from 'react-router-dom';
import './Appointment.css'

export default function Appointment() {

    const record = localStorage.getItem('record') ? JSON.parse(localStorage.getItem('record')) : []

    return (
        <>
            <div className="appointment-container">
                <table>
                    <thead>
                    <tr>
                        <th>Fullname </th>
                        <th>Email </th>
                        <th>Moblie No.</th>
                        <th>Address </th>
                        <th>Date of Birth </th>
                        <th>Appointment Type</th> 
                    </tr>
                    </thead>
                    <tbody>
                            {
                             record.length === 0 ? (
                                <tr>
                                    <td colSpan="6">No Record Available</td>
                                </tr>
                            ) : (
                                record.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.fullname}</td>
                                        <td>{item.username}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.address}</td>
                                        <td>{item.date}</td>
                                        <td>{item.apptmt}</td>                                          
                                    </tr>
                                ))
                            )}
                        </tbody>
                </table>
            </div>
        </>
    )
}