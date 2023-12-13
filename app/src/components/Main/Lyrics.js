"use client"

import React, { useEffect, useState } from 'react'

import getLyrics from "@/utils/getLyrics";
import Vers from './Vers';

export default function Lyrics({song}) {

  
    const [lyrics, setLyrics] = useState()


    useEffect(() => {
        async function fetchData() {
          try {
            setLyrics(await getLyrics(song));
          } catch (error) {
            console.error('Error fetching JSON data:', error);
          }
        }
    
        fetchData();
      }, []);

    return (
        <div className='flex flex-col overflow-y-scroll items-center h-full no-scrollbar px-20 py-10'>
          <p className='font-bold text-4xl mb-12'>{song}</p>

          {lyrics?.map((line, index) => 
            <Vers key={index} vers={line} />
          )}
        </div>
    )
}
