import React, { ReactElement } from 'react'
import { Heading } from '@navikt/ds-react'

async function Page(): Promise<ReactElement> {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const data = await fetch('https://g.nav.no/api/v1/grunnbel%C3%B8p', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        next: {
            revalidate: 15,
        },
    }).then((it) => it.json())

    return (
        <div className="flex flex-col items-center justify-between p-12 gap-8">
            <Heading size="large" level="2">
                This page is incrementally statically regenerated
            </Heading>
            <div>Beløp fra dato: {data.dato}</div>
            <div>Grunnbeløp: {data.grunnbeløp}</div>
            <div>Page generated: {new Date().toISOString()}</div>
        </div>
    )
}

export default Page
