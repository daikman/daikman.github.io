import React, { useEffect, useState } from 'react'
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
import { BsCodeSquare as Dev } from 'react-icons/bs'

export default function Blog({ data }) {
    const blogs = data.items.map(d => {
        if (d.blog) return <><hr/><BlogEntry data={data} item={d} complete={true}/></>
    })

    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
      <AppShell
        navbarOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300, lg: 300 }} style={{overflowY: "scroll"}}>
            {data.items.map(d => {
                if (d.blog) return <Navbar.Section><button className='nav-item' style={{
                        textAlign: "left", 
                        height: "100%", 
                        maxHeight: "100px", 
                        border: "none"
                    }}>
                    <p style={{marginBottom: 0}}>{d.name}</p>
                    <p>
                        {d.tags.map(t => <><span style={{
                            backgroundColor: "pink", 
                            backgroundColor: "rgba(255, 100, 100, 0.2)",
                            borderRadius: "4px", 
                            padding: "5px",     
                            fontSize: "smaller"}}>
                            {t}
                        </span>&nbsp;</>)}
                    </p>
                </button></Navbar.Section>              
            })}
          </Navbar>
        }
        header={
          <Header height={70} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <h1>Application header</h1>
            </div>
          </Header>
        }
      > 
        {blogs}
      </AppShell>
    );
}
