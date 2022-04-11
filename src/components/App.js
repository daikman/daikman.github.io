import React from "react"
import ItemList from './ItemList'
import items from "../data.json"
import Header from "./Header"
import Footer from './Footer'
import "../css/App.css"

function App() {
  return(
  <>
    <Header data = {items.info}/>
    <br/>
    <ItemList data = {items.items}/>
    <br/>
    <Footer />
  </>   
  )
}

export default App;
