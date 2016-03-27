define({
  "name": "Graph-Calc API server",
  "title": "graphcalc-api docs",
  "header": {
    "title": "graphcalc-api",
    "content": "<p><a href=\"https://travis-ci.org/andrewpmckenzie/graphcalc-api\"><img src=\"https://travis-ci.org/andrewpmckenzie/graphcalc-api.svg?branch=master\" alt=\"Build Status\"></a></p>\n<p>A RESTful API for <a href=\"http://electronifie.github.io/graph-calc/index.html\">graph-calc</a>.</p>\n<p><strong>Installation:</strong> <code>npm install graphcalc-api</code></p>\n<p><strong>Usage:</strong></p>\n<pre><code class=\"language-javascript\">var graphCalcApiServer = require('graphcalc-api');\nvar MyGraph = require('./graph'); // your graphcalc implementation\n\nvar graph = graphCalcApiServer({\n  port: 8080,\n  graph: new MyGraph()\n});\n\n</code></pre>\n"
  },
  "url": "http://localhost:8080",
  "version": "1.0.0",
  "description": "A RESTful API server for graph-calc.",
  "sampleUrl": false,
  "apidoc": "0.2.0",
  "generator": {
    "name": "apidoc",
    "time": "2016-03-27T17:28:02.883Z",
    "url": "http://apidocjs.com",
    "version": "0.14.0"
  }
});
