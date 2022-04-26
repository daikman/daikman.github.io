import React from 'react'
import "../css/Item.css"
import MobileWarn from './MobileWarn'

export default function Item({ data }) {
    let i = <>
            <img src={require("../images/"+data.img)} />
            <h2>{data.name}</h2>
            <p>{data.desc}</p>
            {createLinks(data.links)}
            <MobileWarn warn={data?.mobileWarn}/>
        </>
    return i
}

function createLinks(links) {
  const names = Object.keys(links)
  const hrefs = Object.values(links)
  
  const linkComp = names.map((d, i) => {
    const a = <a href={hrefs[i]} target="_blank">
      {d}
    </a>
    
    // if the next link exists, add some spacing between them
    if (!names[i + 1]) return a
    return <>{a}&nbsp;|&nbsp;</>

  })

  return <div className="links">
    <p>{linkComp}</p>
  </div>
}
