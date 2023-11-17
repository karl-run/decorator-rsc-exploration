import { logger } from '@navikt/next-logger'

type GrunnebelopResult = {
    dato: string
    grunnbeløp: string
}

export async function fetchGrunnbelop(next?: NextFetchRequestConfig): Promise<GrunnebelopResult> {
    logger.info('Fetching grunnbeløp from https://g.nav.no/api/v1/grunnbeløp')

    try {
        const response = await fetch('https://g.nav.no/api/v1/grunnbeløp', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            next,
        })

        if (!response.ok) {
            throw new Error(`Unable to fetch grunnbeløp: ${response.status} ${response.statusText}`)
        }

        return response.json()
    } catch (e) {
        logger.error(
            Error('Grunnbeløp fetch threw error.', {
                cause: e,
            }),
        )
        throw e
    }
}
