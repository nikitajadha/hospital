import { useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
    const roles = ['Doctor', 'Patient']
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    useEffect(() => {
        let userObject = JSON.parse(localStorage.getItem('isLogin'))
        if (userObject != null) {
            if (userObject.role === 'Doctor') {
                navigate('/admin')
            }
            else if (userObject.role === 'Patient') {
                navigate('/user')
            }
        }
    }, [])

    const userArray = [
        {
            username: 'aishu@gmail.com',
            password: '1234',
            fullname: 'Aishwarya',
            role: 'Doctor'
        },
        {
            username: 'meena@gmail.com',
            password: '1234',
            fullname: 'Meena',
            role: 'Patient'
        },
        {
            username: 'Disha@gmail.com',
            password: '1234',
            fullname: 'Disha',
            role: 'Patient'
        },
    ]
    const onLoginClick = (data) => {
        let status = false
        let i = 0
        for (i = 0; i < userArray.length; i++) {
            if (data.username === userArray[i].username && data.pwd === userArray[i].password && data.role === userArray[i].role) {
                status = true
                break
            }
        }

        if (status) {
            localStorage.setItem('isLogin', JSON.stringify(userArray[i]))
            if (data.role === 'Doctor') {
                navigate('/admin')
            }
            else if (data.role === 'Patient') {
                navigate('/user')
            }

        } else {
            toast.error('Invalid Password and Username !!!')
            reset()
        }
    }

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
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
            <div className='login-box'>
                <form onSubmit={handleSubmit(onLoginClick)}>
                    <div className='titel'>
                        <h2>Login</h2>
                    </div>
                    <div className='input-feild'>
                        <label>UserName</label>
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
                        <label>Password</label>
                        <input type="password"{...register('pwd', {
                            required: 'Password is Required !!'
                        })}></input>
                        {errors.pwd && <p>{errors.pwd.message}</p>}
                    </div>
                    <div className='input-feild'>
                        <label>Role</label>
                        <select {...register('role', {
                            required: 'Role is Required !!'
                        })}>
                            <option value='' selected>Select Role</option>
                            {
                                roles.map((item, index) => {
                                    return (
                                        <option key={index} value={item}>{item}</option>
                                    )
                                })
                            }
                        </select>
                        {errors.role && <p>{errors.role.message}</p>}
                    </div>
                    <div className='button-field'>
                        <button type='submit'>Login</button>
                    </div>
                </form>


            </div>
        </>
    )
}
