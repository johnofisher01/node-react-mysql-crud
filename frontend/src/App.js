import React from 'react'
import {BrowserRouter,  Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Create from './Components/Create'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
    </Routes> 
    </BrowserRouter>
  )
}

export default App

