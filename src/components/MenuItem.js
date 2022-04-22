import React from 'react'
import "../css/Item.css"

export default function MenuItem({ data }) {

    const i = <button style={{"width": "100%", "height":"100%", "border":"none"}}>
      <img src={require("../images/"+data.img)} href={"#/"+data.tag} />
      <h2>{data.tag}</h2>
      <p>{data.desc}</p>
    </button>

    return i

}