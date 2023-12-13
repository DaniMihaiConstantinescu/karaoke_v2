import React from 'react'

export default function Vers({vers}) {
  return (
    <div className='w-full text-center'>

        {vers?.map((line,index) =>
            <p className='text-lg' key={index}>{line}</p>
        )}

        <br></br>
    </div>
  )
}
