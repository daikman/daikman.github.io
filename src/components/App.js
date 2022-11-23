import React from "react"
import data from "../porfolio.json"
import blogData from "../blog.json"
import Home from "../pages/Home"
import Portfolio from "../pages/Portfolio"
import NotFound from '../pages/NotFound'
import "../css/App.css"
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Blog from "../pages/Blog"
import HomeNav from "./HomeNav"

function App() {

  return <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeNav />}/>
          <Route path="/portfolio" element={<Home data={data}/>} />
          <Route path="/portfolio/:tag" element={<Portfolio data={data} />} />
          {/* <Route path="/blog" element={<Blog data={blogData} />}/>
          <Route path="/blog/:post" element={<Blog data={blogData} />}/> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  </>
  
}

export default App; 
