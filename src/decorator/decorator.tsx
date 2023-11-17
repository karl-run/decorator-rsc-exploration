import { PropsWithChildren, ReactElement } from 'react'

import { DecoratorFetchProps } from '@/decorator/common-types'

import { getDecoratorRsc } from './fetch-decorator-next'

export interface DecoratorProps {
    decoratorProps: DecoratorFetchProps
}

export async function Decorator({
    children,
    decoratorProps,
}: PropsWithChildren<DecoratorProps>): Promise<ReactElement> {
    const { Styles, Header, Footer, Scripts } = await getDecoratorRsc(decoratorProps)

    return (
        <>
            <head>
                <Styles />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
            </body>
        </>
    )
}
