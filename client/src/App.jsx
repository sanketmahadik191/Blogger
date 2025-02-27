
import { Routes ,Route } from 'react-router-dom'
import './App.css'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
import AddBlog from './pages/AddBlog'
import BlogDetail from './pages/BlogDetail'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/add-blog' element={<AddBlog/>} />
      <Route path='/blog/:id' element={<BlogDetail/>} />
    </Routes>
    </>
  )
}

export default App
