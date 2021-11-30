const CrowSwapFactory = artifacts.require("CrowSwapFactory");
const CrowSwapERC20 = artifacts.require("CrowSwapERC20");
const CrowSwapPair = artifacts.require("CrowSwapPair");

const feeToSetter = '0xE871fF8D355A351C21c5C4423874b141DA23ee43';

module.exports = function(deployer) {
	deployer.deploy(CrowSwapERC20);
	// deployer.deploy(CrowSwapPair);
	// deployer.deploy(CrowSwapFactory, feeToSetter);	
};