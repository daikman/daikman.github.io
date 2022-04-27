import React from 'react'
import "../css/Item.css"
import MobileWarn from './MobileWarn'
import ReactMarkdown from 'react-markdown'
import BlogEntry from './BlogEntry'
import { Link } from 'react-router-dom'

export default function Item({ data }) {

  let i = <Link to={"/blog/" + data.id}><div style={{cursor: "pointer"}}>
    <img src={require("../images/" + data.img)} />
    <ReactMarkdown>{"## " + data.name}</ReactMarkdown>
    <ReactMarkdown>{data.desc}</ReactMarkdown>
    {createLinks(data.links)}
    <MobileWarn warn={data?.mobileWarn}/>
  </div></Link>

  // if (data.blog) return <>{i}<BlogEntry item={data} /></>
  return i

}

export function createLinks(links) {
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
