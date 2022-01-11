# Big Dipper 2.0 for deweb

Env file (.env) example
```
NEXT_PUBLIC_GRAPHQL_URL=http://127.0.0.1:8282/v1/graphql
NEXT_PUBLIC_GRAPHQL_WS=ws://127.0.0.1:8282/v1/graphql
NODE_ENV=development
PORT=8384
NEXT_PUBLIC_URL=http://127.0.0.1:8384
NEXT_PUBLIC_WS_CHAIN_URL=wss://127.0.0.1:8384/websocket
NEXT_PUBLIC_CHAIN_STATUS=testnet
```

In this config example Hasura listen on port 8282, connection by http and ws (not secure). 
Big Dipper UI is on port 8384

## Documentation
Read our official documentation at [http://docs.bigdipper.live/](http://docs.bigdipper.live/)

## Issue Reporting
For UI related issues please report it here [https://github.com/forbole/big-dipper-2.0-cosmos/issues](https://github.com/forbole/big-dipper-2.0-cosmos/issues).

For Hasura and BdJuno issues please report it here [https://github.com/forbole/bdjuno/issues](https://github.com/forbole/bdjuno/issues)

## License
Read our license at [https://raw.githubusercontent.com/forbole/big-dipper-2.0-cosmos/master/LICENSE](https://raw.githubusercontent.com/forbole/big-dipper-2.0-cosmos/master/LICENSE)

## Ledger and Transaction Support
While Big Dipper 2.0 no longer supports ledger or any kind of transactions in favor of [Forbole X](https://github.com/forbole/forbole-x), the original [Big Dipper](https://github.com/forbole/big-dipper) will continue have this feature.
