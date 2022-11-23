import React from 'react'
import { Link } from "react-router-dom"

export default function HomeNav() {
  return <main style={{display: "grid", placeItems: "center"}}>
    <h1>David Aikman</h1>
    <div id="HomeNav" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", placeItems: "center", fontSize: "1.5em"}}>
      <Link to={"/portfolio"}>Portfolio</Link>
      <div style={{marginBottom: "5px", color: "grey"}}>|</div>
      <a href="https://daikman.com">Blog</a>
    </div>
  </main>
}