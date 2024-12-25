import { useState } from 'react';
import './Dashboard.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Dashboard(){
    const [date, setDate] = useState(new Date());
    return(
        <>
           <div className='trend'>
                <div className="box">
                    <div className='earn'>
                        <p>Today's Earnings</p>
                        <h2>7000</h2>
                    </div>
                    <div className='earn'>
                        <p>Monthly Earnings</p>
                        <h2>$100</h2>
                    </div>
                    <div className='earn'>
                        <p>Progress</p>
                        <h2>75%</h2>
                    </div>
                </div> 
                <div className="box2">
                    <div className='earn1'>
                       
                    </div>
                    <div className='earn2'>
                        <h2>Doctor's Appointments</h2>
                        <div className='index'>
                            <Calendar onChange={setDate} value={date} />
                        </div>
                        <div className='earn-child'>
                           <div className="earn-c1">
                                <p>Heart Checkup</p>
                           </div>
                           <div className="earn-c1">
                                <p>Hearing Checkup</p>
                           </div>
                           <div className="earn-c1">
                                <p>Eye Checkup</p>
                           </div>
                        </div>
                    </div>
                </div>   
            </div>
          


        </>
    )
}