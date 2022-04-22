import React from 'react'
import Item from './Item'

export default function ItemRow({ data }) {
    const item = data.map(d => {
        return  <div className='item one-half column'>
            <Item data = {d}/>
        </div>
    })
    
    return <div className='row'>{item}</div>
}
