import { config, immutablexClient, passport } from "@imtbl/sdk";
import { Config } from "@imtbl/core-sdk";

export const overrides = (
  baseConfig: config.ImmutableConfiguration
): passport.PassportOverrides => ({
  network: passport.Networks.SANDBOX,
  authenticationDomain: "https://auth.dev.immutable.com",
  magicPublishableApiKey: "pk_live_4058236363130CA9",
  magicProviderId: "C9odf7hU4EQ5EufcfgYfcBaT5V6LhocXyiPRhIjw2EY=",
  passportDomain: "https://passport.dev.immutable.com",
  imxPublicApiDomain: "https://api.dev.immutable.com",
  immutableXClient: new immutablexClient.ImmutableXClient({
    baseConfig,
    overrides: {
      immutableXConfig: Config.createConfig({
        basePath: "https://api.dev.x.immutable.com",
        chainID: 5,
        coreContractAddress: "0xd05323731807A35599BF9798a1DE15e89d6D6eF1",
        registrationContractAddress:
          "0x7EB840223a3b1E0e8D54bF8A6cd83df5AFfC88B2",
      }),
    },
  }),
  zkEvmRpcUrl: "https://rpc.dev.immutable.com",
  relayerUrl: "https://api.dev.immutable.com/relayer-mr",
  indexerMrBasePath: "https://api.dev.immutable.com",
  orderBookMrBasePath: "https://api.dev.immutable.com",
  passportMrBasePath: "https://api.dev.immutable.com",
});
