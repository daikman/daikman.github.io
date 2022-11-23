import Menu from '../components/Menu'
import Header from "../components/Header"
import Navbar from '../components/Navbar'
import "../css/App.css"

export default function Home({ data }) {

  return <main>
    <Header data = {data.info}/>
    <br/>
    <Menu data = {data.menu} />
  </main>   

}

