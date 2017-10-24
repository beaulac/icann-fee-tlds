### ICANN Fee TLDs
Certain TLDs have an ICANN mandatory registrar fee when registering or transferring them. Many registrars don't include this fee in their pricing. The list of TLDs that have an ICANN fee was taken from [here](https://www.namecheap.com/legal/domains/icann-fee.aspx).

#### Usage

```javascript
var hasIcannFee = require('icann-fee-tds');

var nope = hasIcannFee['.ca']; // false

var yep = hasIcannFee['.com']; // true
var dotsAreIgnored = hasIcannFee['com']; // true
```
