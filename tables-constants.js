const TABLE_COMPONENTS = [
  {
    "id"                    : "162ec06d8",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 15,
    "active"                : true,
    "container"             : "F",
    "class"                 : "col-lg-6 col-md-4 col-sm-3 col-xs-6",
    "title"                 : "<b>Cotizaciones  por Usuario</b> <small></small>",
    "fields"                : [
      {
        "field": "auditoria.usuario",
        "alias": "Usuarios"
      },
      {
        "field": "mesCotizacion",
        "alias": "Mes de cotización"
      }
    ],
    "where_column_preset": "tipoCotizacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "NUEVO",
      "RECUPERO"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : ":cantidad",
    "presets"    : [
      "PRESET_DASHBOARD_1._BIANUAL",
      "PRESET_DASHBOARD_2._ANUAL",
      "PRESET_DASHBOARD_3._SEMESTRAL",
      "PRESET_DASHBOARD_4._CUATRIMESTRAL",
      "PRESET_DASHBOARD_5._TRIMESTRAL",
      "PRESET_DASHBOARD_6._BIMESTRAL",
      "PRESET_DASHBOARD_7._MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": true,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "SEGUIMIENTO",
          "ACEPTADO",
          "PENDIENTE",
          "RECHAZADO",
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "RECUPERO"
        ]
      }
    ]
  },
  {
    "id"                    : "49831ed27",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 2,
    "active"                : true,
    "container"             : "A",
    "class"                 : "col-lg-6 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas</b> <small>por Usuario</small>",
    "fields"                : [
      {
        "field": "usuario_emitido",
        "alias": ""
      },
      {
        "field": "diaEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "tipoCotizacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "NUEVO",
      "REEMPLAZO",
      "RECUPERO"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "<b>[:cantidad]</b> fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_8._SEMANAL",
      "PRESET_DASHBOARD_9._POR_DÍA"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      }
    ]
  },
  {
    "id"                    : "1e88b2e8a",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Emisiones",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Polizas</b> <small></small>",
    "fields"                : [
      {
        "field"   : "usuario_emitido",
        "metadata": "",
        "alias"   : "Usuario"
      },
      {
        "field"   : "mesEstadoCotizacion",
        "metadata": "",
        "alias"   : "Mes de emisión"
      }
    ],
    "where_column_preset": "tipoCanal.id",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "1162",
      "191"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "<b>:cantidad</b> fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_1._BIANUAL",
      "PRESET_DASHBOARD_2._ANUAL",
      "PRESET_DASHBOARD_3._SEMESTRAL",
      "PRESET_DASHBOARD_4._CUATRIMESTRAL",
      "PRESET_DASHBOARD_5._TRIMESTRAL",
      "PRESET_DASHBOARD_6._BIMESTRAL"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "VENCIDA"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162",
          "191"
        ]
      }
    ]
  },
  {
    "id"       : "47cdff48a",
    "order"    : 3,
    "active"   : true,
    "container": "B",
    "class"    : "col-lg-6 col-md-4 col-sm-6 col-xs-12",
    "title"    : "<b>Pólizas</b> <small>por Compañia de Seguros</small>",
    "fields"   : [
      {
        "field": "aseguradora.descripcion",
        "alias": ""
      },
      {
        "field": "diaEstadoCotizacion",
        "alias": ""
      }
    ],
    "where": {
      "column": "estadoCotizacion",
      "value" : [
        "EMITIDO"
      ]
    },
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "<b>[:cantidad]</b> fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_8._SEMANAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"                    : "16a480f5e",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 18,
    "active"                : true,
    "container"             : "F",
    "class"                 : "col-lg-6 col-md-4 col-sm-3 col-xs-6",
    "title"                 : "<b>Cotizaciones</b> <small>por Tipo Cotización</small>",
    "fields"                : [
      {
        "field": "tipoCotizacion",
        "alias": ""
      },
      {
        "field": "mesCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "tipoCotizacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "NUEVO",
      "RECUPERO"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad]",
    "presets"    : [
      "PRESET_DASHBOARD_1._BIANUAL",
      "PRESET_DASHBOARD_2._ANUAL",
      "PRESET_DASHBOARD_3._SEMESTRAL",
      "PRESET_DASHBOARD_4._CUATRIMESTRAL",
      "PRESET_DASHBOARD_5._TRIMESTRAL",
      "PRESET_DASHBOARD_6._BIMESTRAL",
      "PRESET_DASHBOARD_7._MENSUAL",
      "PRESET_DASHBOARD_8._SEMANAL",
      "PRESET_DASHBOARD_9._POR_DÍA"
    ],
    "showGraph"        : false,
    "combineDuplicated": true,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "SEGUIMIENTO",
          "ACEPTADO",
          "PENDIENTE",
          "RECHAZADO",
          "EMITIDO",
          "ANULADO"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "RECUPERO"
        ]
      }
    ]
  },
  {
    "id"                    : "1ee77b83e",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 16,
    "active"                : true,
    "container"             : "E",
    "class"                 : "col-lg-6 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Cotizaciones</b> <small>por Tipo de Canal</small>",
    "fields"                : [
      {
        "field": "tipoCanal.tipoCanal",
        "alias": "Tipo canal"
      },
      {
        "field": "auditoria.usuario",
        "alias": "Usuarios"
      }
    ],
    "where_column_preset": "tipoCotizacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "NUEVO",
      "RECUPERO"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : ":cantidad",
    "presets"    : [
      "PRESET_DASHBOARD_1._BIANUAL",
      "PRESET_DASHBOARD_2._ANUAL",
      "PRESET_DASHBOARD_3._SEMESTRAL",
      "PRESET_DASHBOARD_4._CUATRIMESTRAL",
      "PRESET_DASHBOARD_5._TRIMESTRAL",
      "PRESET_DASHBOARD_6._BIMESTRAL",
      "PRESET_DASHBOARD_7._MENSUAL",
      "PRESET_DASHBOARD_8._SEMANAL",
      "PRESET_DASHBOARD_9._POR_DÍA"
    ],
    "showGraph"        : false,
    "combineDuplicated": true,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "SEGUIMIENTO",
          "ACEPTADO",
          "PENDIENTE",
          "RECHAZADO",
          "EMITIDO",
          "ANULADO"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "RECUPERO"
        ]
      }
    ]
  },
  {
    "id"       : "45954fd56",
    "order"    : 8,
    "active"   : true,
    "container": "D",
    "class"    : "col-lg-6 col-md-6 col-sm-12 col-xs-12",
    "title"    : "<b>Pólizas</b> <b>por Tipo de Canal por Usuario<b/>",
    "fields"   : [
      {
        "field": "tipoCanal.tipoCanal",
        "alias": ""
      },
      {
        "field": "auditoria.usuario",
        "alias": ""
      }
    ],
    "where": [
      {
        "column": "estadoCotizacion",
        "value" : [
          "EMITIDO",
          "VENCIDA"
        ]
      },
      {
        "column": "",
        "value" : []
      }
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "<b>[:cantidad]</b> fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_2._ANUAL",
      "PRESET_DASHBOARD_7._MENSUAL",
      "PRESET_DASHBOARD_8._SEMANAL",
      "PRESET_DASHBOARD_9._POR_DÍA"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"       : "1422bf8f-39aa-44f8-badc-22b88347ba03",
    "order"    : 4,
    "active"   : true,
    "container": "A",
    "class"    : "col-lg-6  col-md-4 col-sm-6 col-xs-12",
    "title"    : "<b>Pólizas</b> <small> </small>",
    "fields"   : [
      {
        "field": "tipoDocumento",
        "alias": "Tipo Doc"
      },
      {
        "field": "mesEstadoCotizacion",
        "alias": "Meses"
      }
    ],
    "where": {
      "column": "estadoCotizacion",
      "value" : [
        "EMITIDO"
      ]
    },
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "<b>[:cantidad]</b> fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_5._TRIMESTRAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": true,
    "visibleAll"       : true
  },
  {
    "id"       : "54e6f2df-5f4e-4a37-86af-2b2c3df6a782",
    "order"    : 8,
    "active"   : true,
    "container": "B",
    "class"    : "col-lg-6 col-md-4 col-sm-6 col-xs-12",
    "title"    : "<b>Pólizas</b> <small></small>",
    "fields"   : [
      {
        "field": "aseguradora.descripcion",
        "alias": ""
      },
      {
        "field": "tipoDocumento",
        "alias": ""
      }
    ],
    "where": {
      "column": "estadoCotizacion",
      "value" : [
        "EMITIDO"
      ]
    },
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "<b>[:cantidad]</b> fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_5._TRIMESTRAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"       : "dc5875e4-e25d-4163-8bd0-dfa709f4209e",
    "order"    : 5,
    "active"   : true,
    "container": "C",
    "class"    : "col-lg-6 col-md-4 col-sm-6 col-xs-12",
    "title"    : "<b>Pólizas</b> <b>por Tipo de Cotización</b>",
    "fields"   : [
      {
        "field": "tipoCotizacion",
        "alias": ""
      },
      {
        "field": "mesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where": [
      {
        "column": "estadoCotizacion",
        "value" : [
          "EMITIDO",
          "VENCIDA"
        ]
      },
      {
        "column": "tipoCotizacion",
        "value" : [
          "NUEVO",
          "RECUPERO",
          "TRASLADO"
        ]
      }
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "<b>[:cantidad]</b> fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_2._ANUAL",
      "PRESET_DASHBOARD_3._SEMESTRAL",
      "PRESET_DASHBOARD_4._CUATRIMESTRAL",
      "PRESET_DASHBOARD_5._TRIMESTRAL",
      "PRESET_DASHBOARD_6._BIMESTRAL",
      "PRESET_DASHBOARD_7._MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"       : "2e65a3b4-cb5d-4313-b60f-9a2df85e091f",
    "order"    : 6,
    "active"   : true,
    "container": "C",
    "class"    : "col-lg-6 col-md-4 col-sm-6 col-xs-12",
    "title"    : "<b>Pólizas</b> <small>por Canal por mes</small>",
    "fields"   : [
      {
        "field": "tipoCanal.tipoCanal",
        "alias": ""
      },
      {
        "field": "mesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where": {
      "column": "estadoCotizacion",
      "value" : [
        "EMITIDO"
      ]
    },
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "<b>[:cantidad]</b> fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_2._ANUAL",
      "PRESET_DASHBOARD_3._SEMESTRAL",
      "PRESET_DASHBOARD_4._CUATRIMESTRAL",
      "PRESET_DASHBOARD_5._TRIMESTRAL",
      "PRESET_DASHBOARD_6._BIMESTRAL",
      "PRESET_DASHBOARD_7._MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"                    : "4b647c55-1a10-4975-b011-f82c94ca19bb",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 7,
    "active"                : true,
    "container"             : "D",
    "class"                 : "col-lg-6 col-md-6 col-sm-12 col-xs-12",
    "title"                 : "<FONT COLOR=\"red\"><b>Pólizas</b></FONT> <b>por Usuario y USO</b>",
    "fields"                : [
      {
        "field": "auditoria.usuario",
        "alias": ""
      },
      {
        "field": "uso.descripcion",
        "alias": ""
      }
    ],
    "where_column_preset": "tipoCotizacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "NUEVO",
      "REEMPLAZO",
      "RECUPERO"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "<b>[:cantidad]</b> fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_1._BIANUAL",
      "PRESET_DASHBOARD_2._ANUAL",
      "PRESET_DASHBOARD_3._SEMESTRAL",
      "PRESET_DASHBOARD_4._CUATRIMESTRAL",
      "PRESET_DASHBOARD_5._TRIMESTRAL",
      "PRESET_DASHBOARD_6._BIMESTRAL",
      "PRESET_DASHBOARD_7._MENSUAL",
      "PRESET_DASHBOARD_8._SEMANAL",
      "PRESET_DASHBOARD_9._POR_DÍA"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      }
    ]
  },
  {
    "id"       : "026e3f30-e577-4595-ba5f-3e2543506d9b",
    "order"    : 1,
    "active"   : true,
    "container": "A",
    "class"    : "col-lg-3 col-md-4 col-sm-6 col-xs-12",
    "title"    : "<b>[Título]</b> <small>por [Agrupador]</small>",
    "fields"   : [
      {
        "field": "uso.descripcion",
        "alias": ""
      },
      {
        "field": "",
        "alias": ""
      }
    ],
    "where": {
      "column": "",
      "value" : []
    },
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_ESTRA"
    ],
    "showGraph"        : true,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"       : "309860a9-30a7-4747-b196-1d1dc759f499",
    "order"    : 1,
    "active"   : true,
    "container": "A",
    "class"    : "col-lg-48 col-md-12 col-sm-12 col-xs-12 row-48",
    "title"    : "<FONT COLOR=\"blue\"><b> Emisiones por Marcas y Usuarios</b> <small></FONT>",
    "fields"   : [
      {
        "field": "vehiculo.marca.descripcion",
        "alias": ""
      },
      {
        "field": "auditoria.usuario",
        "alias": ""
      }
    ],
    "where": {
      "column": "estadoCotizacion",
      "value" : [
        "EMITIDO",
        "VENCIDA"
      ]
    },
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "<b>[:cantidad]</b> <FONT COLOR=\"blue\"><b>fn(currency(:suma / (1.18 * 1.03)))</b></FONT>",
    "presets"    : [
      "PRESET_DASHBOARD_9._ANUAL_POR_MODELOS"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"       : "24d25d1c-57c1-4136-90ce-6bae96930bfa",
    "order"    : 1,
    "active"   : true,
    "container": "A",
    "class"    : "col-lg-3 col-md-4 col-sm-6 col-xs-12",
    "title"    : "<b>[Título]</b> <small>por [Agrupador]</small>",
    "fields"   : [
      {
        "field": "uso.descripcion",
        "alias": ""
      },
      {
        "field": "",
        "alias": ""
      }
    ],
    "where": {
      "column": "",
      "value" : []
    },
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_BIDIARIO"
    ],
    "showGraph"        : true,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"       : "d231356f-2980-47d9-a678-7a60b8eec154",
    "order"    : 2,
    "active"   : true,
    "container": "B",
    "class"    : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"    : "<b>Polizas por freelance y USUARIO</b>",
    "fields"   : [
      {
        "field": "canal.usuario.usuario",
        "alias": ""
      },
      {
        "field": "auditoria.usuario",
        "alias": ""
      }
    ],
    "where": {
      "column": "estadoCotizacion",
      "value" : [
        "EMITIDO"
      ]
    },
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_10._VARIOS"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"       : "c833a3c8-9e01-481f-80f9-63bdece5c529",
    "order"    : 1,
    "active"   : true,
    "container": "A",
    "class"    : "col-lg-3 col-md-4 col-sm-6 col-xs-12",
    "title"    : "<b>[Título]</b> <small>por [Agrupador]</small>",
    "fields"   : [
      {
        "field": "canal.usuario.usuario",
        "alias": ""
      },
      {
        "field": "",
        "alias": ""
      }
    ],
    "where": {
      "column": "estadoCotizacion",
      "value" : [
        "EMITIDO"
      ]
    },
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_10._VARIOS"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"       : "26d5c079-1805-421b-adab-0dbed388a53d",
    "order"    : 1,
    "active"   : true,
    "container": "PRUEBAS (Manuel)",
    "class"    : "col-12",
    "title"    : "<b>[Título]</b> <small>por [Agrupador]</small>",
    "fields"   : [
      {
        "field": "vehiculo.modelo.descripcion",
        "alias": "Modelos"
      },
      {
        "field": "uso.descripcion",
        "alias": "Usos"
      }
    ],
    "where": {
      "column": "estadoCotizacion",
      "value" : [
        "EMITIDO"
      ]
    },
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_ANUAL_10._VARIOS"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"       : "c0909f8a-a292-4b2d-a62e-f38f27d6a14d",
    "order"    : 1,
    "active"   : true,
    "container": "A",
    "class"    : "col-lg-3 col-md-4 col-sm-6 col-xs-12",
    "title"    : "<b>[Título]</b> <small>por [Agrupador]</small>",
    "fields"   : [
      {
        "field": "uso.descripcion",
        "alias": ""
      },
      {
        "field": "tipoDocumento",
        "alias": ""
      }
    ],
    "where": {
      "column": "tipoDocumento",
      "value" : []
    },
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_PRUEBA_PRESET"
    ],
    "showGraph"        : true,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"       : "009b902c-47c4-47c9-ae28-2248f59219bb",
    "order"    : 2,
    "active"   : true,
    "container": "B",
    "class"    : "col-lg-48 col-md-12 col-sm-12 col-xs-12 row-48",
    "title"    : "<FONT COLOR=\"blue\"><b>Emisiones por Marcas y Modelo</b> </FONT>",
    "fields"   : [
      {
        "field": "vehiculo.marca.descripcion",
        "alias": ""
      },
      {
        "field": "vehiculo.modelo.descripcion",
        "alias": ""
      }
    ],
    "where": {
      "column": "estadoCotizacion",
      "value" : [
        "EMITIDO",
        "VENCIDA"
      ]
    },
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "<b>[:cantidad]</b> <FONT COLOR=\"blue\"><b>fn(currency(:suma / (1.18 * 1.03)))</b></FONT>",
    "presets"    : [
      "PRESET_DASHBOARD_9._ANUAL_POR_MODELOS"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"       : "ef28a719-d17f-4f02-b25e-0b1e72261d3d",
    "order"    : 3,
    "active"   : true,
    "container": "C",
    "class"    : "col-lg-48 col-md-12 col-sm-12 col-xs-12 row-48",
    "title"    : "<b>[Título]</b> <small>por [Agrupador]</small>",
    "fields"   : [
      {
        "field": "vehiculo.marca.descripcion",
        "alias": ""
      },
      {
        "field": "mesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where": {
      "column": "estadoCotizacion",
      "value" : [
        "EMITIDO",
        "VENCIDA"
      ]
    },
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "<b>[:cantidad]</b> <FONT COLOR=\"blue\"><b>fn(currency(:suma / (1.18 * 1.03)))</b></FONT>",
    "presets"    : [
      "PRESET_DASHBOARD_9._ANUAL_POR_MODELOS"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"       : "c657dc0a-2a0b-4580-8345-c6c6c9b1d90a",
    "order"    : 9,
    "active"   : true,
    "container": "E",
    "class"    : "col-lg-6 col-md-6 col-sm-12 col-xs-12",
    "title"    : "<b>Polizas</b> <small>por marca</small>",
    "fields"   : [
      {
        "field": "vehiculo.marca.descripcion",
        "alias": "Marca"
      },
      {
        "field": "mesEstadoCotizacion",
        "alias": "Mes"
      }
    ],
    "where": [
      {
        "column": "estadoCotizacion",
        "value" : [
          "EMITIDO"
        ]
      },
      {
        "column": "tipoCotizacion",
        "value" : [
          "NUEVO",
          "RECUPERO"
        ]
      }
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_2._ANUAL",
      "PRESET_DASHBOARD_3._SEMESTRAL",
      "PRESET_DASHBOARD_4._CUATRIMESTRAL",
      "PRESET_DASHBOARD_5._TRIMESTRAL",
      "PRESET_DASHBOARD_7._MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": true,
    "visibleAll"       : true
  },
  {
    "id"                    : "b0180e0a-d021-4b50-a9e0-d52053e43bd6",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 2,
    "active"                : true,
    "container"             : "A",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<FONT COLOR=\"red\"><b>Anulaciones por Usuario</b> ",
    "fields"                : [
      {
        "field": "auditoria.usuario",
        "alias": "Usuario"
      },
      {
        "field": "mesEstadoCotizacion",
        "alias": "Mes de Anulación"
      }
    ],
    "where_column_preset": "sub_estado_descripcion",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "CAMBIO DE CIA. SEGUROS",
      "CAMBIO DE ASEGURADO",
      "CAMBIO DE VEHICULO",
      "CAMBIO DE VIGENCIA",
      "REEMPLAZO DE POLIZA",
      "DUPLICIDAD"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "<b>[:cantidad]</b> fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_1._BIANUAL",
      "PRESET_DASHBOARD_2._ANUAL",
      "PRESET_DASHBOARD_3._SEMESTRAL",
      "PRESET_DASHBOARD_4._CUATRIMESTRAL",
      "PRESET_DASHBOARD_5._TRIMESTRAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "ANULADO"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE VEHICULO",
          "CAMBIO DE VIGENCIA",
          "REEMPLAZO DE POLIZA",
          "DUPLICIDAD"
        ]
      }
    ]
  },
  {
    "id"                    : "ad5b8285-5c02-4379-bfae-f69594cf8a59",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 4,
    "active"                : true,
    "container"             : "B",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<FONT COLOR=\"red\"><b>Anulaciones por Aseguradora</b> ",
    "fields"                : [
      {
        "field": "aseguradora.descripcion",
        "alias": ""
      },
      {
        "field": "mesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "tipoCotizacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "NUEVO",
      "REEMPLAZO",
      "RECUPERO",
      "TRASLADO"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_2._ANUAL",
      "PRESET_DASHBOARD_3._SEMESTRAL",
      "PRESET_DASHBOARD_4._CUATRIMESTRAL",
      "PRESET_DASHBOARD_5._TRIMESTRAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "ANULADO"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO",
          "TRASLADO"
        ]
      }
    ]
  },
  {
    "id"                    : "531dc1fb-e7e1-4f7a-a38a-bc6e0d99abba",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Comparativo de Produccion {{nombreUsuarioSesion}}",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas emitidas</small></b><b>(incluye anuladas)</small></b",
    "fields"                : [
      {
        "field": "anioEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "sub_estado_descripcion",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "CAMBIO DE ASEGURADO",
      "CAMBIO DE CIA. SEGUROS",
      "CAMBIO DE VEHICULO",
      "CAMBIO DE VIGENCIA",
      "REEMPLAZO DE POLIZA",
      "DUPLICIDAD"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_11._USUARIO"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "usuarioSesion"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162",
          "191"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VEHICULO",
          "CAMBIO DE VIGENCIA",
          "REEMPLAZO DE POLIZA",
          "DUPLICIDAD"
        ]
      }
    ]
  },
  {
    "id"                    : "c48145f4-5b39-476c-9bc3-500e89e21e21",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 6,
    "active"                : true,
    "container"             : "Acumulado anual a Mayo",
    "class"                 : "col-lg-4 col-md-12 col-sm-12 col-xs-12 row-48",
    "title"                 : "<b>Por Aseguradora</small></b>",
    "fields"                : [
      {
        "field": "aseguradora.descripcion",
        "alias": ""
      },
      {
        "field": "anioEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "auditoria.usuario",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "usuarioSesion"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_11._USUARIO"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05"
        ]
      },
      {
        "column": "auditoria.usuario",
        "type"  : "eq",
        "value" : [
          "usuarioSesion"
        ]
      }
    ]
  },
  {
    "id"                    : "a2882f7d-1427-4642-9151-3c8299615019",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 4,
    "active"                : true,
    "container"             : "Acumulado anual a Mayo",
    "class"                 : "col-sm-12 col-md-6 col-lg-4",
    "title"                 : "<b>Por freelance</small></b>",
    "fields"                : [
      {
        "field": "canal.usuario.usuario",
        "alias": ""
      },
      {
        "field": "anioEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "auditoria.usuario",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "usuarioSesion"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_11._USUARIO"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05"
        ]
      },
      {
        "column": "auditoria.usuario",
        "type"  : "eq",
        "value" : [
          "usuarioSesion"
        ]
      }
    ]
  },
  {
    "id"                    : "305b97ab-39d0-4c99-a89b-7e50906fe624",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 3,
    "active"                : true,
    "container"             : "B",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas</b> <small>por Compañia de Seguros</small>",
    "fields"                : [
      {
        "field"   : "aseguradora.descripcion",
        "metadata": "",
        "alias"   : ""
      },
      {
        "field"   : "mesEstadoCotizacion",
        "metadata": "",
        "alias"   : ""
      }
    ],
    "where_column_preset": "tipoCotizacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "NUEVO",
      "REEMPLAZO",
      "RECUPERO",
      "TRASLADO"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_1._BIANUAL",
      "PRESET_DASHBOARD_2._ANUAL",
      "PRESET_DASHBOARD_3._SEMESTRAL",
      "PRESET_DASHBOARD_4._CUATRIMESTRAL",
      "PRESET_DASHBOARD_5._TRIMESTRAL"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "VENCIDA"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO",
          "TRASLADO"
        ]
      }
    ]
  },
  {
    "id"                    : "4ddd6b8c-c30d-45f0-8ea7-6bbd8bfd1b9e",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 2,
    "active"                : true,
    "container"             : "A",
    "class"                 : "col-sm-12 col-md-6 col-lg-8",
    "title"                 : "<b>Pólizas</b> <small>por Usuario</small>",
    "fields"                : [
      {
        "field": "diaEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "auditoria.usuario",
        "alias": ""
      }
    ],
    "where_column_preset": "tipoCotizacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "NUEVO",
      "REEMPLAZO",
      "RECUPERO"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_7._MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      }
    ]
  },
  {
    "id"                    : "029d55d8-099f-489b-b2c3-7270aaaddc01",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 4,
    "active"                : true,
    "container"             : "B",
    "class"                 : "col-lg-9 col-md-6 col-sm-6 col-xs-8",
    "title"                 : "<b>Pólizas</b> <small>por Aseguradora</small>",
    "fields"                : [
      {
        "field"   : "diaEstadoCotizacion",
        "metadata": "",
        "alias"   : ""
      },
      {
        "field"   : "aseguradora.descripcion",
        "metadata": "",
        "alias"   : ""
      }
    ],
    "where_column_preset": "tipoCotizacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "NUEVO",
      "REEMPLAZO",
      "RECUPERO",
      "TRASLADO"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_7._MENSUAL"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO",
          "TRASLADO"
        ]
      }
    ]
  },
  {
    "id"                    : "1fbd0681-0c09-459a-8e46-eda12f7f22c8",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "A",
    "class"                 : "col-lg-3 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas</b> <small>por Usuario</small>",
    "fields"                : [
      {
        "field": "auditoria.usuario",
        "alias": ""
      },
      {
        "field": "mesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where": [
      {
        "column": "estadoCotizacion",
        "value" : [
          "EMITIDO"
        ]
      },
      {
        "column": "tipoCotizacion",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      }
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_7._MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"                    : "96aabff4-5c06-4c68-a63a-f24e943af0de",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 3,
    "active"                : true,
    "container"             : "B",
    "class"                 : "col-lg-3 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas</b> <small>por Aseguradora</small>",
    "fields"                : [
      {
        "field"   : "aseguradora.descripcion",
        "metadata": "",
        "alias"   : ""
      },
      {
        "field"   : "mesEstadoCotizacion",
        "metadata": "",
        "alias"   : ""
      }
    ],
    "where_column_preset": "tipoCotizacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "NUEVO",
      "REEMPLAZO",
      "RECUPERO",
      "TRASLADO"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_7._MENSUAL"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO",
          "TRASLADO"
        ]
      }
    ]
  },
  {
    "id"       : "d31e7683-5b82-45da-af0c-19886e4cd829",
    "order"    : 8,
    "active"   : true,
    "container": "F",
    "class"    : "col-lg-12 col-md-6 col-sm-6 col-xs-6",
    "title"    : "<b>Pólizas</b> <b>por Agrupador</b>",
    "fields"   : [
      {
        "field": "agrupador.descripcion",
        "alias": "Agrupador"
      },
      {
        "field": "mesEstadoCotizacion",
        "alias": "Mes"
      }
    ],
    "where": [
      {
        "column": "estadoCotizacion",
        "value" : [
          "EMITIDO",
          "VENCIDA"
        ]
      },
      {
        "column": "tipoCotizacion",
        "value" : [
          "NUEVO",
          "RECUPERO"
        ]
      }
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "<b>[:cantidad]</b> fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_2._ANUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false
  },
  {
    "id"       : "f3f929bf-d3b8-408f-af12-361863ee143a",
    "order"    : 1,
    "active"   : true,
    "container": "A",
    "class"    : "col-lg-3 col-md-4 col-sm-6 col-xs-12",
    "title"    : "<b>Emitidas</b> <b>por día</b>",
    "fields"   : [
      {
        "field": "diaEstadoCotizacion",
        "alias": "ACONDORI"
      },
      {
        "field": "diaEstadoCotizacion",
        "alias": ""
      }
    ],
    "where": [
      {
        "column": "estadoCotizacion",
        "value" : [
          "EMITIDO"
        ]
      },
      {
        "column": "auditoria.usuario",
        "value" : [
          "acondori"
        ]
      }
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_12._USUARIO-MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": true,
    "visibleAll"       : false
  },
  {
    "id"       : "1a3c54eb-4f25-42c1-b527-86ea876aa0a0",
    "order"    : 1,
    "active"   : true,
    "container": "B",
    "class"    : "col-lg-3 col-md-4 col-sm-6 col-xs-12",
    "title"    : "<b>Emitidas</b> <b>por día</b>",
    "fields"   : [
      {
        "field": "diaEstadoCotizacion",
        "alias": "NHERRERA"
      },
      {
        "field": "diaEstadoCotizacion",
        "alias": ""
      }
    ],
    "where": [
      {
        "column": "estadoCotizacion",
        "value" : [
          "EMITIDO"
        ]
      },
      {
        "column": "auditoria.usuario",
        "value" : [
          "nherrera"
        ]
      }
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_12._USUARIO-MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": true,
    "visibleAll"       : false
  },
  {
    "id"               : "6049417d-f13f-412e-ab07-9909471188ce",
    "cbo_origen_preset": "renovaciones",
    "order"            : 1,
    "active"           : true,
    "container"        : "A",
    "class"            : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"            : "<b>Renovaciones</b> <small>por Mes</small>",
    "fields"           : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "mesRenovacion",
        "alias": ""
      }
    ],
    "where"      : [],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "quantity",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_RENOVACIONES"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false
  },
  {
    "id"               : "905f1c27-88de-46f8-ae58-3928f85e1e15",
    "cbo_origen_preset": "renovaciones",
    "order"            : 2,
    "active"           : true,
    "container"        : "B",
    "class"            : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"            : "<b>Renovaciones</b> <small>por Usuario</small>",
    "fields"           : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where"      : [],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_RENOVACIONES"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false
  },
  {
    "id"                    : "5bd85581-8148-46d7-8ad5-fd0a01a47554",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Resultados al 13 de enero 26re 2025",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Resultado</b> <b>mes por mes<b/>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "mesRenovacion",
        "alias": ""
      }
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "<b>[:cantidad]</b>  fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_12._RENOVACIONES_ANUAL"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : []
  },
  {
    "id"                    : "61128cc3-d2f1-422c-966c-5d9b61dd421d",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 3,
    "active"                : true,
    "container"             : "{{usuarioRenovacion}}",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Resultado</b> <b>mes por mes</b>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "mesRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "usuarioRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "edurand"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_12._RENOVACIONES_ANUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "usuarioRenovacion",
        "type"  : "eq",
        "value" : [
          "edurand"
        ]
      }
    ]
  },
  {
    "id"                    : "4f3fed2b-d3b6-4ae0-bc6a-5ccfea4edbb3",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Resultados al 28 de Febrero 2025",
    "class"                 : "col-lg-12 col-md-6 col-sm-12 col-xs-12",
    "title"                 : "<b>Resultado</b> <small>por mes de Renovacion</small>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "mesRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_13._RENOVACIONES_MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      }
    ]
  },
  {
    "id"                    : "7d61c2a3-12d8-4620-8808-c19815fb6eb2",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "A",
    "class"                 : "col-lg-12 col-md-12 col-sm-12 col-xs-12",
    "title"                 : "<b>Renovaciones</b> <small>por Mes</small>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "mesRenovacion",
        "alias": ""
      }
    ],
    "where"      : [],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_14._PRUEBA"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false
  },
  {
    "id"                    : "69d9583c-245f-41f8-8a19-97349b77f669",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": true,
    "order"                 : 2,
    "active"                : true,
    "container"             : "B",
    "class"                 : "col-lg-12 col-md-12 col-sm-12 col-xs-12",
    "title"                 : "<b>Renovaciones</b> <small>por usuario y estado</small>",
    "fields"                : [
      {
        "field": "usuarioRenovacion",
        "alias": ""
      },
      {
        "field": "estadoRenovacion",
        "alias": ""
      }
    ],
    "where"      : [],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_14._PRUEBA"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false
  },
  {
    "id"                    : "88962e74-a93a-4050-bcdb-e8d311f6422a",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 3,
    "active"                : true,
    "container"             : "{{usuarioRenovacion}}",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Resultado</b> <b>mes por mes</b>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "mesRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "usuarioRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "corellana"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_12._RENOVACIONES_ANUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "usuarioRenovacion",
        "type"  : "eq",
        "value" : [
          "corellana"
        ]
      }
    ]
  },
  {
    "id"                    : "3ecd33e7-e8ac-4f4b-87a2-a40954f16404",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 3,
    "active"                : true,
    "container"             : "C",
    "class"                 : "col-lg-12 col-md-12 col-sm-12  col-xs-12",
    "title"                 : "<b>Renovaciones</b> <small>por usuarios</small>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where": [
      {
        "column": "usuarioRenovacion",
        "value" : [
          "corellana",
          "clezama"
        ]
      },
      {
        "column": "mesRenovacion",
        "value" : [
          "2024-02"
        ]
      }
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_14._PRUEBA"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false
  },
  {
    "id"                    : "abff7d8b-ac99-4c57-a4e3-133f6aca733b",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 9,
    "active"                : true,
    "container"             : "Por Compañía de Seguros",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Resultado</b> <b>Anual<b/>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "aseguradoraDescripcion",
        "alias": ""
      }
    ],
    "where"      : [],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_12._RENOVACIONES_ANUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"                    : "3ba66bff-769e-4678-bf57-108957a363c8",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 5,
    "active"                : true,
    "container"             : "{{soloMesRenovacion}} {{anioRenovacion}}",
    "class"                 : "col-12",
    "title"                 : "<b>Resultado</b> <small>por Usuario</small> {{soloMesRenovacion}}",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "03",
      "09"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_16._RENOVACIONES_VISTA_6_MESES"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "03",
          "09"
        ]
      }
    ]
  },
  {
    "id"                    : "e72d8f7a-891f-4a07-b5fb-0f0c28e8cb1a",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 5,
    "active"                : true,
    "container"             : "{{usuarioRenovacion}}",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Resultado</b> <b>mes por mes</b>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "mesRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "usuarioRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "mherrera"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma ))",
    "presets"    : [
      "PRESET_DASHBOARD_12._RENOVACIONES_ANUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "usuarioRenovacion",
        "type"  : "eq",
        "value" : [
          "mherrera"
        ]
      }
    ]
  },
  {
    "id"                    : "6e0431b9-695e-4067-b770-e2a943874c38",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 6,
    "active"                : true,
    "container"             : "{{usuarioRenovacion}}",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Resultados</b> <b>mes por mes</b>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "mesRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "usuarioRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "clezama"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_12._RENOVACIONES_ANUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "usuarioRenovacion",
        "type"  : "eq",
        "value" : [
          "clezama"
        ]
      }
    ]
  },
  {
    "id"                    : "77f4b76a-d406-459d-8259-d5ae4c6026c7",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 7,
    "active"                : true,
    "container"             : "{{usuarioRenovacion}}",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Resultados</b> <b>mes por mes</b>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "mesRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "usuarioRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "acondori"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_12._RENOVACIONES_ANUAL"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "usuarioRenovacion",
        "type"  : "eq",
        "value" : [
          "acondori"
        ]
      }
    ]
  },
  {
    "id"                    : "1dcb9250-08e6-4e5a-b65d-9250d3c99820",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 8,
    "active"                : true,
    "container"             : "{{usuarioRenovacion}}",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Resultados</b> <b>mes por mes</b>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "mesRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "usuarioRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "mniquen"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_12._RENOVACIONES_ANUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "usuarioRenovacion",
        "type"  : "eq",
        "value" : [
          "mniquen"
        ]
      }
    ]
  },
  {
    "id"                    : "b7e09540-5963-4b3c-9d9a-9ac10ac765f0",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 2,
    "active"                : true,
    "container"             : "{{soloMesRenovacion}}",
    "class"                 : "col-12",
    "title"                 : "<b>Resultado</b> <small>por ejecutivo</small> {{soloMesRenovacion}}",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where": [
      {
        "column": "soloMesRenovacion",
        "value" : [
          "02",
          "05",
          "08",
          "11"
        ]
      }
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_15._RENOVACIONES__TRIMESTRAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"                    : "ee8d642c-fce7-41b9-b2b7-db86ca572155",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Mes a Mes",
    "class"                 : "col-lg-6 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>{{soloMesRenovacion}}  {{anioRenovacion}}</b> <small>por Usuario</small>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "01"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_13._RENOVACIONES_MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "01"
        ]
      }
    ]
  },
  {
    "id"                    : "5db373f1-5132-45c5-a15f-24815db64911",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 2,
    "active"                : true,
    "container"             : "Mes a Mes",
    "class"                 : "col-lg-6 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>{{soloMesRenovacion}}  {{anioRenovacion}}</b> <small>por Usuario</small>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "02"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_13._RENOVACIONES_MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "02"
        ]
      }
    ]
  },
  {
    "id"                    : "f589412b-e608-4b46-a308-521bd413e8df",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 4,
    "active"                : true,
    "container"             : "Mes a Mes",
    "class"                 : "col-lg-6 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>{{soloMesRenovacion}}  {{anioRenovacion}}</b> <small>por Usuario</small>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "04"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_13._RENOVACIONES_MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "04"
        ]
      }
    ]
  },
  {
    "id"                    : "9ec3b693-2849-4606-bc94-13bb05549267",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 3,
    "active"                : true,
    "container"             : "Mes a Mes",
    "class"                 : "col-lg-6 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>{{soloMesRenovacion}}  {{anioRenovacion}}</b> <small>por Usuario</small>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "03"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_13._RENOVACIONES_MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "03"
        ]
      }
    ]
  },
  {
    "id"                    : "75c9b232-1fee-4adf-81dc-e862046abb30",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 5,
    "active"                : true,
    "container"             : "Mes a Mes",
    "class"                 : "col-lg-6 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>{{soloMesRenovacion}}  {{anioRenovacion}}</b> <small>por Usuario</small>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "05"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_13._RENOVACIONES_MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "05"
        ]
      }
    ]
  },
  {
    "id"                    : "bedb63f5-d74f-4e7f-ad81-8fd23012e8ff",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 6,
    "active"                : true,
    "container"             : "Mes a Mes",
    "class"                 : "col-lg-6 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>{{soloMesRenovacion}}  {{anioRenovacion}}</b> <small>por Usuario</small>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "06"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_13._RENOVACIONES_MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "06"
        ]
      }
    ]
  },
  {
    "id"                    : "2e289735-f58e-4114-9ca3-b23db50dfea4",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 7,
    "active"                : true,
    "container"             : "Mes a Mes",
    "class"                 : "col-lg-6 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>{{soloMesRenovacion}}  {{anioRenovacion}}</b> <small>por Usuario</small>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "07"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_13._RENOVACIONES_MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "07"
        ]
      }
    ]
  },
  {
    "id"                    : "9fed6479-9eab-4208-ac8d-582f550f6c16",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 8,
    "active"                : true,
    "container"             : "Mes a Mes",
    "class"                 : "col-lg-6 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>{{soloMesRenovacion}}  {{anioRenovacion}}</b> <small>por Usuario</small>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "08"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_13._RENOVACIONES_MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "08"
        ]
      }
    ]
  },
  {
    "id"                    : "641430a0-3c2c-4af3-9770-21edf3fece84",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 3,
    "active"                : true,
    "container"             : "{{soloMesRenovacion}}",
    "class"                 : "col-12",
    "title"                 : "<b>Resultado</b> <small>por ejecutivo</small> {{soloMesRenovacion}}",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where": [
      {
        "column": "soloMesRenovacion",
        "value" : [
          "03",
          "04",
          "07",
          "10"
        ]
      }
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_15._RENOVACIONES__TRIMESTRAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"                    : "49c8b148-3ba3-44ac-a878-19c957a26d40",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "{{soloMesRenovacion}}",
    "class"                 : "col-12",
    "title"                 : "<b>Resultado</b> <small>por ejecutivo</small> {{soloMesRenovacion}}",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "",
    "where_type_preset"  : "",
    "where_value_preset" : [],
    "fechaFiltro"        : "fechaCotizacion",
    "orderBy"            : "value",
    "label"              : "[:cantidad] fn(currency(:suma))",
    "presets"            : [
      "PRESET_DASHBOARD_15._RENOVACIONES__TRIMESTRAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "01",
          "06",
          "09",
          "12"
        ]
      }
    ]
  },
  {
    "id"                    : "7542e177-8e56-498f-96ad-aeae3855cb86",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 6,
    "active"                : true,
    "container"             : "{{soloMesRenovacion}} {{anioRenovacion}}",
    "class"                 : "col-12",
    "title"                 : "<b>Resultado</b> <small>por Usuario</small> {{soloMesRenovacion}} ",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "02",
      "08"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_16._RENOVACIONES_VISTA_6_MESES"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "02",
          "08"
        ]
      }
    ]
  },
  {
    "id"                    : "30f54717-b838-4f75-aaad-86117e2a8838",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "{{soloMesRenovacion}} {{anioRenovacion}}",
    "class"                 : "col-12",
    "title"                 : "<b>Resultado</b> <small>por Usuario</small> {{soloMesRenovacion}}",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "01",
      "07"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_16._RENOVACIONES_VISTA_6_MESES"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "01",
          "07"
        ]
      }
    ]
  },
  {
    "id"                    : "18899ac1-b28b-4a49-bcce-0ef7aac22bcf",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 2,
    "active"                : true,
    "container"             : "{{soloMesRenovacion}} {{anioRenovacion}}",
    "class"                 : "col-12",
    "title"                 : "<b>Resultado</b> <small>por Usuario</small> {{soloMesRenovacion}} ",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "06",
      "12"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_16._RENOVACIONES_VISTA_6_MESES"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "06",
          "12"
        ]
      }
    ]
  },
  {
    "id"                    : "aa6fc64e-4f70-4add-8783-f77f31b7f0ea",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 3,
    "active"                : true,
    "container"             : "{{soloMesRenovacion}} {{anioRenovacion}}",
    "class"                 : "col-12",
    "title"                 : "<b>Resultado</b> <small>por Usuario</small> {{soloMesRenovacion}} ",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "05",
      "11"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_16._RENOVACIONES_VISTA_6_MESES"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "05",
          "11"
        ]
      }
    ]
  },
  {
    "id"                    : "daeb0768-bd2d-491c-8559-91dea50d93cb",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 4,
    "active"                : true,
    "container"             : "{{soloMesRenovacion}} {{anioRenovacion}}",
    "class"                 : "col-12",
    "title"                 : "<b>Resultado</b> <small>por Usuario</small> {{soloMesRenovacion}}",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "04",
      "10"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_16._RENOVACIONES_VISTA_6_MESES"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "04",
          "10"
        ]
      }
    ]
  },
  {
    "id"                    : "0c0455ed-094d-42c7-95f4-312d8234ce7b",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 0,
    "active"                : true,
    "container"             : "Evolucion del Rango",
    "class"                 : "col-12",
    "title"                 : "<b>Resultado grupal</b> <small>por Mes</small>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "mesRenovacion",
        "alias": ""
      }
    ],
    "where"      : [],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_16._RENOVACIONES_VISTA_6_MESES"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true
  },
  {
    "id"                    : "5e26976d-d1fc-4af3-a9ea-3fe8dffd80f0",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 9,
    "active"                : true,
    "container"             : "Mes a Mes",
    "class"                 : "col-lg-6 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>{{soloMesRenovacion}}  {{anioRenovacion}}</b> <small>por Usuario</small> ",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "09"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_13._RENOVACIONES_MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "09"
        ]
      }
    ]
  },
  {
    "id"                    : "b89a3388-fde0-4568-aa8f-a74634d0104c",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 11,
    "active"                : true,
    "container"             : "Mes a Mes",
    "class"                 : "col-lg-6 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>{{soloMesRenovacion}}  {{anioRenovacion}}</b> <small>por Usuario</small> ",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "11"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_13._RENOVACIONES_MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "11"
        ]
      }
    ]
  },
  {
    "id"                    : "1cdd534b-6889-40b9-ac6a-d1c9652c7bdc",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 10,
    "active"                : true,
    "container"             : "Mes a Mes",
    "class"                 : "col-lg-6 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>{{soloMesRenovacion}}  {{anioRenovacion}}</b> <small>por Usuario</small> ",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "10"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_13._RENOVACIONES_MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "10"
        ]
      }
    ]
  },
  {
    "id"                    : "3f560ee3-c03e-4ea0-af61-14afee51c561",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 12,
    "active"                : true,
    "container"             : "Mes a Mes",
    "class"                 : "col-lg-6 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>{{soloMesRenovacion}}  {{anioRenovacion}}</b> <small>por Usuario</small> ",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "usuarioRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "soloMesRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "12"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_13._RENOVACIONES_MENSUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "soloMesRenovacion",
        "type"  : "eq",
        "value" : [
          "12"
        ]
      }
    ]
  },
  {
    "id"                    : "7f94364c-8352-452c-ab9e-d8c9ca326b73",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "{{aseguradoraDescripcion}}",
    "class"                 : "col-12",
    "title"                 : "<b>Efectividad</b> <small>mes a mes</small>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "mesRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "aseguradoraDescripcion",
    "where_type_preset"  : "",
    "where_value_preset" : [],
    "fechaFiltro"        : "fechaCotizacion",
    "orderBy"            : "value",
    "label"              : "[:cantidad] fn(currency(:suma))",
    "presets"            : [
      "PRESET_DASHBOARD_17._RENOVACIONES_BIANUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : []
  },
  {
    "id"                    : "bb389c4e-16c5-4f41-9ef7-607f7599f197",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 2,
    "active"                : true,
    "container"             : "RIMAC",
    "class"                 : "col-12",
    "title"                 : "<b>Efectividad</b> <small>mes a mes</small>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "mesRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "aseguradoraDescripcion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "RIMAC"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_17._RENOVACIONES_BIANUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "aseguradoraDescripcion",
        "type"  : "eq",
        "value" : [
          "RIMAC"
        ]
      }
    ]
  },
  {
    "id"                    : "cd2f0fa9-dc15-45c0-b233-594aba039ffa",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 2,
    "active"                : true,
    "container"             : "PACIFICO",
    "class"                 : "col-12",
    "title"                 : "<b>Efectividad</b> <small>mes a mes</small>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "mesRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "aseguradoraDescripcion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "PACIFICO"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_17._RENOVACIONES_BIANUAL"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "aseguradoraDescripcion",
        "type"  : "eq",
        "value" : [
          "PACIFICO"
        ]
      }
    ]
  },
  {
    "id"                    : "fd1eef54-ea2a-410b-8333-0e5795b5a01b",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Comparativo Anual",
    "class"                 : "col-12",
    "title"                 : "<b>Pólizas emitidas</small></b><b>(incluye anuladas)</small></b",
    "fechaFiltro"           : "fechaEstadoCotizacion",
    "orderType"             : "asc",
    "orderBy"               : "range_amount",
    "label"                 : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"               : [
      "PRESET_DASHBOARD_16._TEST"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "fields"           : [
      {
        "field"   : "sumaAsegurada",
        "alias"   : "Rangos de Suma Asegurada",
        "sort"    : "asc",
        "type"    : "primary",
        "metadata": "10000"
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": "Mes",
        "sort" : "asc",
        "type" : "primary"
      },
      {
        "field": "anioEstadoCotizacion",
        "alias": "Año",
        "sort" : "asc",
        "type" : "secondary"
      },
      {
        "field": "subTotalAsc",
        "alias": "Subi",
        "sort" : "asc",
        "type" : "secondary"
      }
    ],
    "where": [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "VENCIDA"
        ]
      },
      {
        "column": "sumaAsegurada",
        "type"  : "lte",
        "value" : [
          "20000"
        ]
      }
    ]
  },
  {
    "id"                    : "5fc4325a-73ae-450e-a4a2-07084df5cbb5",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 5,
    "active"                : true,
    "container"             : "Acumulado anual a Mayo",
    "class"                 : "col-sm-12 col-md-6 col-lg-4",
    "title"                 : "<b>Por marca</small></b>",
    "fields"                : [
      {
        "field": "vehiculo.marca.descripcion",
        "alias": ""
      },
      {
        "field": "anioEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "auditoria.usuario",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "usuarioSesion"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_11._USUARIO"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05"
        ]
      },
      {
        "column": "auditoria.usuario",
        "type"  : "eq",
        "value" : [
          "usuarioSesion"
        ]
      }
    ]
  },
  {
    "id"                    : "86f5eee7-894b-419c-9c8b-38b297b5f9f2",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 7,
    "active"                : true,
    "container"             : "Analisis x freelance",
    "class"                 : "col-sm-12 col-md-6 col-lg-4",
    "title"                 : "<b>Por freelance </small></b>{{soloAnioEstadoCotizacion}}",
    "fields"                : [
      {
        "field": "canal.usuario.usuario",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "usuario_emitido",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "usuarioSesion"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_11._USUARIO"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06"
        ]
      },
      {
        "column": "soloAnioEstadoCotizacion",
        "type"  : "eq",
        "value" : []
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "usuarioSesion"
        ]
      }
    ]
  },
  {
    "id"                    : "87cf0077-b68b-4fe6-96be-5507a8abe2c7",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 7,
    "active"                : true,
    "container"             : "Analisis x freelance",
    "class"                 : "col-sm-12 col-md-6 col-lg-4",
    "title"                 : "<b>Por freelance </small></b>{{soloAnioEstadoCotizacion}}",
    "fields"                : [
      {
        "field": "canal.usuario.usuario",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "usuario_emitido",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "usuarioSesion"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_11._USUARIO"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06"
        ]
      },
      {
        "column": "soloAnioEstadoCotizacion",
        "type"  : "eq",
        "value" : []
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "usuarioSesion"
        ]
      }
    ]
  },
  {
    "id"                    : "1fa9e697-6b4f-4b3f-a469-000fa26167fd",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 7,
    "active"                : true,
    "container"             : "Analisis x freelance",
    "class"                 : "col-sm-12 col-md-6 col-lg-4",
    "title"                 : "<b>Por freelance </small></b>{{soloAnioEstadoCotizacion}}",
    "fields"                : [
      {
        "field": "canal.usuario.usuario",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "usuario_emitido",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "usuarioSesion"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_11._USUARIO"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06"
        ]
      },
      {
        "column": "soloAnioEstadoCotizacion",
        "type"  : "eq",
        "value" : []
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "usuarioSesion"
        ]
      }
    ]
  },
  {
    "id"                    : "f6e3eb2e-329c-422c-b2f9-c0c09c2bd433",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 7,
    "active"                : true,
    "container"             : "Analisis x freelance",
    "class"                 : "col-sm-12 col-md-6 col-lg-12",
    "title"                 : "<b>Por freelance </small></b>{{soloAnioEstadoCotizacion}}",
    "fields"                : [
      {
        "field": "canal.usuario.usuario",
        "alias": ""
      },
      {
        "field": "mesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "usuario_emitido",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "usuarioSesion"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_11._USUARIO"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloAnioEstadoCotizacion",
        "type"  : "eq",
        "value" : []
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "usuarioSesion"
        ]
      }
    ]
  },
  {
    "id"                    : "9cf437dd-d352-4e63-b3fb-4a1069e4ae8b",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Anuladas",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas Anuladas</small></b>",
    "fields"                : [
      {
        "field": "anioEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "sub_estado_descripcion",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "CAMBIO DE ASEGURADO",
      "CAMBIO DE CIA. SEGUROS",
      "CAMBIO DE VEHICULO",
      "CAMBIO DE VIGENCIA",
      "DUPLICIDAD",
      "REEMPLAZO DE POLIZA"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_11._USUARIO"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "ANULADO"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "usuarioSesion"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VEHICULO",
          "CAMBIO DE VIGENCIA",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      }
    ]
  },
  {
    "id"                    : "e6f30ef8-e1ac-4198-b307-420d0b236537",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 10,
    "active"                : true,
    "container"             : "Anuladas x freelance",
    "class"                 : "col-sm-12 col-md-6 col-lg-12",
    "title"                 : "<b>Por freelance </small></b>{{soloAnioEstadoCotizacion}}",
    "fields"                : [
      {
        "field": "canal.usuario.usuario",
        "alias": ""
      },
      {
        "field": "mesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "usuario_emitido",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "usuarioSesion"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "amount",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_11._USUARIO"
    ],
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "ANULADO"
        ]
      },
      {
        "column": "soloAnioEstadoCotizacion",
        "type"  : "eq",
        "value" : []
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "usuarioSesion"
        ]
      }
    ]
  },
  {
    "id"                    : "9e4a318f-b313-4a4a-96af-d9de7c802afa",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Nahala Herrera",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas emitidas</small></b><b>(incluye anuladas)</small></b",
    "fields"                : [
      {
        "field": "soloAnioEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "sub_estado_descripcion",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "CAMBIO DE ASEGURADO",
      "CAMBIO DE CIA. SEGUROS",
      "CAMBIO DE VIGENCIA",
      "CAMBIO DE VEHICULO",
      "DUPLICIDAD",
      "REEMPLAZO DE POLIZA"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "nherrera"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162",
          "191"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VIGENCIA",
          "CAMBIO DE VEHICULO",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      }
    ]
  },
  {
    "id"                    : "becb22f8-5bc4-4c85-bd01-9037c4299855",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Nahala Herrera",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas Anuladas</small></b>",
    "fields"                : [
      {
        "field": "soloAnioEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "sub_estado_descripcion",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "CAMBIO DE ASEGURADO",
      "CAMBIO DE CIA. SEGUROS",
      "CAMBIO DE VIGENCIA",
      "CAMBIO DE VEHICULO",
      "DUPLICIDAD",
      "REEMPLAZO DE POLIZA"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "ANULADO"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "nherrera"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162",
          "191"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VIGENCIA",
          "CAMBIO DE VEHICULO",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      }
    ]
  },
  {
    "id"                    : "7c8823a3-add8-405b-9417-a00b40b06b2e",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Lily Olivares",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas emitidas</small></b><b>(incluye anuladas)</small></b",
    "fields"                : [
      {
        "field": "soloAnioEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "sub_estado_descripcion",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "CAMBIO DE ASEGURADO",
      "CAMBIO DE CIA. SEGUROS",
      "CAMBIO DE VIGENCIA",
      "CAMBIO DE VEHICULO",
      "DUPLICIDAD",
      "REEMPLAZO DE POLIZA"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "lolivares"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162",
          "191"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VIGENCIA",
          "CAMBIO DE VEHICULO",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      }
    ]
  },
  {
    "id"                    : "cbd75718-5eb1-4164-ab72-8795dd4aca73",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Lily Olivares",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas Anuladas</small></b>",
    "fields"                : [
      {
        "field": "soloAnioEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "sub_estado_descripcion",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "CAMBIO DE ASEGURADO",
      "CAMBIO DE CIA. SEGUROS",
      "CAMBIO DE VIGENCIA",
      "CAMBIO DE VEHICULO",
      "DUPLICIDAD",
      "REEMPLAZO DE POLIZA"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "ANULADO"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "lolivares"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162",
          "191"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VIGENCIA",
          "CAMBIO DE VEHICULO",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      }
    ]
  },
  {
    "id"                    : "17eecd25-e61a-41cf-a776-83435009dfad",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Andrea Condori",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas emitidas</small></b><b>(incluye anuladas)</small></b",
    "fields"                : [
      {
        "field": "soloAnioEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "sub_estado_descripcion",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "CAMBIO DE ASEGURADO",
      "CAMBIO DE CIA. SEGUROS",
      "CAMBIO DE VIGENCIA",
      "CAMBIO DE VEHICULO",
      "DUPLICIDAD",
      "REEMPLAZO DE POLIZA"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "acondori"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162",
          "191"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VIGENCIA",
          "CAMBIO DE VEHICULO",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      }
    ]
  },
  {
    "id"                    : "406f5410-e380-4599-b251-fcd72b9b2cee",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Andrea Condori",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas Anuladas</small></b>",
    "fields"                : [
      {
        "field": "soloAnioEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "sub_estado_descripcion",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "CAMBIO DE ASEGURADO",
      "CAMBIO DE CIA. SEGUROS",
      "CAMBIO DE VIGENCIA",
      "CAMBIO DE VEHICULO",
      "DUPLICIDAD",
      "REEMPLAZO DE POLIZA"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "ANULADO"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "acondori"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162",
          "191"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VIGENCIA",
          "CAMBIO DE VEHICULO",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      }
    ]
  },
  {
    "id"                    : "02e54337-df7a-45a1-b2b1-daccaccdeaad",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Mariella Niquen",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas emitidas</small></b><b>(incluye anuladas)</small></b",
    "fields"                : [
      {
        "field": "soloAnioEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "sub_estado_descripcion",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "CAMBIO DE ASEGURADO",
      "CAMBIO DE CIA. SEGUROS",
      "CAMBIO DE VIGENCIA",
      "CAMBIO DE VEHICULO",
      "DUPLICIDAD",
      "REEMPLAZO DE POLIZA"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "mniquen"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162",
          "191"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VIGENCIA",
          "CAMBIO DE VEHICULO",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      }
    ]
  },
  {
    "id"                    : "bbc661a2-3078-4207-b641-dcc246f0fd9b",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Mariella Niquen",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas Anuladas</small></b>",
    "fields"                : [
      {
        "field": "soloAnioEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "sub_estado_descripcion",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "CAMBIO DE ASEGURADO",
      "CAMBIO DE CIA. SEGUROS",
      "CAMBIO DE VIGENCIA",
      "CAMBIO DE VEHICULO",
      "DUPLICIDAD",
      "REEMPLAZO DE POLIZA"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "ANULADO"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "mniquen"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162",
          "191"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VIGENCIA",
          "CAMBIO DE VEHICULO",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      }
    ]
  },
  {
    "id"                    : "916cc33f-9592-48ab-89ad-71faeb0b4e63",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Cesar Orellana",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas emitidas</small></b><b>(incluye anuladas)</small></b",
    "fields"                : [
      {
        "field": "soloAnioEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "sub_estado_descripcion",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "CAMBIO DE ASEGURADO",
      "CAMBIO DE CIA. SEGUROS",
      "CAMBIO DE VIGENCIA",
      "CAMBIO DE VEHICULO",
      "DUPLICIDAD",
      "REEMPLAZO DE POLIZA"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "corellana"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162",
          "191"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VIGENCIA",
          "CAMBIO DE VEHICULO",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      }
    ]
  },
  {
    "id"                    : "30b1ca92-bd4a-4a72-bb74-b9fa206ec4bf",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Ericka Durand",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas emitidas</small></b><b>(incluye anuladas)</small></b",
    "fields"                : [
      {
        "field": "soloAnioEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "sub_estado_descripcion",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "CAMBIO DE ASEGURADO",
      "CAMBIO DE CIA. SEGUROS",
      "CAMBIO DE VIGENCIA",
      "CAMBIO DE VEHICULO",
      "DUPLICIDAD",
      "REEMPLAZO DE POLIZA"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "edurand"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162",
          "191"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VIGENCIA",
          "CAMBIO DE VEHICULO",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      }
    ]
  },
  {
    "id"                    : "327ba718-9d1b-49ff-92d9-adc1a2a2410c",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Ericka Durand",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas Anuladas</small></b>",
    "fields"                : [
      {
        "field": "soloAnioEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "sub_estado_descripcion",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "CAMBIO DE ASEGURADO",
      "CAMBIO DE CIA. SEGUROS",
      "CAMBIO DE VIGENCIA",
      "CAMBIO DE VEHICULO",
      "DUPLICIDAD",
      "REEMPLAZO DE POLIZA"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "ANULADO"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "edurand"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162",
          "191"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VIGENCIA",
          "CAMBIO DE VEHICULO",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      }
    ]
  },
  {
    "id"                    : "59b0fc7d-e44c-4e3f-b436-6d6bf891210d",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Cesar Orellana",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas Anuladas</small></b>",
    "fields"                : [
      {
        "field": "soloAnioEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "sub_estado_descripcion",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "CAMBIO DE ASEGURADO",
      "CAMBIO DE CIA. SEGUROS",
      "CAMBIO DE VIGENCIA",
      "CAMBIO DE VEHICULO",
      "DUPLICIDAD",
      "REEMPLAZO DE POLIZA"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "ANULADO"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "usuario_emitido",
        "type"  : "eq",
        "value" : [
          "corellana"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162",
          "191"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VIGENCIA",
          "CAMBIO DE VEHICULO",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      }
    ]
  },
  {
    "id"                    : "a6627226-e23f-423d-84f3-2e344a8e202b",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Comparativo Anual",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas emitidas</small></b><b>(incluye anuladas)</small></b",
    "fields"                : [
      {
        "field": "soloAnioEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "sub_estado_descripcion",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "CAMBIO DE ASEGURADO",
      "CAMBIO DE CIA. SEGUROS",
      "CAMBIO DE VIGENCIA",
      "CAMBIO DE VEHICULO",
      "DUPLICIDAD",
      "REEMPLAZO DE POLIZA"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162",
          "191"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VIGENCIA",
          "CAMBIO DE VEHICULO",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      }
    ]
  },
  {
    "id"                    : "2249c781-11c0-4cb1-98c0-6745653bb9ca",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Comparativo Anual",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas Anuladas</small></b>",
    "fields"                : [
      {
        "field": "soloAnioEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "sub_estado_descripcion",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "CAMBIO DE ASEGURADO",
      "CAMBIO DE CIA. SEGUROS",
      "CAMBIO DE VIGENCIA",
      "CAMBIO DE VEHICULO",
      "DUPLICIDAD",
      "REEMPLAZO DE POLIZA"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "ANULADO"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162",
          "191"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VIGENCIA",
          "CAMBIO DE VEHICULO",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      }
    ]
  },
  {
    "id"                    : "04ae31a2-53bd-41fc-9f82-e8e11ded6f04",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 8,
    "active"                : true,
    "container"             : "{{usuarioRenovacion}}",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Resultados</b> <b>mes por mes</b>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "mesRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "usuarioRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "nherrera"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_12._RENOVACIONES_ANUAL"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "usuarioRenovacion",
        "type"  : "eq",
        "value" : [
          "nherrera"
        ]
      }
    ]
  },
  {
    "id"                    : "3354c00a-23d2-42c6-a105-591c9fd61979",
    "cbo_origen_preset"     : "renovaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 8,
    "active"                : true,
    "container"             : "{{usuarioRenovacion}}",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Resultados</b> <b>mes por mes</b>",
    "fields"                : [
      {
        "field": "estadoRenovacion",
        "alias": ""
      },
      {
        "field": "mesRenovacion",
        "alias": ""
      }
    ],
    "where_column_preset": "usuarioRenovacion",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "lolivares"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma))",
    "presets"    : [
      "PRESET_DASHBOARD_12._RENOVACIONES_ANUAL"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : true,
    "where"            : [
      {
        "column": "usuarioRenovacion",
        "type"  : "eq",
        "value" : [
          "lolivares"
        ]
      }
    ]
  },
  {
    "id"                    : "9cc46f3b-e17a-4735-8283-a61248e6755c",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "RIMAC Comparativo Anual ",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas emitidas</small></b><b>(incluye anuladas)</small></b",
    "fields"                : [
      {
        "field"   : "soloAnioEstadoCotizacion",
        "metadata": "",
        "alias"   : ""
      },
      {
        "field"   : "soloMesEstadoCotizacion",
        "metadata": "",
        "alias"   : ""
      }
    ],
    "where_column_preset": "aseguradora.id",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "2"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VIGENCIA",
          "CAMBIO DE VEHICULO",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      },
      {
        "column": "aseguradora.id",
        "type"  : "eq",
        "value" : [
          "2"
        ]
      }
    ]
  },
  {
    "id"                    : "33a86bdd-2f56-40ba-bfa3-9a6115a5b515",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "QUALITAS Comparativo Anual",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas emitidas</small></b><b>(incluye anuladas)</small></b",
    "fields"                : [
      {
        "field"   : "soloAnioEstadoCotizacion",
        "metadata": "",
        "alias"   : ""
      },
      {
        "field"   : "soloMesEstadoCotizacion",
        "metadata": "",
        "alias"   : ""
      }
    ],
    "where_column_preset": "aseguradora.id",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "17"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO",
          "TRASLADO"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO CONTRATANTE",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CORREDOR",
          "CAMBIO DE PRIMA",
          "CAMBIO DE PRODUCTO",
          "CAMBIO DE SUMA ASEGURADA",
          "CAMBIO DE VIGENCIA",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      },
      {
        "column": "aseguradora.id",
        "type"  : "eq",
        "value" : [
          "17"
        ]
      }
    ]
  },
  {
    "id"                    : "a845ace3-2f95-488b-8540-43ac51095ac7",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "PACIFICO Comparativo Anual",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas emitidas</small></b><b>(incluye anuladas)</small></b",
    "fields"                : [
      {
        "field": "soloAnioEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "aseguradora.id",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "1"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VIGENCIA",
          "CAMBIO DE VEHICULO",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      },
      {
        "column": "aseguradora.id",
        "type"  : "eq",
        "value" : [
          "1"
        ]
      }
    ]
  },
  {
    "id"                    : "253d0885-254c-411f-b329-89c58099ee30",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "MAPFRE Comparativo Anual",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas emitidas</small></b><b>(incluye anuladas)</small></b",
    "fields"                : [
      {
        "field": "soloAnioEstadoCotizacion",
        "alias": ""
      },
      {
        "field": "soloMesEstadoCotizacion",
        "alias": ""
      }
    ],
    "where_column_preset": "aseguradora.id",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "4"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VIGENCIA",
          "CAMBIO DE VEHICULO",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      },
      {
        "column": "aseguradora.id",
        "type"  : "eq",
        "value" : [
          "4"
        ]
      }
    ]
  },
  {
    "id"                    : "c941a54b-1bbf-4a11-b223-5b6a27b42ea9",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Sumas Asegurada por Clase",
    "class"                 : "col-12",
    "title"                 : "<b>[Título]</b> <small>por [Agrupador]</small>",
    "fechaFiltro"           : "fechaCotizacion",
    "orderBy"               : "range_amount",
    "label"                 : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"               : [
      "PRESET_DASHBOARD_16._TEST"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "fields"           : [
      {
        "field"   : "sumaAsegurada",
        "alias"   : "Rango",
        "sort"    : "asc",
        "type"    : "primary",
        "metadata": "10000"
      },
      {
        "field": "claseDescripcion",
        "alias": "Clase Vehiculo",
        "sort" : "asc",
        "type" : "secondary"
      }
    ],
    "where": []
  },
  {
    "id"                    : "46b9c5db-f455-4916-9c2b-54ee8326d6ad",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Comparativo Anual",
    "class"                 : "col-lg-12 col-md-4 col-sm-6 col-xs-12",
    "title"                 : "<b>Pólizas emitidas</small></b><b>(incluye anuladas)</small></b",
    "fields"                : [
      {
        "field"   : "soloAnioEstadoCotizacion",
        "metadata": "",
        "alias"   : ""
      },
      {
        "field"   : "soloMesEstadoCotizacion",
        "metadata": "",
        "alias"   : ""
      }
    ],
    "where_column_preset": "sub_estado_descripcion",
    "where_type_preset"  : "notEq",
    "where_value_preset" : [
      "CAMBIO DE ASEGURADO",
      "CAMBIO DE CIA. SEGUROS",
      "CAMBIO DE VIGENCIA",
      "CAMBIO DE VEHICULO",
      "DUPLICIDAD",
      "REEMPLAZO DE POLIZA"
    ],
    "fechaFiltro": "fechaEstadoCotizacion",
    "orderBy"    : "value",
    "label"      : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"    : [
      "PRESET_DASHBOARD_18._VISTA_ADMIN_USUARIOS_VENTAS"
    ],
    "totalFila"        : false,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "soloMesEstadoCotizacion",
        "type"  : "eq",
        "value" : [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ]
      },
      {
        "column": "tipoCotizacion",
        "type"  : "eq",
        "value" : [
          "NUEVO",
          "REEMPLAZO",
          "RECUPERO"
        ]
      },
      {
        "column": "tipoCanal.id",
        "type"  : "notEq",
        "value" : [
          "1162",
          "191"
        ]
      },
      {
        "column": "sub_estado_descripcion",
        "type"  : "notEq",
        "value" : [
          "CAMBIO DE ASEGURADO",
          "CAMBIO DE CIA. SEGUROS",
          "CAMBIO DE VIGENCIA",
          "CAMBIO DE VEHICULO",
          "DUPLICIDAD",
          "REEMPLAZO DE POLIZA"
        ]
      }
    ]
  },
  {
    "id"                    : "b88cd563-91b5-482b-a100-9703339b686c",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "dsdfsdfsd",
    "class"                 : "col-12",
    "title"                 : "<b>[Título]</b> <small>por [Agrupador]</small>",
    "fields"                : [
      {
        "field"   : "sumaAsegurada",
        "metadata": "5000",
        "alias"   : "Rngos"
      },
      {
        "field"   : "anioEstadoCotizacion",
        "metadata": "5000",
        "alias"   : ""
      }
    ],
    "where_column_preset": "",
    "where_type_preset"  : "",
    "where_value_preset" : [],
    "fechaFiltro"        : "fechaCotizacion",
    "orderType"          : "asc",
    "orderBy"            : "range_amount",
    "label"              : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"            : [
      "PRESET_DASHBOARD_19._RANGOS_SUMAS_ASEGURADAS"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "where"            : []
  },
  {
    "id"                    : "8cd843c4-1d74-4ebc-8ffb-4a5537f7a67e",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Nahala Herrera",
    "class"                 : "col-12",
    "title"                 : "<b>Perfil de colocaciones</b> <b>por Sumas Aseguradas</b>",
    "fields"                : [
      {
        "field"   : "sumaAsegurada",
        "metadata": "5000",
        "alias"   : "Rngos"
      },
      {
        "field"   : "anioEstadoCotizacion",
        "metadata": "",
        "alias"   : ""
      }
    ],
    "where_column_preset": "auditoria.usuario",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "nherrera"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderType"  : "asc",
    "orderBy"    : "range_amount",
    "label"      : "[:cantidad] ",
    "presets"    : [
      "PRESET_DASHBOARD_19._RANGOS_SUMAS_ASEGURADAS"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "auditoria.usuario",
        "type"  : "eq",
        "value" : [
          "nherrera"
        ]
      }
    ]
  },
  {
    "id"                    : "368766ed-95b8-47d2-8f8a-6e417741f642",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Lily Olivares",
    "class"                 : "col-12",
    "title"                 : "<b>Perfil de colocaciones</b> <b>por Sumas Aseguradas</b>",
    "fields"                : [
      {
        "field"   : "sumaAsegurada",
        "metadata": "5000",
        "alias"   : "Rngos"
      },
      {
        "field"   : "anioEstadoCotizacion",
        "metadata": "",
        "alias"   : ""
      }
    ],
    "where_column_preset": "auditoria.usuario",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "lolivares"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderType"  : "asc",
    "orderBy"    : "range_amount",
    "label"      : ":cantidad",
    "presets"    : [
      "PRESET_DASHBOARD_19._RANGOS_SUMAS_ASEGURADAS"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": true,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "auditoria.usuario",
        "type"  : "eq",
        "value" : [
          "lolivares"
        ]
      }
    ]
  },
  {
    "id"                    : "a80b75f0-2c67-4858-a85a-d8b17b1d32b5",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Andrea Condori",
    "class"                 : "col-12",
    "title"                 : "<b>Perfil de colocaciones</b> <b>por Sumas Aseguradas</b>",
    "fields"                : [
      {
        "field"   : "sumaAsegurada",
        "metadata": "5000",
        "alias"   : "Rngos"
      },
      {
        "field"   : "anioEstadoCotizacion",
        "metadata": "",
        "alias"   : ""
      }
    ],
    "where_column_preset": "auditoria.usuario",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "acondori"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderType"  : "asc",
    "orderBy"    : "range_amount",
    "label"      : "[:cantidad] ",
    "presets"    : [
      "PRESET_DASHBOARD_19._RANGOS_SUMAS_ASEGURADAS"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": true,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "auditoria.usuario",
        "type"  : "eq",
        "value" : [
          "acondori"
        ]
      }
    ]
  },
  {
    "id"                    : "020ca576-7f1b-4c4f-ae24-9a6440977eda",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Mariella Niquen",
    "class"                 : "col-12",
    "title"                 : "<b>Perfil de colocaciones</b> <b>por Sumas Aseguradas</b>",
    "fields"                : [
      {
        "field"   : "sumaAsegurada",
        "metadata": "5000",
        "alias"   : "Rngos"
      },
      {
        "field"   : "anioEstadoCotizacion",
        "metadata": "",
        "alias"   : ""
      }
    ],
    "where_column_preset": "auditoria.usuario",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "mniquen"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderType"  : "asc",
    "orderBy"    : "range_amount",
    "label"      : "[:cantidad] ",
    "presets"    : [
      "PRESET_DASHBOARD_19._RANGOS_SUMAS_ASEGURADAS"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": true,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "auditoria.usuario",
        "type"  : "eq",
        "value" : [
          "mniquen"
        ]
      }
    ]
  },
  {
    "id"                    : "5c672693-0cc2-4b1e-be99-ff548bfa27d2",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "Cesar Orellana",
    "class"                 : "col-12",
    "title"                 : "<b>Perfil de colocaciones</b> <b>por Sumas Aseguradas</b>",
    "fields"                : [
      {
        "field"   : "sumaAsegurada",
        "metadata": "5000",
        "alias"   : "Rngos"
      },
      {
        "field"   : "anioEstadoCotizacion",
        "metadata": "",
        "alias"   : ""
      }
    ],
    "where_column_preset": "auditoria.usuario",
    "where_type_preset"  : "eq",
    "where_value_preset" : [
      "corellana"
    ],
    "fechaFiltro": "fechaCotizacion",
    "orderType"  : "asc",
    "orderBy"    : "range_amount",
    "label"      : "[:cantidad] ",
    "presets"    : [
      "PRESET_DASHBOARD_19._RANGOS_SUMAS_ASEGURADAS"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": true,
    "visibleAll"       : false,
    "where"            : [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO",
          "ANULADO",
          "VENCIDA"
        ]
      },
      {
        "column": "auditoria.usuario",
        "type"  : "eq",
        "value" : [
          "corellana"
        ]
      }
    ]
  },
  {
    "id"                    : "433407b4-b56c-47e3-a347-3c14ece72a05",
    "cbo_origen_preset"     : "cotizaciones",
    "filasAgregadasInColumn": false,
    "order"                 : 1,
    "active"                : true,
    "container"             : "A",
    "class"                 : "col-12",
    "title"                 : "<b>[Título]</b> <small>por [Agrupador]</small>",
    "fechaFiltro"           : "fechaCotizacion",
    "orderBy"               : "value",
    "label"                 : "[:cantidad] fn(currency(:suma / (1.18 * 1.03)))",
    "presets"               : [
      "PRESET_DASHBOARD_16._TEST"
    ],
    "totalFila"        : true,
    "totalColumna"     : true,
    "showGraph"        : false,
    "combineDuplicated": false,
    "visibleAll"       : false,
    "fields"           : [
      {
        "field": "diaEstadoCotizacion",
        "alias": "",
        "sort" : "asc",
        "type" : "primary"
      },
      {
        "field": "aseguradora.descripcion",
        "alias": "",
        "sort" : "asc",
        "type" : "secondary"
      }
    ],
    "where": [
      {
        "column": "estadoCotizacion",
        "type"  : "eq",
        "value" : [
          "EMITIDO"
        ]
      }
    ]
  }
]
const total_table_components = TABLE_COMPONENTS.length;

