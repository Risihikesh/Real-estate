import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './hero/Home'
import PropertyDetails from './hero/PropertyDetails'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-w-[1440px] h-12 mx-auto bg-white'>
        
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/property/:id' element={<PropertyDetails />} />
        </Routes>
        
      </div>
    </>
  )
}

export default App
