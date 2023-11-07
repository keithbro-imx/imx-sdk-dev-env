import { blockchainData, config } from "@imtbl/sdk";

export const overrides = () => ({
  basePath: "https://api.dev.immutable.com",
});

// Test
() =>
  new blockchainData.BlockchainData({
    baseConfig: new config.ImmutableConfiguration({
      environment: config.Environment.SANDBOX,
    }),
    overrides: overrides(),
  });
