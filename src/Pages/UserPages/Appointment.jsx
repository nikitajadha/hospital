import { useEffect, useState } from 'react';
import './Appointment.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {

    const navigate = useNavigate()    
    
    const roles = ['Heart Checkup', 'Eye Checkup', 'Hearing Test']

    const { register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()


    const [
        record,
         setRecord
        ] = useState(
        localStorage.getItem('record') != null ? JSON.parse(localStorage.getItem('record')) : []
    )

    useEffect(() => {
        localStorage.setItem('record', JSON.stringify(record))
    }, [record])


   
    const onLoginClick = (data) => {
        console.log(data);
        setRecord([...record, data]);
        reset();
        toast.success("Student Details Added Successfully !!");

    };
    navigate('/admin/appointment')


    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8} Admin
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
            <div className='appointment'>
                <form onSubmit={handleSubmit(onLoginClick)}>
                    <div className='titel'>
                        <h2>Doctor Appointment Form</h2>
                    </div>

                    <div className='input-feild'>
                        <label>Fullname</label>
                        <input type="text"{...register('fullname', {
                            required: 'Fullname is Required !!'
                        })}></input>
                        {errors.fullname && <p>{errors.fullname.message}</p>}
                    </div>


                    <div className='input-feild'>
                        <label>Email</label>
                        <input type="email"{...register('username', {
                            required: 'Username is Required !!',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid Username'
                            }
                        })}></input>
                        {errors.username && <p>{errors.username.message}</p>}
                    </div>

                    <div className='input-feild'>
                        <label>Moblie No.</label>
                        <input type="number"{...register('phone', {
                            required: 'Phone Number is Required !!'
                        })}></input>
                        {errors.phone && <p>{errors.phone.message}</p>}
                    </div>

                    <div className='input-feild'>
                        <label>Date of Birth</label>
                        <input type="date"{...register('date', {
                            required: 'Date of Birth is Required !!'
                        })}></input>
                        {errors.date && <p>{errors.date.message}</p>}
                    </div>

                    <div className='input-feild'>
                        <label>Address</label>
                        <input type="text"{...register('address', {
                            required: 'Address is Required !!'
                        })}></input>
                        {errors.address && <p>{errors.address.message}</p>}
                    </div>

                    <div className='input-feild'>
                        <label>Select which appointment type(s) you require</label>
                        <select {...register('apptmt', {
                            required: 'Appointment type is Required !!'
                        })}>
                            <option value='' selected>Select Appointment Type</option>
                            {
                                roles.map((item, index) => {
                                    return (
                                        <option key={index} value={item}>{item}</option>
                                    )
                                })
                            }
                        </select>
                        {errors.apptmt && <p>{errors.apptmt.message}</p>}
                    </div>

                    <div className='button-fd'>
                        <button type='submit'>SEND</button>
                    </div>
                </form>


            </div>
        </>
    )
}
