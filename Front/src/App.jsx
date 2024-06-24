import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import HomePage from './pages'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
    </Routes>
  )
}

export default App
