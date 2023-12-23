import React from 'react'
import { auth } from '@/utils/auth'


const page = () => {
  console.log(auth);
  return (
    <div className='container'>
      Profile 
    </div>
  )
}

export default page 
