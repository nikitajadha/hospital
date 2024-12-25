import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import User from './Pages/User';
import Dashboard from './Pages/AdminPages/Dashboard';
import Appointment from './Pages/UserPages/Appointment';
import Appointment1 from './Pages/AdminPages/Appointment';
import Profile from './Pages/UserPages/Profile';
import Home from './Pages/UserPages/Home';
import Doctors from './Pages/AdminPages/Doctors';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/admin' Component={Admin}>
          <Route path='dashboard' Component={Dashboard} />
          <Route path='appointment' Component={Appointment1}/>
          <Route path='doctors' Component={Doctors}/>
        </Route>
        <Route path='/user' Component={User}>
          <Route path='home' Component={Home}/>
          <Route path='appointment' Component={Appointment}/>
          <Route path='profile' Component={Profile}/>
        </Route>
        <Route path='*' element={NotFound()} />
      </Routes>
    </>
  );
  function NotFound() {
    const navi = useNavigate()
    const goLoginPage = () => {
      navi('/')
    }
    return (
      <>
        <div className='Nopage'>
          <h2>404 Page is not Found</h2>
          <p>Click Here to visit homepage</p>
          <button onClick={goLoginPage}>Home</button>
        </div>
      </>
    )
  }
}

export default App;