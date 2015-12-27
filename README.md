# graphcalc-api [![Build Status](https://travis-ci.org/andrewpmckenzie/graphcalc-api.svg?branch=master)](https://travis-ci.org/andrewpmckenzie/graphcalc-api)

A RESTful API for [graph-calc](http://electronifie.github.io/graph-calc/index.html).

**Installation:** `npm install graphcalc-api`  

**Usage:**  
```javascript
var graphCalcApiServer = require('graphcalc-api');
var MyGraph = require('./graph'); // you graphcalc implementation

var graph = graphCalcApiServer({
  port: 8080,
  graph: new MyGraph()
});

```
