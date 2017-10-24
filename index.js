'use strict';
const strip = s => s.replace(/\./g, '');

module.exports = new Proxy(
    require('./icann-fee-TLDs.json').reduce(
        (acc, tld) => {
            acc[strip(tld)] = true;
            return acc;
        },
        Object.create(null)
    ),
    {
        get: (target, name) => target[strip(name)] || false,
        set: () => void 0
    }
);
