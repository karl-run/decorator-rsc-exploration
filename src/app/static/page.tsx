import React, { ReactElement } from 'react'
import { Heading } from '@navikt/ds-react'

function Page(): ReactElement {
    return (
        <div className="flex flex-col items-center justify-between p-12 gap-8">
            <Heading size="large" level="2">
                This page is completely static
            </Heading>
            <div>Page generated: {new Date().toISOString()}</div>
        </div>
    )
}

export default Page
