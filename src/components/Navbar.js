import React from 'react'

export default function Navbar() {
    return <div className='row' style={{
            position: "fixed", 
            top: 0, left: 0, 
            width: "100%", height: "10%", 
            maxHeight: "100px",
            margin: 0,
            padding: 0,
            zIndex: 1
        }}>
        <div className='six columns bar-item' style={{backgroundColor: "pink", width: "50%", height: "100%", padding: 0, margin: 0}}>
            <button style={{width: "100%", height: "100%", border: "none"}}>BLOG MODE</button>
        </div>
        <div className='six columns bar-item' style={{backgroundColor: "lightpink", width: "50%", height: "100%", padding: 0, margin: 0}}>
        <button style={{width: "100%", height: "100%", border: "none"}}>GRID MODE</button>
        </div>
    </div>
}
