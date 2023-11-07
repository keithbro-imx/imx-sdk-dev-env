# imtbl-sdk-dev

Makes using the @imtbl/sdk with the dev environment easy!

## Get Started

```ts
import { blockchainDataOverrides, orderbookOverrides } from "imtbl-sdk-dev";

const orderbookClient = new orderbook.Orderbook({
  baseConfig: {
    environment: envConfig.sdkEnv,
  },
  overrides: envConfig.orderbookOverrides,
});

const blockchainDataClient = new blockchainData.BlockchainData({
  baseConfig: {
    environment: envConfig.sdkEnv,
  },
  overrides: envConfig.blockchainDataOverrides,
});
```