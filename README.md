# imtbl-sdk-dev-env

Makes using the @imtbl/sdk with the dev environment easy!

<img src="https://media2.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif"/>

## Get Started

```ts
import {
  blockchainDataOverrides,
  orderbookOverrides,
  passportOverrides,
} from "imtbl-sdk-dev-env";

const baseConfig = new config.ImmutableConfiguration({
  environment: config.Environment.SANDBOX,
});

const blockchainDataClient = new blockchainData.BlockchainData({
  baseConfig,
  overrides: blockchainDataOverrides(),
});

const orderbookClient = new orderbook.Orderbook({
  baseConfig,
  overrides: orderbookOverrides(),
});

const passportClient = new passport.Passport({
  baseConfig,
  overrides: passportOverrides(baseConfig),
});
```
