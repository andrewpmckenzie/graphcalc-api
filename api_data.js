define({ "api": [
  {
    "type": "get",
    "url": "/edge/:type/:id",
    "title": "details",
    "name": "EdgeDetails",
    "group": "Edge",
    "version": "v1.0.0",
    "description": "<p>Details about an Edge.</p>",
    "filename": "lib/routes/edge/_type_/_id_/get_.js",
    "groupTitle": "Edge",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Edge",
            "optional": false,
            "field": "edge",
            "description": ""
          }
        ],
        "Edge": [
          {
            "group": "Edge",
            "type": "EdgeId",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Edge",
            "type": "EdgeType",
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Edge",
            "type": "NodeId",
            "optional": false,
            "field": "from",
            "description": ""
          },
          {
            "group": "Edge",
            "type": "NodeId",
            "optional": false,
            "field": "to",
            "description": ""
          },
          {
            "group": "Edge",
            "type": "...",
            "optional": false,
            "field": "...",
            "description": "<p>custom edge fields</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Response:",
          "content": "{\n  edge: {\n    'id': 'teaches-Sue-Chemistry',\n    'name': 'teaches-Sue-Chemistry',\n    'type': 'teaches',\n    'from': 'teacher-Sue',\n    'to': 'class-Chemistry'\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/edge/:type",
    "title": "index",
    "name": "EdgeIndex",
    "group": "Edge",
    "version": "v1.0.0",
    "description": "<p>A listing of the edges of a given type.</p>",
    "filename": "lib/routes/edge/_type_/get_.js",
    "groupTitle": "Edge",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "EdgeId:Path",
            "optional": false,
            "field": "routes",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example Response:",
          "content": "{\n  routes: {\n    'teaches-Sue-Chemistry': '/edge/teaches/teaches-Sue-Chemistry',\n    'teaches-Sam-Biology': '/edge/teaches/teaches-Sam-Biology'\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/edge/",
    "title": "type index",
    "name": "TypeIndex",
    "group": "Edge",
    "version": "v1.0.0",
    "description": "<p>A listing of the available edge types.</p>",
    "filename": "lib/routes/edge/get_.js",
    "groupTitle": "Edge",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "EdgeType:Path",
            "optional": false,
            "field": "routes",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example Response:",
          "content": "{\n  routes: {\n    'teaches': '/edge/teaches/',\n    'taughtBy': '/edge/taughtBy/',\n    'attends': '/edge/attends/',\n    'attendedBy': '/edge/attendedBy/',\n    'headOf': '/edge/headOf/',\n    'studentRepOf': '/edge/studentRepOf/',\n    'providedBy': '/edge/providedBy/',\n    'provides': '/edge/provides/'\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/node/:type/:id",
    "title": "details",
    "name": "NodeDetails",
    "group": "Node",
    "version": "v1.0.0",
    "description": "<p>Details about an Node.</p>",
    "filename": "lib/routes/node/_type_/_id_/get_.js",
    "groupTitle": "Node",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Node",
            "optional": false,
            "field": "node",
            "description": ""
          }
        ],
        "Node": [
          {
            "group": "Node",
            "type": "NodeId",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Node",
            "type": "NodeType",
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Node",
            "type": "...",
            "optional": false,
            "field": "...",
            "description": "<p>custom node fields</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Response:",
          "content": "{\n  node: {\n    'id': 'teacher-Sue',\n    'name': 'teacher-Sue',\n    'type': 'teacher'\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/node/:type/:id/graph",
    "title": "graph",
    "name": "NodeGraph",
    "group": "Node",
    "version": "v1.0.0",
    "description": "<p>A graph constructed by traversing from the given node.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "NodeType[]",
            "optional": false,
            "field": "onlyNodeTypes",
            "description": "<p>limit the Graph (and discovery) to these Node types.</p>"
          },
          {
            "group": "Parameter",
            "type": "EdgeType[]",
            "optional": false,
            "field": "onlyEdgeTypes",
            "description": "<p>limit the Graph (and discovery) to these Edge types.</p>"
          },
          {
            "group": "Parameter",
            "type": "NodeType[]",
            "optional": false,
            "field": "excludeNodeTypes",
            "description": "<p>ignore these Node types.</p>"
          },
          {
            "group": "Parameter",
            "type": "EdgeType[]",
            "optional": false,
            "field": "excludeEdgeTypes",
            "description": "<p>ignore these Edge types.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maxDepth",
            "description": "<p>ignore nodes/edges beyond this distance from the anchor node.</p>"
          }
        ]
      }
    },
    "filename": "lib/routes/node/_type_/_id_/get_graph.js",
    "groupTitle": "Node",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Graph",
            "optional": false,
            "field": "graph",
            "description": ""
          }
        ],
        "Graph": [
          {
            "group": "Graph",
            "type": "Edge[]",
            "optional": false,
            "field": "edges",
            "description": ""
          },
          {
            "group": "Graph",
            "type": "Node[]",
            "optional": false,
            "field": "nodes",
            "description": ""
          }
        ],
        "Node": [
          {
            "group": "Node",
            "type": "NodeId",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Node",
            "type": "NodeType",
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Node",
            "type": "...",
            "optional": false,
            "field": "...",
            "description": "<p>custom node fields</p>"
          }
        ],
        "Edge": [
          {
            "group": "Edge",
            "type": "EdgeId",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Edge",
            "type": "EdgeType",
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Edge",
            "type": "NodeId",
            "optional": false,
            "field": "from",
            "description": ""
          },
          {
            "group": "Edge",
            "type": "NodeId",
            "optional": false,
            "field": "to",
            "description": ""
          },
          {
            "group": "Edge",
            "type": "...",
            "optional": false,
            "field": "...",
            "description": "<p>custom edge fields</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Response:",
          "content": "{\n  graph: {\n    nodes: [\n      { id: 'teacher-Sue', name: 'teacher-Sue', type: 'teacher' },\n      { id: 'class-Chemistry', name: 'class-Chemistry', type: 'class' },\n      { id: 'student-Bobby', name: 'student-Bobby', type: 'student' },\n      { id: 'student-Max', name: 'student-Max', type: 'student' }\n    ],\n    edges: [\n      { id: 'teaches-Sue-Chemistry', name: 'teaches-Sue-Chemistry', type: 'teaches', from: 'teacher-Sue', to: 'class-Chemistry' },\n      { id: 'attendedBy-Chemistry-Bobby', name: 'attendedBy-Chemistry-Bobby', type: 'attendedBy', from: 'class-Chemistry', to: 'student-Bobby' },\n      { id: 'attendedBy-Chemistry-Max', name: 'attendedBy-Chemistry-Max', type: 'attendedBy', from: 'class-Chemistry', to: 'student-Max' }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example Request:",
        "content": "curl -i http://localhost:8080/node/teacher/teacher-Sue/graph?onlyNodeTypes=teacher,class,student&onlyEdgeTypes=teaches,attendedBy",
        "type": "curl"
      }
    ]
  },
  {
    "type": "get",
    "url": "/node/:type",
    "title": "index",
    "name": "NodeIndex",
    "group": "Node",
    "version": "v1.0.0",
    "description": "<p>A listing of the nodes of a given type.</p>",
    "filename": "lib/routes/node/_type_/get_.js",
    "groupTitle": "Node",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "NodeId:Path",
            "optional": false,
            "field": "routes",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example Response:",
          "content": "{\n  routes: {\n    'teacher-Sue': '/node/teacher/teacher-Sue',\n    'teacher-Sam': '/node/teacher/teacher-Sam'\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/node/",
    "title": "type index",
    "name": "TypeIndex",
    "group": "Node",
    "version": "v1.0.0",
    "description": "<p>A listing of the available node types.</p>",
    "filename": "lib/routes/node/get_.js",
    "groupTitle": "Node",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "NodeType:Path",
            "optional": false,
            "field": "routes",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example Response:",
          "content": "{\n  routes: {\n    'department': '/node/department/',\n    'teacher': '/node/teacher/',\n    'class': '/node/class/',\n    'student': '/node/student/'\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/graph",
    "title": "graph",
    "name": "FullGraph",
    "group": "Root",
    "version": "v1.0.0",
    "description": "<p>The full graph.</p>",
    "filename": "lib/routes/graph/get_.js",
    "groupTitle": "Root",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Graph",
            "optional": false,
            "field": "graph",
            "description": ""
          }
        ],
        "Graph": [
          {
            "group": "Graph",
            "type": "Edge[]",
            "optional": false,
            "field": "edges",
            "description": ""
          },
          {
            "group": "Graph",
            "type": "Node[]",
            "optional": false,
            "field": "nodes",
            "description": ""
          }
        ],
        "Node": [
          {
            "group": "Node",
            "type": "NodeId",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Node",
            "type": "NodeType",
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Node",
            "type": "...",
            "optional": false,
            "field": "...",
            "description": "<p>custom node fields</p>"
          }
        ],
        "Edge": [
          {
            "group": "Edge",
            "type": "EdgeId",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Edge",
            "type": "EdgeType",
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Edge",
            "type": "NodeId",
            "optional": false,
            "field": "from",
            "description": ""
          },
          {
            "group": "Edge",
            "type": "NodeId",
            "optional": false,
            "field": "to",
            "description": ""
          },
          {
            "group": "Edge",
            "type": "...",
            "optional": false,
            "field": "...",
            "description": "<p>custom edge fields</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Response:",
          "content": "{\n   graph: {\n     edges: [\n       { id: 'teaches-Sue-Chemistry', name: 'teaches-Sue-Chemistry', type: 'teaches', from: 'teacher-Sue', to: 'class-Chemistry' },\n       { id: 'teaches-Sam-Biology', name: 'teaches-Sam-Biology', type: 'teaches', from: 'teacher-Sam', to: 'class-Biology' },\n       { id: 'taughtBy-Chemistry-Sue', name: 'taughtBy-Chemistry-Sue', type: 'taughtBy', from: 'class-Chemistry', to: 'teacher-Sue' },\n       { id: 'taughtBy-Biology-Sam', name: 'taughtBy-Biology-Sam', type: 'taughtBy', from: 'class-Biology', to: 'teacher-Sam' },\n       { id: 'attends-Bobby-Chemistry', name: 'attends-Bobby-Chemistry', type: 'attends', from: 'student-Bobby', to: 'class-Chemistry' },\n       { id: 'attends-Max-Chemistry', name: 'attends-Max-Chemistry', type: 'attends', from: 'student-Max', to: 'class-Chemistry' },\n       { id: 'attendedBy-Chemistry-Bobby', name: 'attendedBy-Chemistry-Bobby', type: 'attendedBy', from: 'class-Chemistry', to: 'student-Bobby' },\n       { id: 'attendedBy-Chemistry-Max', name: 'attendedBy-Chemistry-Max', type: 'attendedBy', from: 'class-Chemistry', to: 'student-Max' },\n       { id: 'headOf-Sam-Science', name: 'headOf-Sam-Science', type: 'headOf', from: 'teacher-Sam', to: 'department-Science' },\n       { id: 'studentRepOf-Max-Science', name: 'studentRepOf-Max-Science', type: 'studentRepOf', from: 'student-Max', to: 'department-Science' },\n       { id: 'providedBy-Chemistry-Science', name: 'providedBy-Chemistry-Science', type: 'providedBy', from: 'class-Chemistry', to: 'department-Science' },\n       { id: 'providedBy-Biology-Science', name: 'providedBy-Biology-Science', type: 'providedBy', from: 'class-Biology', to: 'department-Science' },\n       { id: 'provides-Science-Chemistry', name: 'provides-Science-Chemistry', type: 'provides', from: 'department-Science', to: 'class-Chemistry' },\n       { id: 'provides-Science-Biology', name: 'provides-Science-Biology', type: 'provides', from: 'department-Science', to: 'class-Biology' }\n     ],\n     nodes: [\n       { id: 'department-Science', name: 'department-Science', type: 'department' },\n       { id: 'teacher-Sue', name: 'teacher-Sue', type: 'teacher' },\n       { id: 'teacher-Sam', name: 'teacher-Sam', type: 'teacher' },\n       { id: 'class-Chemistry', name: 'class-Chemistry', type: 'class' },\n       { id: 'class-Biology', name: 'class-Biology', type: 'class' },\n       { id: 'student-Bobby', name: 'student-Bobby', type: 'student' },\n       { id: 'student-Max', name: 'student-Max', type: 'student' }\n     ]\n   }\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/",
    "title": "index",
    "name": "RootIndex",
    "group": "Root",
    "version": "v1.0.0",
    "description": "<p>A listing of the available object types.</p>",
    "filename": "lib/routes/get_.js",
    "groupTitle": "Root",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "routes",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "NodeType:Path",
            "optional": false,
            "field": "routes.node",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "EdgeType:Path",
            "optional": false,
            "field": "routes.edge",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example Response:",
          "content": " {\n  routes: {\n    node: {\n      'department': '/node/department/',\n      'teacher': '/node/teacher/',\n      'class': '/node/class/',\n      'student': '/node/student/'\n    },\n    edge: {\n      'teaches': '/edge/teaches/',\n      'taughtBy': '/edge/taughtBy/',\n      'attends': '/edge/attends/',\n      'attendedBy': '/edge/attendedBy/',\n      'headOf': '/edge/headOf/',\n      'studentRepOf': '/edge/studentRepOf/',\n      'providedBy': '/edge/providedBy/',\n      'provides': '/edge/provides/'\n    }\n  }\n}",
          "type": "json"
        }
      ]
    }
  }
] });
