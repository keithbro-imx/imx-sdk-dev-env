"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overrides = void 0;
const sdk_1 = require("@imtbl/sdk");
exports.overrides = {
    basePath: "https://api.dev.immutable.com",
};
// Test
() => new sdk_1.blockchainData.BlockchainData({
    baseConfig: new sdk_1.config.ImmutableConfiguration({
        environment: sdk_1.config.Environment.SANDBOX,
    }),
    overrides: exports.overrides,
});
