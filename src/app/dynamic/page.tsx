import React, { ReactElement } from 'react'
import { Heading } from '@navikt/ds-react'

import { fetchGrunnbelop } from '@/data'

export const dynamic = 'force-dynamic'

async function Page(): Promise<ReactElement> {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const data = await fetchGrunnbelop({
        revalidate: 0,
    })

    return (
        <div className="flex flex-col items-center justify-between p-12 gap-8">
            <Heading size="large" level="2">
                This page is completely dynamic
            </Heading>
            <div>Beløp fra dato: {data.dato}</div>
            <div>Grunnbeløp: {data.grunnbeløp}</div>
            <div>Page generated: {new Date().toISOString()}</div>
        </div>
    )
}

export default Page
