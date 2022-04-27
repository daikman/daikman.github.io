import React from "react"
import data from "../site.json"
import Home from "../pages/Home"
import Portfolio from "../pages/Portfolio"
import NotFound from '../pages/NotFound'
import "../css/App.css"
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Blog from "../pages/Blog"
import BlogEntry from "./BlogEntry"

function App() {

  return <Router>
    <Routes>
      <Route path="/" element={<Home data={data}/>} />
      {/* <Route path="/dev" element={<Portfolio data={data} tag={"dev"}/>} />
      <Route path="/data" element={<Portfolio data={data} tag={"data"}/>} />
      <Route path="/random" element={<Portfolio data={data} tag={"random"}/>} /> */}
      <Route path="/:tag" element={<Portfolio data={data} />} />
      <Route path="/blog" element={<Blog data={data} />}/>
      <Route path="/blog/:id" element={<BlogEntry data={data} />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>

}

export default App; 
