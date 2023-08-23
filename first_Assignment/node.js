const http = require('http');
const fs = require('fs');
const SHandler = require('./routes');

const result = http.createServer(SHandler);

result.listen(3000);