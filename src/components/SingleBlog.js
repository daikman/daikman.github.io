import React, { useEffect, useState } from 'react'
import BlogContent from '../components/BlogContent'
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
    const content = <BlogContent data={data}/>

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
        {content}
      </AppShell>
    );
}
