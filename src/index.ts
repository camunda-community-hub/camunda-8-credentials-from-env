import { createEnv } from 'neon-env'

let credentialsCache: ReturnType<typeof _getEnv>

export function getCamundaCredentialsFromEnv(cache = true) {
    if (!cache) {
        return _getEnv()
    }
    if (credentialsCache === undefined) {
        credentialsCache = _getEnv()
    }
    return credentialsCache
} 

function _getEnv() {
    const creds = createEnv({
        ZEEBE_ADDRESS: {
            type: 'string',
            optional: true
        },
        ZEEBE_CLIENT_ID: {
            type: 'string',
            optional: true
        },
        ZEEBE_CLIENT_SECRET: {
            type: 'string',
            optional: true
        },
        ZEEBE_AUTHORIZATION_SERVER_URL: {
            type: 'string',
            optional: true
        }
    })
    const complete = !!creds.ZEEBE_ADDRESS && !!creds.ZEEBE_CLIENT_ID && !!creds.ZEEBE_CLIENT_SECRET && !!creds.ZEEBE_AUTHORIZATION_SERVER_URL
    return complete ? { 
        ZEEBE_ADDRESS: creds.ZEEBE_ADDRESS as string, 
        ZEEBE_CLIENT_ID: creds.ZEEBE_CLIENT_ID as string,
        ZEEBE_CLIENT_SECRET: creds.ZEEBE_CLIENT_SECRET as string,
        ZEEBE_AUTHORIZATION_SERVER_URL: creds.ZEEBE_AUTHORIZATION_SERVER_URL as string,
        complete: true as true
    } : { ...creds, complete: false as false}
}
