import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { createLinks } from "./Item"
import { useParams, Link } from 'react-router-dom';

export default function BlogEntry({ data, item, complete }) {
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
      {seeMore(complete)}
      <h1 id={id}>{item.name}</h1>
      {createLinks(item.links)}
      <img 
        src={require("../images/"+item.img)} 
        style={{height: "4em", width: "100%", objectFit: "none"}}
      />
      <ReactMarkdown>
          {markdown}
      </ReactMarkdown>
    </>
  );
}

function seeMore(complete) {
  if (!complete) return <Link to={"/blog"}><button>SEE ALL BLOGS</button></Link>
}
