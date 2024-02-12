import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from '../HomeScreen'
const Router = () => {
  return (
    <main>
        <Routes>
          <Route path='/'  element={<HomeScreen/>}/>
        </Routes>
    </main>
  )
}

export default Router