import React from "react"
import data from "../site.json"
import Home from "../pages/Home"
import Portfolio from "../pages/Portfolio"
import NotFound from '../pages/NotFound'
import "../css/App.css"
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Blog from "../pages/Blog"
import BlogEntry from "./BlogEntry"
import HomeNav from "./HomeNav"
import BlogContent from "./BlogContent"
import SingleBlog from "./SingleBlog"
import Footer from "./Footer"

function App() {

  return <>
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<HomeNav />}/>
          <Route path="/portfolio" element={<Home data={data}/>} />
          <Route path="/portfolio/:tag" element={<Portfolio data={data} />} />
          <Route path="/blog" element={<Blog data={data} />}/>
          <Route path="/blog/:id" element={<SingleBlog data={data} />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  </>
  
}

export default App; 
