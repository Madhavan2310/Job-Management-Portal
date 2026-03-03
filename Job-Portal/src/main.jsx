import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import Otpverification from './Otp.jsx'
import Dashboard from './Dashboard.jsx'
import Jobform from './jobform.jsx'
import Profileinfo from './Profileinfo.jsx'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './home.jsx'
import Hrlogin from './hrlogin.jsx'
import Hrsignup from './hrsignup.jsx'
import Hrotp from './hrotp.jsx'
import Hrdashboard from './hrdashboard.jsx'

const rout =createBrowserRouter([
  {
    path:'/signup',
    element : <Signup />
  },
  {
    path : '/login',
    element : <Login />
  },
  {
    path : '/otp',
    element : <Otpverification />
  },
  {
    path : '/dashboard',
    element : <Dashboard />
  },
  {
    path : '/profileinfo',
    element : <Profileinfo />
  },
  {
    path : '/jobform',
    element : <Jobform />
  },
  {
    path : '/',
    element : <Home />
  },
  {
    path : '/hr-login',
    element : <Hrlogin />
  },
  {
    path : '/hrsignup',
    element : <Hrsignup />
  },
  {
    path : '/hrotp',
    element : <Hrotp />
  },
  {
    path : '/hrdashboard',
    element : <Hrdashboard />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <RouterProvider router={rout}/>
    </>
  </StrictMode>,
)
