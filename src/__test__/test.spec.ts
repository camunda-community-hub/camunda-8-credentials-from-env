import { getCamundaCredentialsFromEnv } from ".."

const keys = [
    'ZEEBE_AUTHORIZATION_SERVER_URL',
    'ZEEBE_CLIENT_SECRET',
    'ZEEBE_CLIENT_ID',
    'ZEEBE_ADDRESS'
]

const storage: {[key: string]: string | undefined} = {}

function wipeEnv() {
    keys.forEach(key => (delete process.env[key]))
}

beforeAll(() => {
    keys.forEach(key => (storage[key] = process.env[key]))
    wipeEnv()
})

beforeEach(wipeEnv)

afterAll(() => {
    keys.forEach(key => (process.env[key] = storage[key]))
})

test('Can read correct env vars', () => {
    expect(process.env.ZEEBE_ADDRESS).toBe(undefined)
    process.env.ZEEBE_ADDRESS = 'address'
    process.env.ZEEBE_CLIENT_SECRET = 'secret'
    process.env.ZEEBE_CLIENT_ID = 'clientid'
    process.env.ZEEBE_AUTHORIZATION_SERVER_URL = 'url'
    const creds = getCamundaCredentialsFromEnv(false)
    expect(creds.complete).toBe(true)
    expect(creds.ZEEBE_ADDRESS).toBe('address')
    expect(creds.ZEEBE_AUTHORIZATION_SERVER_URL).toBe('url')
    expect(creds.ZEEBE_CLIENT_SECRET).toBe('secret')
    expect(creds.ZEEBE_CLIENT_ID).toBe('clientid')
})

test('Returns undefined for a variable that is not defined', () => {
    const creds = getCamundaCredentialsFromEnv(false)
    expect(creds.ZEEBE_ADDRESS).toBe(undefined)
    expect(creds.complete).toBe(false)
})


