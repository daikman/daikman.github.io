import React from 'react'
import Links from './Links.js'
import { Link } from 'react-router-dom'
import { FcOpenedFolder as Back, FcFolder as Closed} from 'react-icons/fc'
import ReactMarkdown from 'react-markdown'

export default function Header({ data, home }) {
  const comp = <div className='row'>
    <div className='eight columns'>
      <h1>{homeLink(home)} {data.title}</h1>
      <ReactMarkdown>{data.summary}</ReactMarkdown>
      <Links links={data.links}/>
    </div> 
  </div>

  return comp
}

function homeLink(home) {
  if (home) return <Link to="/"><Back /></Link>
  return <Link to="/"><Closed /></Link>
}