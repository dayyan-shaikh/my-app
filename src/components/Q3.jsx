import React, { useState } from 'react'

const Q3 = () => {
    const [input,setinput]=useState('');
  return (
    <div>
      <input type="text" placeholder='Enter' onChange={(e)=> setinput(e.target.value)}/>
      <p>
        User input: {input}
      </p>
    </div>
  )
}

export default Q3
