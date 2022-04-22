import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Links({ links }) {
    const names = Object.keys(links)
    const hrefs = Object.values(links)
    
    const comp = names.map((d, i) => {
        return <span>{
            createIcon(
                names[i], hrefs[i], 
                {"width": "32px", "height": "32px", "margin": "5px"}
            )}</span>
    })

    return comp
}

function createIcon(name, href, style) {
    return <SocialIcon url={"https://" + name + ".com/" + href} network={name} style={style}/>
}
