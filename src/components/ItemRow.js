import React from 'react'
import Item from './Item'

export default function ItemRow({ data }) {
    const item = data.map(d => {
        return  <>
            <Item data = {d}/>
        </>
    })
    
    return <div className='row'>{item}</div>
}
