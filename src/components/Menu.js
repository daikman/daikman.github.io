// import { useSat} from 'react'
import { Link } from 'react-router-dom'
import Folder from './Folder'
import MenuItem from './MenuItem'

export default function Menu({ data }) {

    // const [hover, setHover] = React.useState()

    const item = data.map((d, i)=> {
        return <MenuItem d={d} i={i}/>
    }) 

  
    return <div className='row'>
        {item}
    </div>

}
