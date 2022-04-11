import React from 'react'
import ItemRow from './ItemRow.js'

export default function ItemList({ data }) {
    
    const comp = data.map((d, i) => {
        if (i % 2 == 0) 
            return <ItemRow data = {data.slice(i, i+2)} key={i}/>
    })

    return <div>{comp}</div>
}
