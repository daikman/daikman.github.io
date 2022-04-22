import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFound() {
    return <div>
        <h1>PAGE NOT FOUND :(</h1>
        <p>Go back to the <Link to="/">Homepage</Link></p>
    </div>
}
