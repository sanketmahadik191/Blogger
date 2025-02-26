
import { Routes ,Route } from 'react-router-dom'
import './App.css'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </>
  )
}

export default App
