/* eslint-disable @typescript-eslint/no-var-requires */
const { nextDev } = require('next/dist/cli/next-dev');

nextDev(['-p', process.env.PORT || 5001]);
