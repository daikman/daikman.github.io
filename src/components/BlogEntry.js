import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { createLinks } from "./Item"

export default function BlogEntry({ item }) {
    const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    import("../md/"+item.blog).then((res) => {
        fetch(res.default)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    })
      
  }, []);

  return (
    <>
      <img src={require("../images/"+item.img)} style={{height: "4em", width: "100%", objectFit: "none"}}/>
      <ReactMarkdown>
          {markdown}
      </ReactMarkdown>
      {createLinks(item.links)}
    </>
  );
}
