import 'next-logger'

import './globals.css'
import type { Metadata } from 'next'
import { PropsWithChildren, ReactElement } from 'react'

import { Decorator } from '@/decorator/decorator'
import PageLinks from '@/components/page-links'

export const metadata: Metadata = {
    title: 'Decorator CSC Exploration',
    description: 'A workspace for testing out the decorator in Server Components',
}

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
    return (
        <html lang="en">
            <Decorator
                decoratorProps={{
                    env: 'dev',
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
        </html>
    )
}
