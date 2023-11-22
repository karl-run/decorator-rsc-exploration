import 'next-logger'

import './globals.css'
import type { Metadata } from 'next'
import { PropsWithChildren, ReactElement } from 'react'
import { logger } from '@navikt/next-logger'

import PageLinks from '@/components/page-links'
import { Decorator } from '@/decorator/decorator'

export const metadata: Metadata = {
    title: 'Decorator CSC Exploration',
    description: 'A workspace for testing out the decorator in Server Components',
    openGraph: {
        title: 'Decorator CSC Exploration',
        description: 'A workspace for testing out the decorator in Server Components',
        images: [
            {
                width: 1200,
                height: 630,
                url: '/og',
            },
        ],
        locale: 'no_NO',
        type: 'website',
    },
}

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
    logger.info('Root layout is rendering')

    return (
        <Decorator
            decoratorProps={{
                env: 'devNext',
                params: {
                    breadcrumbs: [{ title: 'Testing App Root Crumb', url: '/' }],
                },
            }}
        >
            <main id="maincontent" role="main" tabIndex={-1}>
                <PageLinks />
                {children}
            </main>
        </Decorator>
    )
}
