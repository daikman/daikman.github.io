import React from 'react'
import { Link } from "react-router-dom"

export default function HomeNav() {
    return <div style={{display: "grid", placeItems: "center"}}>
    <h1>David Aikman</h1>
    <div id="HomeNav" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", placeItems: "center", fontSize: "1.5em"}}>
      
      <Link to={"/portfolio"}><div style={{cursor: "pointer"}}>Portfolio</div></Link>
      <div style={{marginBottom: "5px", color: "grey"}}>|</div>
      <Link to={"/blog"}><div style={{cursor: "pointer"}}>Blog</div></Link>

    </div>
  </div>
}
