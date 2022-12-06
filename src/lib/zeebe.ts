import { createEnv } from 'neon-env'

export function _getZeebeEnv() {
    return createEnv({
       ZEEBE_ADDRESS: {
            type: 'string',
            optional: false
        },
        ZEEBE_CLIENT_ID: {
            type: 'string',
            optional: false
        },
        ZEEBE_CLIENT_SECRET: {
            type: 'string',
            optional: false
        },
        ZEEBE_AUTHORIZATION_SERVER_URL: {
            type: 'string',
            optional: false
        },
        ZEEBE_TOKEN_AUDIENCE: {
            type: 'string',
            optional: false
        },
        CAMUNDA_CLUSTER_ID: {
            type: 'string',
            optional: false            
        },
        CAMUNDA_CLUSTER_REGION: {
            type: 'string',
            optional: false   
        },
        CAMUNDA_CREDENTIALS_SCOPES: {
            type: 'string',
            optional: false
        },
        CAMUNDA_OAUTH_URL: {
            type: 'string',
            optional: false            
        }
    }) as {
        ZEEBE_ADDRESS: string,
        ZEEBE_CLIENT_ID: string,
        ZEEBE_CLIENT_SECRET: string,
        ZEEBE_AUTHORIZATION_SERVER_URL: string,
        ZEEBE_TOKEN_AUDIENCE: string,
        CAMUNDA_CLUSTER_ID: string,
        CAMUNDA_CLUSTER_REGION: string,
        CAMUNDA_CREDENTIALS_SCOPES: string,
        CAMUNDA_OAUTH_URL: string
    }
}