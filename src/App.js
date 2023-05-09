import React from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

export default function App(props) {
  return (
<div>
      <Navbar/>
      <div className="container my-2">
        <h2 className='text-center'>First Year</h2>
      <Card title="Anubhav"/>
      </div>

    </div>
  )
}
