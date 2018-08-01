# ecsol

[![Build Status](https://travis-ci.org/1Address/ecsol.svg?branch=master)](https://travis-ci.org/1Address/ecsol)
[![Coverage Status](https://coveralls.io/repos/github/1Address/ecsol/badge.svg)](https://coveralls.io/github/1Address/ecsol)

Elliptic Curve Implementation in Solidity (fork of https://github.com/jbaylina/ecsol)

# Features

1. Methods `ecadd` and `ecmul` without `z` argument
2. Methods `ecmulVerify` and `publicKeyVerify` for super-fast (25x) verifications (31-33k gas instead of 700k-1000k gas)

# Installation

1. Install [truffle](http://truffleframework.com) globally with `npm install -g truffle`
2. Install [ganache-cli](https://github.com/trufflesuite/ganache-cli) globally with `npm install -g ganache-cli`
3. Install local packages with `npm install`
4. Run ganache in separate terminal `scripts/rpc.sh`
5. Run tests with `npm test`

On macOS you also need to install watchman: `brew install watchman`
