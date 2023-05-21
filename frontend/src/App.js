import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './componenets/Login'
import Signup from './componenets/Signup'
import Home from './componenets/Home'
import Store from './componenets/Store/Store'
import Find from './componenets/homeitems/Find'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/store' element={<Store/>}></Route>
        <Route path='/find' element={<Find/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
