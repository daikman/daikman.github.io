import React from 'react'
import "../css/Item.css"
import MobileWarn from './MobileWarn'
import ReactMarkdown from 'react-markdown'

export default function Item({ data }) {

  let i = <div>
    <img src={require("../images/" + data.img)} />
    <ReactMarkdown>{"## " + data.name}</ReactMarkdown>
    <ReactMarkdown>{data.desc}</ReactMarkdown>
    {createLinks(data)}
    <MobileWarn warn={data?.mobileWarn}/>
  </div>

  return i

}

export function createLinks(data) {
  let links = data.links
  if (data.blog) {
    links["📖 blog"] = "/#/blog/" + data.id
  }

  const names = Object.keys(links)
  const hrefs = Object.values(links)
  
  const linkComp = names.map((d, i) => {
    const finalLink = !names[i + 1]
    const a = <a href={hrefs[i]} target={["_blank", ""][+finalLink]}>
      <span>{d}</span>
    </a>
    // // if the next link exists, add some spacing between them
    // if (finalLink) return a
    // return <>{a}&nbsp;|&nbsp;</>
    return a

  })

  return <div className="links">
    <p style={{"display": "grid", "grid-template-columns": "50% 50%"}}>{linkComp}</p>
  </div>
}
