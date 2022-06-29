import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogEntry from '../components/BlogEntry'
import { AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme 
} from '@mantine/core'
import "../css/App.css"
import { Link } from 'react-router-dom'
import { BsCodeSquare as Dev } from 'react-icons/bs'

export default function Blog({ data }) {

    let { id } = useParams()
    if (!id) id = ''

    const blogs = data.items.map(d => {
        if (d.blog) return <Link to={"/blog/" + d.id}><hr/><BlogEntry data={data} item={d} complete={true}/></Link>
    })

    return (
      <AppShell
        navbarOffsetBreakpoint="sm"
        fixed
        header={
          <Header height={100} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Link to={"/blog/"}><h1>Blog</h1></Link>
            </div>
          </Header>
        }
      > 
        <div className='blogs'>{blogs}</div>
      </AppShell>
    );
}