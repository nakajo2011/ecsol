const EC = artifacts.require('EC');

module.exports = async function (deployer) {
    deployer.deploy(EC);
};
