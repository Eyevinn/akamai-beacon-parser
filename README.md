## Installation

   npm install --save akamai-beacon-parser  

## Usage

```javascript
var AkamaiBeaconParser = require('akamai-beacon-parser');
var parser = new AkamaiBeaconParser();
parser.parse(beaconurl);

console.log(parser.payload);

```
