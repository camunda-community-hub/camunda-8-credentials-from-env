# Camunda 8 Client Credentials from the Environment for Node.js

 [![NPM](https://nodei.co/npm/camunda-8-credentials-from-env.png)](https://npmjs.org/package/camunda-8-credentials-from-env) 

![Community Extension](https://img.shields.io/badge/Community%20Extension-An%20open%20source%20community%20maintained%20project-FF4700)

![Lifecycle](https://img.shields.io/badge/Lifecycle-Stable-brightgreen)

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Deterministically extract Camunda 8 Client credentials from the environment in Node.js. Uses [neon-env](https://www.npmjs.com/package/neon-env) under the hood.

To install in your project:

```
npm i camunda-8-credentials-from-env
```

To use: 

```typescript
import { getCamundaCredentialsFromEnv } from "camunda-8-credentials-from-env"

// throws if required credential elements are not found in the environment
// get credentials for the Operate API
const creds = getOperateCredentials()
```

The library will only hit the environment once. Further calls to the same method will return a cached set of values. 


