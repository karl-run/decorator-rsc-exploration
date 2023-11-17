'use client'

import React, { ReactElement } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

function PageLinks(): ReactElement {
    const activeSegment = useSelectedLayoutSegment()

    return (
        <div className="ml-64 mt-8 flex gap-3">
            <Link href="/" className={activeSegment === null ? 'underline font-bold' : undefined}>
                Root
            </Link>
            <Link href="/static" className={activeSegment === 'static' ? 'underline font-bold' : undefined}>
                Static page
            </Link>
            <Link href="/dynamic" className={activeSegment === 'dynamic' ? 'underline font-bold' : undefined}>
                Dynamic page
            </Link>
            <Link href="/isr" className={activeSegment === 'isr' ? 'underline font-bold' : undefined}>
                ISR Page
            </Link>
        </div>
    )
}

export default PageLinks
