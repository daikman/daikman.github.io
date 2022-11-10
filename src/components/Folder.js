import React, { useState, useEffect, useRef } from 'react'
import { Illustration, Shape, Group, Ellipse } from 'react-zdog'

export function Folder({ id, a, h, hover }) {

  // define colors
  const frontColor = "#ffbb00"
  const backColor = "#e69900"
  const paperColor = "#FFFFFF"

  // 3d path for front 'flap' of folder
  const frontPath = [
      { x: -12, y: -7.5, z: 5 },
      { x: 12, y: -7.5, z: 5 },  
      { x: 12, y: 8, z: 2 }, 
      { x: -12, y: 8, z: 2 }
  ]

  // path for back flap of folder
  const backPath = [
      { x: -12, y: -8, z: 0 },
      { x: -11.5, y: -10, z: 0 },
      { x: -8, y: -10, z: 0 },
      { x: -5, y: -8, z: 0 },
      { x: 12, y: -8, z: 0 },  
      { x: 12, y: 8, z: 0 }, 
      { x: -12, y: 8, z: 0 }
  ]

  // path for paper
  const paperPath = [
      { x: -12, y: -7.5, z: 1 },
      { x: 12, y: -7.5, z: 1 },  
      { x: 12, y: 8, z: 1 }, 
      { x: -12, y: 8, z: 1 }
  ]

  // rotation of entire model
  const rotate = {
      y: a,
      x: -0.3
  }

  // height of paper
  const translate = {
      y: h,
      x: 0
  }
  
  return <Illustration zoom={5}>
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

export function animation(angle, height) {

    let heightDiff = 0
    let angleDiff = 0

    if (angle < 6.282) angleDiff = 0.1
    if (height < 0) heightDiff = -0.1
    if (angle > 5) heightDiff = 0.5
    if (height >= 0) {
      heightDiff = 0; 
      height = 0
    }

    angle += angleDiff
    height += heightDiff

    return {angle, height}
        
}
