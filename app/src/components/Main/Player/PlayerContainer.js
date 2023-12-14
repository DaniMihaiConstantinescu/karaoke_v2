"use client"

import getPath from '@/utils/getPath';
import React, { useEffect, useState } from 'react'

export default function PlayerContainer({song}) {

  const [path, setPath] = useState("")

  useEffect(() => {
    async function fetchData() {
      try {
        setPath(await getPath(song));
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    // <div className='flex justify-center p-3 bg-rose-600'>
    <div className='flex justify-center p-3 '>
        {path &&
          // <audio className=' w-3/5' controls>
          //   <source src={'../../../assets/songs_audio/' + path} type="audio/mp3">
          //   </source>
          // </audio> 

          <audio controls>
            <source src={'songs/' + path} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio> 
        }
    </div>
  )
}