const total_active_table_components = TABLE_COMPONENTS.filter(
  component => component.active
).length;

const total_inactive_table_components = TABLE_COMPONENTS.filter(
  component => !component.active
).length;

const total_with_graph = TABLE_COMPONENTS.filter(
  component => component.showGraph
).length;

const total_visible_all = TABLE_COMPONENTS.filter(
  component => component.visibleAll
).length;

// total con origen preset "cotizaciones"
const total_cotizaciones_preset = TABLE_COMPONENTS.filter(
  component => component.cbo_origen_preset === "cotizaciones"
).length;

// total con origen preset "renovaciones"
const total_renovaciones_preset = TABLE_COMPONENTS.filter(
  component => component.cbo_origen_preset === "renovaciones"
).length;

console.log(
  "========= AUDIT TABLE COMPONENTS =========\n" +

  "Total de componentes de tabla: " + total_table_components + "\n" +

  "Total de componentes activos: " +
  total_active_table_components + "\n" +

  "Total de componentes inactivos: " +
  total_inactive_table_components + "\n" +

  "Total de componentes con gráfica: " +
  total_with_graph + "\n" +

  "Total de componentes visibles para todos: " +
  total_visible_all + "\n" +

  "Total de componentes con origen preset 'cotizaciones': " +
  total_cotizaciones_preset + "\n" +

  "Total de componentes con origen preset 'renovaciones': " +
  total_renovaciones_preset + "\n" 
);