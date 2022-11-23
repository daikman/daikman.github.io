import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import NavHeader from '../components/NavHeader'
import {useState, useEffect} from "react"
import ReactMarkdown from 'react-markdown'

export default function Blog({ data }) {

  const { post } = useParams()

  let postData;
  if (post) {
    postData = data.filter(d => d.id === post)[0]
  } else {
    postData = data[0]
  }

  const [markdown, setMarkdown] = useState("Loading...")
  const [markup, setMarkup] = useState("Loading...")
  const [HTMLSrc, setHTMLSrc] = useState("Loading...")

  useEffect(() => {
    import('../posts/fun-stats.md')
      .then(res =>{
        console.log(res.default)
        setHTMLSrc(res.default)
        fetch(res.default)
          .then(response => response.text())
          .then(response => {
            // setMarkup(response)
            setMarkdown(response)
          })
          .catch(err => console.log(err))
      })
  }, [])

  return <>
    <NavHeader />
    <aside>
      <SideNav entries={data} />
    </aside>
    <main>
      <Post post={postData} md={markdown} />
    </main>
  </>

}

function SideNav({ entries }) {
  const list = entries.map((d, i) => {
    return <li key={i}>
      <Link to={"/blog/" + d.id}>{d.title}</Link>
    </li>
  }) 

  return <ul>{list}</ul>
}

function Post({ post, md }) {
  // const readPath = require("./posts/"+post.id+".md");
  return <div>
    <h2>{post.title}</h2>
    {/* <div
      dangerouslySetInnerHTML={{__html: html}}
    /> */}
    <ReactMarkdown>{md}</ReactMarkdown>
  </div>
}