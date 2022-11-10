import {Folder, animation} from "./Folder"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import "../css/Item.css"

export default function MenuItem({ d, i }) {

  const hover = useRef(true)
  const angle = useRef(0)
  const height = useRef(-0.1)
  const init = useRef(true)
  const [time, setTime] = useState(Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
        setTime(Date.now())
        if (!hover.current) return
        const params = animation(angle.current, height.current)
        angle.current = params.angle
        height.current = params.height
      }, 
          10
      );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div 
      className='item folder four columns' 
      id={"folder"+i}
      onMouseOver={() => {
        hover.current = !hover.current
        angle.current = 0
        height.current = -0.1
      }}
      onMouseOut={() => {
        hover.current = !hover.current
      }}
    >
    <img src={require("../images/" + d.tag + ".PNG")} />
    <Folder id={"folder"+i} a={angle.current} h={height.current} hover={hover}/>
    <Link to={"/portfolio/"+d.tag}>
        <button>
            <p>{d.tag}</p>
        </button>  
    </Link>         
  </div>

}