import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { createLinks } from "./Item"
import { useParams, Link } from 'react-router-dom';

export default function BlogContent({ data, item }) {
  const { id } = useParams()

  if (!item)
    item = data.items.filter(d => d.id == id)[0]

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    import("../md/"+item.id+".md").then((res) => {
        fetch(res.default)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    })
      
  }, []);

  return (
    <>
      <div style={{position: "relative", padding: "1%"}}>
        <p id={id} style={{color: "black"}}>{item.name}</p>
        {createLinks(item.links)}
        
        <img 
          src={require("../images/"+item.img)} 
          style={{width: "100%", objectFit: "none", height: "100%",
          position: "absolute", left: 0, top: 0, 
          zIndex: -1, opacity: 0.1}}
        />
      </div>
      <br />
      <ReactMarkdown>
          {markdown}
      </ReactMarkdown>
    </>
  );
}

function seeMore(complete) {
  if (!complete) return <Link to={"/blog"}><button>SEE ALL BLOGS</button></Link>
}
