import { ReactElement, Suspense } from 'react'
import { Heading, Skeleton } from '@navikt/ds-react'

import DataComponent from '@/components/DataComponent'

export default function Home(): ReactElement {
    return (
        <div className="flex flex-col items-center justify-between p-12 gap-8">
            <Heading size="large" level="2">
                This is a page is static on root, but has a data fetching component in the tree.
            </Heading>
            <Suspense fallback={<Skeleton variant="rectangle" height={200} width={400} />}>
                <DataComponent />
            </Suspense>
        </div>
    )
}
