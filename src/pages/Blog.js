import React, { useEffect, useState } from 'react'
import BlogEntry from '../components/BlogEntry'
import Header from '../components/Header'

export default function Blog({ data }) {
    const blogs = data.items.map(d => {
        if (d.blog) return <><hr/><BlogEntry data={data} item={d} complete={true}/></>
    })

    return <>
        {blogs}
    </>
}
