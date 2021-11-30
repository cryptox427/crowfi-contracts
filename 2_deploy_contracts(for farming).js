const CROWToken = artifacts.require("CrowToken");
const SyrupBar = artifacts.require("SyrupBar");
const MasterChef = artifacts.require("MasterChef");
const LotteryRewardPool = artifacts.require("LotteryRewardPool");
const SousChef = artifacts.require("SousChef");
const Timelock = artifacts.require("Timelock");

const addressCrowToken = "0x3Ca587CcC1B9b3A9A04996ba4f0b8631c2aa9295";
const addressSyrupBar = "0xf0e2B49801B27608bC84f869B8f334fb7a4c487a";
const addressMasterChef = "0xB60D089A58965A176032A5192aEcC111194B9d4D";
const addressLotteryRewardPool = "0xCb67cf20Af212e2019B23d61D625277cC59E7bf7";
const addressSousChef = "0x644eE8458fE425f857B41178EE059Ff53B67d5Ac";
const addressTimelock = "0xA38579B01e4A7655a534EA275Ea42382b5d3612c";

module.exports = function(deployer) {
     deployer.deploy(CROWToken);
    // deployer.deploy(SyrupBar, addressCrowToken);
    // deployer.deploy(MasterChef, addressCrowToken, addressSyrupBar, "0xE871fF8D355A351C21c5C4423874b141DA23ee43", 1, 639799);
    // deployer.deploy(LotteryRewardPool, addressMasterChef, addressCrowToken, "0xE871fF8D355A351C21c5C4423874b141DA23ee43", "0x9c99bFE1189F847a78e2c4B06777baD68E4b0d90");
    // deployer.deploy(SousChef, addressSyrupBar, 10, 639600, 639800);
    // deployer.deploy(Timelock, "0x68aFAE7ca01e7a0F397E6b3d2DAd3b317f39325A", 100000);
};
