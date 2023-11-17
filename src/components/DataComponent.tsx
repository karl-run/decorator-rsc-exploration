import React, { ReactElement } from 'react'

import { fetchGrunnbelop } from '@/data'

async function DataComponent(): Promise<ReactElement> {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const data = await fetchGrunnbelop({ revalidate: 0 })

    return (
        <div>
            <div>Beløp fra dato: {data.dato}</div>
            <div>Grunnbeløp: {data.grunnbeløp}</div>
            <div>Page generated: {new Date().toISOString()}</div>
        </div>
    )
}

export default DataComponent
