function validateIPv4(ip) {
    const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipPattern.test(ip)) {
        return false;
    }

    const octets = ip.split('.');
    for (let octet of octets) {
        if (octet < 0 || octet > 255) {
            return false;
        }
    }

    return true;
}

// Test cases
const ip1 = "192.168.1.1";
const ip2 = "256.0.0.1";
const ip3 = "127.0.0.1";
const ip4 = '1.2.3.4';

console.log(ip1 + ": " + validateIPv4(ip1)); // true
console.log(ip2 + ": " + validateIPv4(ip2)); // false
console.log(ip3 + ": " + validateIPv4(ip3)); // true
console.log(ip4 + ": " + validateIPv4(ip4));