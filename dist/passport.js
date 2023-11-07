"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overrides = void 0;
const sdk_1 = require("@imtbl/sdk");
exports.overrides = {
    network: "sepolia",
    authenticationDomain: "TODO",
    immutableXClient: "TODO",
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
() => new sdk_1.passport.Passport({
    clientId: "DOESNT_MATTER",
    logoutRedirectUri: "DOESNT_MATTER",
    redirectUri: "DOESNT_MATTER",
    baseConfig: new sdk_1.config.ImmutableConfiguration({
        environment: sdk_1.config.Environment.SANDBOX,
    }),
    overrides: exports.overrides,
});
