import React, { useEffect, useState } from 'react'
import BlogEntry from '../components/BlogEntry'
import { useLocation } from 'react-router-dom'

export default function Blog({ data }) {
    const blogs = data.items.map(d => {
        if (d.blog) return <><hr/><BlogEntry data={data} item={d} complete={true}/></>
    })

    return <>
        <h1>BLOGS</h1>
        {blogs}
    </>
}
