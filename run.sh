#! /bin/sh
export INPUT_VERSION=4.11.1
export INPUT_DEST=pnpm.temp
export INPUT_BIN_DEST=pnpm.temp/.bin
export INPUT_REGISTRY=https://registry.npmjs.com
exec node dist/index.js
