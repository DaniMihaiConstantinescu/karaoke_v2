"use client"

import MainPart from "@/components/Main/MainPart";
import SideBar from "@/components/SideBar";
import { useState } from "react";

export default function Home() {

  const [selectedSong, setSelectedSong] = useState("")

  return (
    <div className="flex h-screen">
      <SideBar changeSong={setSelectedSong} />
      <MainPart song={selectedSong}/>
    </div>
  )
}
