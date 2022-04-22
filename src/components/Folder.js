import React, { useState, useEffect, useRef } from 'react'
import { Illustration, Shape, Group, Ellipse } from 'react-zdog'

export default function Folder({ id }) {

    // modelling
    const frontColor = "#ffbb00"
    const backColor = "#e69900"
    const paperColor = "#FFFFFF"

    const frontPath = [
        { x: -12, y: -7.5, z: 5 },
        { x: 12, y: -7.5, z: 5 },  
        { x: 12, y: 8, z: 2 }, 
        { x: -12, y: 8, z: 2 }
    ]

    const backPath = [
        { x: -12, y: -8, z: 0 },
        { x: -11.5, y: -10, z: 0 },
        { x: -8, y: -10, z: 0 },
        { x: -5, y: -8, z: 0 },
        { x: 12, y: -8, z: 0 },  
        { x: 12, y: 8, z: 0 }, 
        { x: -12, y: 8, z: 0 }
    ]

    const paperPath = [
        { x: -12, y: -7.5, z: 1 },
        { x: 12, y: -7.5, z: 1 },  
        { x: 12, y: 8, z: 1 }, 
        { x: -12, y: 8, z: 1 }
    ]

    // animation
    let angle = useRef(0)
    let height = useRef(-0.1)
    const [time, setTime] = useState(Date.now())

    useEffect(() => {
      const interval = setInterval(() => {
          setTime(Date.now())
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
    
    const rotate = {
        y: angle.current,
        x: -0.3
    }

    const translate = {
        y: height.current,
        x: 0
    }
    // <Ellipse diameter={25} fill={"#000000"} stroke={1} translate={{z: -10}}/>
    
    return <Illustration zoom={5} >
        <Group rotate={rotate}>
            <Shape
              path={backPath}
              color={backColor}
              stroke={2}
              fill
            />
            <Shape
              path={paperPath}
              color={paperColor}
              stroke={0.5}
              translate={translate}
              fill
            />
            <Shape
              path={frontPath}
              color={frontColor}
              stroke={2}
              fill
            />
        </Group>
    </Illustration>

}

function animation(angle, height) {

    let heightDiff = 0
    let angleDiff = 0

    if (angle < 6.282) angleDiff = 0.1
    if (height < 0) heightDiff = -0.2
    if (angle > 5) heightDiff = 0.5
    if (height >= 0) {heightDiff = 0; height = 0}

    angle += angleDiff
    height += heightDiff

    return {angle, height}
        
}
