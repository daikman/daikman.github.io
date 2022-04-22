import ItemList from '../components/ItemList'
import Header from "../components/Header"
import Footer from '../components/Footer'
import "../css/App.css"

export default function Portfolio({ data, tag }) {
  const items = data.items.filter(d => {
    return d.tags.indexOf(tag) != -1
  })

  const info = data.menu.filter(d => {
    return d.tag == tag
  })

  return <>
    <Header data = {info[0]} home = {true}/>
    <br/>
    <ItemList data = {items} />
  </>   

}

