var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala-de-reuniao",
      "name": "Sala de Reuniao",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6656943695826882,
          "pitch": 0.23567007600007628,
          "rotation": 0,
          "target": "1-sala-principal"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.03714287495287749,
          "pitch": 0.5411206869873713,
          "title": "Sala de Reuniao",
          "text": "Texto descritivo aqui"
        }
      ]
    },
    {
      "id": "1-sala-principal",
      "name": "Sala Principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 0.8629858333801721,
          "pitch": 0.29952547958481013,
          "title": "Fernando",
          "text": "Motion Design"
        },
        {
          "yaw": -1.9391183412205777,
          "pitch": 0.4443032652892711,
          "title": "Vic",
          "text": "Redes Sociais e Estrategia"
        }
      ]
    }
  ],
  "name": "Sala NOO 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
