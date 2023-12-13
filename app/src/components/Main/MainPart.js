import React from 'react'
import Lyrics from './Lyrics'
import PlayerContainer from './Player/PlayerContainer';

export default function MainPart({song}) {

  return (
    <div className='w-full grow flex flex-col'>

      {song
        ? <Lyrics song={song}/>
        :  <h1 className='text-center w-full pt-20 font-semibold'>No song selected</h1>
      }

      {song && <PlayerContainer /> }

    </div>

  )
}
