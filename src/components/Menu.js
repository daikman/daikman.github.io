import React from 'react'
import {Link} from 'react-router-dom'
import {BrowserView, MobileView} from 'react-device-detect'
import MenuItem from './MenuItem'
import Folder from './Folder'

export default function Menu({ data }) {

    // const mobile = data.map(d => {
    //     return <div className='item menuItem four columns'>
    //         <Link to={"/" + d.tag}>
    //             <MenuItem data={d}/>
    //         </Link>
    //     </div>
    // })

    const item = data.map((d, i)=> {
        return <div className='item folder four columns' id={"folder"+i}>
            <img src={require("../images/" + d.tag + ".PNG")} />
            <Folder id={"folder"+i} a={0.1} />
            <Link to={"/"+d.tag}>
                <button>
                    <text>{d.tag}</text>
                </button>  
            </Link>         
        </div>
    }) 

  
    return <div className='row'>
        {item}
    </div>

}