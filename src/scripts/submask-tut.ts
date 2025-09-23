export default function submaskTut() {
    console.log(ipToBinary('255.240.0.0'));
    console.log(ipToBinary('172.16.5.100'));
    console.log(ipToBinary('172.16.0.0'));
    console.log(ipToBinary('172.20.1.1'));
    console.log(ipToBinary('172.16.0.0'));
    console.log(ipToBinary('172.15.9.100'));
}

function ipToBinary(ip: string) {
    if (!validateIpFormat(ip)) {
        throw new Error('Invalid IP format.');
    }

    const arr = splitIp(ip);
    return arr.map((el) => decimalToOctet(Number(el))).join(' ');
}

function decimalToOctet(decimal: number) {
    return decimal.toString(2).padStart(8, '0');
}

function validateIpFormat(ip: string) {
    const octets = splitIp(ip);

    if (octets.length !== 4) return false;

    return octets.every((octet) => {
        if (octet.length > 1 && octet[0] === '0') return false;

        const num = parseInt(octet, 10);

        return !isNaN(num) && num <= 255 && num >= 0;
    });
}

function splitIp(ip: string) {
    return ip.split('.');
}
