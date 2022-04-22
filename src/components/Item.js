import React from 'react'
import "../css/Item.css"
import MobileWarn from './MobileWarn'

export default function Item({ data }) {
    let i = <>
            <img src={require("../images/"+data.img)} />
            
            <h2>{data.name}</h2>
            <p>{data.desc}</p>
            <div className="links">
                <p>
                  <a href={data.demo} target="_blank">
                    live demo 🌐
                  </a>
                  &nbsp;|&nbsp;
                  <a href={data.code} target="_blank">
                    code ⌨️
                  </a>
                </p>
            </div>   
            <MobileWarn warn={data?.mobileWarn}/>
        </>
    return i
}
