import React, { PropsWithChildren, ReactElement } from 'react'
import Script from 'next/script'
import parse from 'html-react-parser'

import { DecoratorFetchProps } from '@/decorator/common-types'

import { getDecoratorBlocks, getDecoratorMetadata } from './fetch-decorator-next'

export interface DecoratorProps {
    decoratorProps: DecoratorFetchProps
}

export async function Decorator({
    children,
    decoratorProps,
}: PropsWithChildren<DecoratorProps>): Promise<ReactElement> {
    const [{ scripts, styles, inlineScripts, language }, { header, footer }] = await Promise.all([
        getDecoratorMetadata(decoratorProps),
        getDecoratorBlocks(decoratorProps),
    ])

    return (
        <html lang={language ?? 'nb'}>
            {/* eslint-disable-next-line @next/next/no-head-element */}
            <head>
                {styles.map((it) => (
                    <link key={it} rel="stylesheet" href={it} />
                ))}
            </head>
            <body>
                {parse(header)}
                {children}
                {parse(footer)}
                {inlineScripts.map((it) => (
                    <div key={it} dangerouslySetInnerHTML={{ __html: it }} />
                ))}
                {scripts.map((it) => (
                    <Script key={it} src={it} />
                ))}
            </body>
        </html>
    )
}
