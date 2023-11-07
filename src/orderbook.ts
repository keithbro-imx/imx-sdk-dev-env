import { config, orderbook } from "@imtbl/sdk";

export const overrides = {
  seaportContractAddress: "0x2CFA8f64e1B49A2DF28532D1D30Cda45117cF778",
  zoneContractAddress: "0x1Bb4Fb11Ba021Bd0104F0Ee8E5F5c728Bc83d7F1",
  chainName: "imtbl-zkevm-devnet",
  apiEndpoint: "https://api.dev.immutable.com",
} as const;

// Test
() =>
  new orderbook.Orderbook({
    baseConfig: new config.ImmutableConfiguration({
      environment: config.Environment.SANDBOX,
    }),
    overrides,
  });
