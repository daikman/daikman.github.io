import React from 'react'

export default function MobileWarn({ warn }) {
    if (warn) return <p class="m-warning"> 📵 Demo not mobile compatible</p>
    return
}
