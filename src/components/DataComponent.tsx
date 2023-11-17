import React, { ReactElement } from 'react'

async function DataComponent(): Promise<ReactElement> {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const data = await fetch('https://g.nav.no/api/v1/grunnbel%C3%B8p', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        next: { revalidate: 0 },
    }).then((it) => it.json())

    return (
        <div>
            <div>Beløp fra dato: {data.dato}</div>
            <div>Grunnbeløp: {data.grunnbeløp}</div>
            <div>Page generated: {new Date().toISOString()}</div>
        </div>
    )
}

export default DataComponent
