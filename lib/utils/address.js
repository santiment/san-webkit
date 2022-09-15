const addressChecker = (regexp) => (address) => regexp.test(address);
export const isInvalidAddress = addressChecker(/[\W_]/);
export const isValidAddress = (address) => !isInvalidAddress(address);
const isEthAddress = addressChecker(/^0x[a-fA-F0-9]{40}$/);
const isBtcAddress = addressChecker(/^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/);
const isBtcSegwitAddress = addressChecker(/\b(bc(0([ac-hj-np-z02-9]{39}|[ac-hj-np-z02-9]{59})|1[ac-hj-np-z02-9]{8,87})|[13][a-km-zA-HJ-NP-Z1-9]{25,35})\b/);
const isLTCAddress = addressChecker(/(?:^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$)/);
const isBCHAddressSimple = addressChecker(/(?:^[13][a-km-zA-HJ-NP-Z1-9]{33}$)/);
const isBCHAddressPrefix = addressChecker(/(?:^((bitcoincash|bchreg|bchtest):)?(q|p)[a-z0-9]{41})/);
const isXRPAddress = addressChecker(/(?:^r[0-9a-zA-Z]{24,34}$)/);
export var Infrastructure;
(function (Infrastructure) {
    Infrastructure["ETH"] = "ETH";
    Infrastructure["BTC"] = "BTC";
    Infrastructure["XRP"] = "XRP";
    Infrastructure["LTC"] = "LTC";
    Infrastructure["BCH"] = "BCH";
})(Infrastructure || (Infrastructure = {}));
export function getAddressInfrastructure(address) {
    if (isEthAddress(address)) {
        return Infrastructure.ETH;
    }
    if (isBtcAddress(address) || isBtcSegwitAddress(address)) {
        return Infrastructure.BTC;
    }
    if (isLTCAddress(address)) {
        return Infrastructure.LTC;
    }
    if (isBCHAddressSimple(address) || isBCHAddressPrefix(address)) {
        return Infrastructure.BCH;
    }
    if (isXRPAddress(address)) {
        return Infrastructure.XRP;
    }
}
//# sourceMappingURL=address.js.map