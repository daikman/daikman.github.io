import React from 'react'
import Links from './Links.js'

export default function Header({ data }) {
  const comp = <div className='row'>
    <div className='eight columns'>
      <h1>{data.title}</h1>
      <p>
        <span style={{"fontWeight": "bold"}}>
          {data.intro}
        </span>
        &nbsp;{data.summary}
      </p>
      <Links links={data.links}/>
    </div> 
  </div>

  return comp
}
