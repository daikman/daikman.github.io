import Menu from '../components/Menu'
import Header from "../components/Header"
import Footer from '../components/Footer'
import "../css/App.css"

export default function Home({ data }) {

  return <>
    <Header data = {data.info}/>
    <br/>
    <Menu data = {data.menu} />
    <br/>
    <Footer />
  </>   

}

