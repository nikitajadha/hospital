import { useState } from 'react';
import './Doctors.css';

export default function Doctors() {
    const [prod, setProd] = useState([
        {
            image: 'https://wallpapers.com/images/hd/doctor-pictures-l5y1qs2998u7rf0x.jpg',
            name: 'Dr. Abhi Sharma',
            expert: 'Eye Expert'
        },
        {
            image: 'https://www.expatfocus.com/stable/wp-content/uploads/2023/07/Doctors.png',
            name: 'Dr. Nisha Sakhare',
            expert: 'Heart Expert'
        },
        {
            image: 'https://www.humanitas.net/content/uploads/2017/10/doctors.jpg',
            name: 'Dr. Nita Patil',
            expert: 'Hearing Expert'
        },
    ]);


    return (
        <>
            <div className="container">
                
                {
                    prod.map((item, key) => {
                        return (
                            <div className="card" key={key}>
                                <img src={item.image} alt={item.name} />
                                <h2>{item.name}</h2>
                                <p>{item.expert}</p>
                                <button>More Info</button>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}

    
    