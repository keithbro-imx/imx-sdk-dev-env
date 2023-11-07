import { config, passport } from "@imtbl/sdk";

export const overrides = {
  network: "sepolia" as any,
  authenticationDomain: "TODO",
  immutableXClient: "TODO" as any,
  imxPublicApiDomain: "https://api.dev.immutable.com",
  indexerMrBasePath: "https://api.dev.immutable.com",
  magicProviderId: "TODO",
  magicPublishableApiKey: "TODO",
  orderBookMrBasePath: "https://api.dev.immutable.com",
  passportDomain: "https://api.dev.immutable.com",
  passportMrBasePath: "https://api.dev.immutable.com",
  relayerUrl: "https://api.dev.immutable.com",
  zkEvmRpcUrl: "https://rpc.dev.immutable.com",
};

// Test
() =>
  new passport.Passport({
    clientId: "DOESNT_MATTER",
    logoutRedirectUri: "DOESNT_MATTER",
    redirectUri: "DOESNT_MATTER",
    baseConfig: new config.ImmutableConfiguration({
      environment: config.Environment.SANDBOX,
    }),
    overrides,
  });
