import { blockchainData, config } from "@imtbl/sdk";

export const overrides = {
  basePath: "https://api.dev.immutable.com",
} as const;

// Test
() =>
  new blockchainData.BlockchainData({
    baseConfig: new config.ImmutableConfiguration({
      environment: config.Environment.SANDBOX,
    }),
    overrides,
  });
