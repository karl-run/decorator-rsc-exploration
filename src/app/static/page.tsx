import React, { ReactElement } from 'react'
import { Heading } from '@navikt/ds-react'

import { fetchGrunnbelop } from '@/data'

async function Page(): Promise<ReactElement> {
    const data = await fetchGrunnbelop()

    return (
        <div className="flex flex-col items-center justify-between p-12 gap-8">
            <Heading size="large" level="2">
                This page is completely static
            </Heading>
            <div>Beløp fra dato: {data.dato}</div>
            <div>Grunnbeløp: {data.grunnbeløp}</div>
            <div>Page generated: {new Date().toISOString()}</div>
        </div>
    )
}

export default Page
