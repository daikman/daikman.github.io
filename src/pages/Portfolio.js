import React, { useState } from 'react'
import ItemList from '../components/ItemList'
import Header from "../components/Header"
import BlogEntry from "../components/BlogEntry"
import "../css/App.css"
import { Checkbox } from '@mantine/core'
import { AiOutlineCheckCircle as NoBlogSwitch, AiFillCheckCircle as BlogSwitch } from 'react-icons/ai'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'

export default function Portfolio({ data }) {

  const { tag } = useParams()

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

  // return <>
  //   <Navbar />
  //   <button onClick={() => toggleBlog(b => !b)} style={{border: "none"}}>
  //     <h1><BlogSwitch /></h1>
  //   </button>
  //   <Header data = {info[0]} home = {true}/>
  //   <br/>
  //   {items.map(d => {
  //     if (d.blog) return <>
  //       <hr/>
  //       <BlogEntry item={d}/>
  //     </>
  //   })}
  // </>

}

