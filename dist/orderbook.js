"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overrides = void 0;
const sdk_1 = require("@imtbl/sdk");
const overrides = () => ({
    seaportContractAddress: "0x2CFA8f64e1B49A2DF28532D1D30Cda45117cF778",
    zoneContractAddress: "0x1Bb4Fb11Ba021Bd0104F0Ee8E5F5c728Bc83d7F1",
    chainName: "imtbl-zkevm-devnet",
    apiEndpoint: "https://api.dev.immutable.com",
});
exports.overrides = overrides;
// Test
() => new sdk_1.orderbook.Orderbook({
    baseConfig: new sdk_1.config.ImmutableConfiguration({
        environment: sdk_1.config.Environment.SANDBOX,
    }),
    overrides: (0, exports.overrides)(),
});
