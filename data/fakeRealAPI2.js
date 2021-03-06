
var fakeRealAPIDeliveries = 
{
  "data": [{
      "id": "1",
      "type": "deliveries",
      "attributes": {
        "cargo": "contraband",
        "cargo-quantity": 0,
        "notes": "I have a bad feeling about this",
        "arrive-at": "2016-06-20T12:00:43.646Z",
        "company-name": "ACE Asphalt Paving1 Co.",
        "escort": null,
        "priority": null,
        "status": "enroute",
        "processing-time": 18000,
        "current-location": {
          "id": 2,
          "name": "Death Star",
          "latitude": 90,
          "longitude": 0,
          "created_at": "2016-06-20T13:00:42.780Z",
          "updated_at": "2016-06-20T13:00:42.780Z",
          "site_id": 1
        }
      },
      "relationships": {
        "vehicle": {
          "data": {
            "id": "1",
            "type": "vehicles"
          }
        },
        "site": {
          "data": {
            "id": "1",
            "type": "sites"
          }
        },
        "project": {
          "data": {
            "id": "1",
            "type": "projects"
          }
        },
        "locations": {
          "data": [{
            "id": "1",
            "type": "locations"
          }, {
            "id": "2",
            "type": "locations"
          }, {
            "id": "3",
            "type": "locations"
          }, {
            "id": "4",
            "type": "locations"
          }, {
            "id": "5",
            "type": "locations"
          }]
        },
        "workflows": {
          "data": [{
            "id": "1",
            "type": "workflows"
          }, {
            "id": "2",
            "type": "workflows"
          }, {
            "id": "3",
            "type": "workflows"
          }, {
            "id": "4",
            "type": "workflows"
          }, {
            "id": "5",
            "type": "workflows"
          }]
        },
        "driver": {
          "data": {
            "id": "1",
            "type": "drivers"
          }
        },
        "events": {
          "data": [{
            "id": "1",
            "type": "events"
          }, {
            "id": "2",
            "type": "events"
          }]
        },
        "primary-poc": {
          "data": {
            "id": "1",
            "type": "pocs"
          }
        },
        "secondary-poc": {
          "data": null
        }
      }
    }, {
      "id": "2",
      "type": "deliveries",
      "attributes": {
        "cargo": "contraband",
        "cargo-quantity": 0,
        "company-name": "ACE Asphalt Paving2 Co.",
        "notes": "I have a bad feeling about this",
        "arrive-at": "2016-06-20T12:00:43.646Z",
        "status": "arrived",
        "escort": null,
        "priority": null,
        "processing-time": 18000,
        "current-location": {
          "id": 1,
          "name": "Death Star",
          "latitude": 90,
          "longitude": 0,
          "created_at": "2016-06-20T13:00:42.780Z",
          "updated_at": "2016-06-20T13:00:42.780Z",
          "site_id": 1
        }
      },
      "relationships": {
        "vehicle": {
          "data": {
            "id": "2",
            "type": "vehicles"
          }
        },
        "site": {
          "data": {
            "id": "1",
            "type": "sites"
          }
        },
        "project": {
          "data": {
            "id": "1",
            "type": "projects"
          }
        },
        "locations": {
          "data": [{
            "id": "1",
            "type": "locations"
          }, {
            "id": "2",
            "type": "locations"
          }, {
            "id": "3",
            "type": "locations"
          }, {
            "id": "4",
            "type": "locations"
          }, {
            "id": "5",
            "type": "locations"
          }]
        },
        "workflows": {
          "data": [{
            "id": "6",
            "type": "workflows"
          }, {
            "id": "7",
            "type": "workflows"
          }, {
            "id": "8",
            "type": "workflows"
          }, {
            "id": "9",
            "type": "workflows"
          }, {
            "id": "10",
            "type": "workflows"
          }]
        },
        "driver": {
          "data": {
            "id": "1",
            "type": "drivers"
          }
        },
        "events": {
          "data": [{
            "id": "3",
            "type": "events"
          }, {
            "id": "4",
            "type": "events"
          }, {
            "id": "17",
            "type": "events"
          }]
        },
        "primary-poc": {
          "data": {
            "id": "1",
            "type": "pocs"
          }
        },
        "secondary-poc": {
          "data": null
        }
      }
    }, {
      "id": "3",
      "type": "deliveries",
      "attributes": {
        "cargo": "contraband",
        "cargo-quantity": 0,
        "notes": "I have a bad feeling about this",
        "company-name": "ACE Asphalt Paving3 Co.",
        "arrive-at": "2016-06-20T12:00:43.646Z",
        "status": "arrived",
        "escort": null,
        "priority": null,
        "processing-time": 18000,
        "current-location": {
          "id": 7,
          "name": "Death Star",
          "latitude": 90,
          "longitude": 0,
          "created_at": "2016-06-20T13:00:42.780Z",
          "updated_at": "2016-06-20T13:00:42.780Z",
          "site_id": 1
        }
      },
      "relationships": {
        "vehicle": {
          "data": {
            "id": "3",
            "type": "vehicles"
          }
        },
        "site": {
          "data": {
            "id": "1",
            "type": "sites"
          }
        },
        "project": {
          "data": {
            "id": "1",
            "type": "projects"
          }
        },
        "locations": {
          "data": [{
            "id": "1",
            "type": "locations"
          }, {
            "id": "2",
            "type": "locations"
          }, {
            "id": "3",
            "type": "locations"
          }, {
            "id": "4",
            "type": "locations"
          }, {
            "id": "5",
            "type": "locations"
          }]
        },
        "workflows": {
          "data": [{
            "id": "11",
            "type": "workflows"
          }, {
            "id": "12",
            "type": "workflows"
          }, {
            "id": "13",
            "type": "workflows"
          }, {
            "id": "14",
            "type": "workflows"
          }, {
            "id": "15",
            "type": "workflows"
          }]
        },
        "driver": {
          "data": {
            "id": "1",
            "type": "drivers"
          }
        },
        "events": {
          "data": [{
            "id": "5",
            "type": "events"
          }, {
            "id": "6",
            "type": "events"
          }, {
            "id": "7",
            "type": "events"
          }, {
            "id": "8",
            "type": "events"
          }, {
            "id": "9",
            "type": "events"
          }, {
            "id": "10",
            "type": "events"
          }]
        },
        "primary-poc": {
          "data": {
            "id": "1",
            "type": "pocs"
          }
        },
        "secondary-poc": {
          "data": null
        }
      }
    }, {
      "id": "4",
      "type": "deliveries",
      "attributes": {
        "cargo": "contraband",
        "cargo-quantity": 0,
        "notes": "I have a bad feeling about this",
        "company-name": "ACE Asphalt Paving4 Co.",
        "arrive-at": "2016-06-20T12:00:43.646Z",
        "status": "arrived",
        "escort": null,
        "priority": null,
        "processing-time": 18000,
        "current-location": {
          "id": 5,
          "name": "Death Star",
          "latitude": 90,
          "longitude": 0,
          "created_at": "2016-06-20T13:00:42.780Z",
          "updated_at": "2016-06-20T13:00:42.780Z",
          "site_id": 1
        }
      },
      "relationships": {
        "vehicle": {
          "data": {
            "id": "4",
            "type": "vehicles"
          }
        },
        "site": {
          "data": {
            "id": "1",
            "type": "sites"
          }
        },
        "project": {
          "data": {
            "id": "1",
            "type": "projects"
          }
        },
        "locations": {
          "data": [{
            "id": "1",
            "type": "locations"
          }, {
            "id": "2",
            "type": "locations"
          }, {
            "id": "3",
            "type": "locations"
          }, {
            "id": "4",
            "type": "locations"
          }, {
            "id": "5",
            "type": "locations"
          }]
        },
        "workflows": {
          "data": [{
            "id": "16",
            "type": "workflows"
          }, {
            "id": "17",
            "type": "workflows"
          }, {
            "id": "18",
            "type": "workflows"
          }, {
            "id": "19",
            "type": "workflows"
          }, {
            "id": "20",
            "type": "workflows"
          }]
        },
        "driver": {
          "data": {
            "id": "1",
            "type": "drivers"
          }
        },
        "events": {
          "data": [{
            "id": "12",
            "type": "events"
          }, {
            "id": "13",
            "type": "events"
          }, {
            "id": "14",
            "type": "events"
          }, {
            "id": "11",
            "type": "events"
          }]
        },
        "primary-poc": {
          "data": {
            "id": "1",
            "type": "pocs"
          }
        },
        "secondary-poc": {
          "data": null
        }
      }
    }, {
      "id": "5",
      "type": "deliveries",
      "attributes": {
        "cargo": "contraband",
        "cargo-quantity": 0,
        "notes": "I have a bad feeling about this",
        "company-name": "ACE Asphalt Paving5 Co.",
        "arrive-at": "2016-06-20T12:00:43.646Z",
        "status": "denied",
        "escort": null,
        "priority": null,
        "processing-time": 18000,
        "current-location": {
          "id": 2,
          "name": "Death Star",
          "latitude": 90,
          "longitude": 0,
          "created_at": "2016-06-20T13:00:42.780Z",
          "updated_at": "2016-06-20T13:00:42.780Z",
          "site_id": 1
        }
      },
      "relationships": {
        "vehicle": {
          "data": {
            "id": "5",
            "type": "vehicles"
          }
        },
        "site": {
          "data": {
            "id": "1",
            "type": "sites"
          }
        },
        "project": {
          "data": {
            "id": "1",
            "type": "projects"
          }
        },
        "locations": {
          "data": [{
            "id": "1",
            "type": "locations"
          }, {
            "id": "2",
            "type": "locations"
          }, {
            "id": "3",
            "type": "locations"
          }, {
            "id": "4",
            "type": "locations"
          }, {
            "id": "5",
            "type": "locations"
          }]
        },
        "workflows": {
          "data": [{
            "id": "21",
            "type": "workflows"
          }, {
            "id": "22",
            "type": "workflows"
          }, {
            "id": "23",
            "type": "workflows"
          }, {
            "id": "24",
            "type": "workflows"
          }, {
            "id": "25",
            "type": "workflows"
          }]
        },
        "driver": {
          "data": {
            "id": "1",
            "type": "drivers"
          }
        },
        "events": {
          "data": [{
            "id": "15",
            "type": "events"
          }, {
            "id": "16",
            "type": "events"
          }]
        },
        "primary-poc": {
          "data": {
            "id": "1",
            "type": "pocs"
          }
        },
        "secondary-poc": {
          "data": null
        }
      }
    }

  ],
  "included": [{
      "id": "1",
      "type": "vehicles",
      "attributes": {
        "model": "icn-bulk-2w-arrived",
        "type": "common",
        "axles": 3,
        "escort": false,
        "priority": true
      },
      "relationships": {
        "vendor": {
          "data": {
            "id": "1",
            "type": "vendors"
          }
        },
        "deliveries": {
          "data": [{
            "id": "1",
            "type": "deliveries"
          }, {
            "id": "2",
            "type": "deliveries"
          }]
        },
        "images": {
          "data": []
        }
      }
    }, {
      "id": "2",
      "type": "vehicles",
      "attributes": {
        "model": "icn-bulk-2w-enroute",
        "escort": false,
        "priority": true,
        "type": "emergency",
        "axles": 2
      },
      "relationships": {
        "vendor": {
          "data": {
            "id": "1",
            "type": "vendors"
          }
        },
        "deliveries": {
          "data": [{
            "id": "1",
            "type": "deliveries"
          }, {
            "id": "2",
            "type": "deliveries"
          }]
        },
        "images": {
          "data": []
        }
      }
    }, {
      "id": "3",
      "type": "vehicles",
      "attributes": {
        "model": "icn-bulk-3w-arrived",
        "escort": false,
        "priority": true,
        "type": "rad",
        "axles": 3
      },
      "relationships": {
        "vendor": {
          "data": {
            "id": "1",
            "type": "vendors"
          }
        },
        "deliveries": {
          "data": [{
            "id": "1",
            "type": "deliveries"
          }, {
            "id": "2",
            "type": "deliveries"
          }]
        },
        "images": {
          "data": []
        }
      }
    }, {
      "id": "4",
      "type": "vehicles",
      "attributes": {
        "model": "icn-bulk-3w-arrived",
        "escort": false,
        "priority": false,
        "type": "passIMP",
        "axles": 2
      },
      "relationships": {
        "vendor": {
          "data": {
            "id": "1",
            "type": "vendors"
          }
        },
        "deliveries": {
          "data": [{
            "id": "1",
            "type": "deliveries"
          }, {
            "id": "2",
            "type": "deliveries"
          }]
        },
        "images": {
          "data": []
        }
      }
    }, {
      "id": "5",
      "type": "vehicles",
      "attributes": {
        "model": "icn-construction-arrived",
        "escort": false,
        "priority": true,
        "type": "construction",
        "axles": 3
      },
      "relationships": {
        "vendor": {
          "data": {
            "id": "1",
            "type": "vendors"
          }
        },
        "deliveries": {
          "data": [{
            "id": "1",
            "type": "deliveries"
          }, {
            "id": "2",
            "type": "deliveries"
          }]
        },
        "images": {
          "data": []
        }
      }
    },





    {
      "id": "1",
      "type": "sites",
      "attributes": {
        "name": "Limerick"
      },
      "relationships": {
        "locations": {
          "data": [{
            "id": "1",
            "type": "locations"
          }, {
            "id": "2",
            "type": "locations"
          }, {
            "id": "3",
            "type": "locations"
          }, {
            "id": "4",
            "type": "locations"
          }, {
            "id": "5",
            "type": "locations"
          }]
        },
        "deliveries": {
          "data": [{
            "id": "1",
            "type": "deliveries"
          }]
        },
        "pocs": {
          "data": [{
            "id": "1",
            "type": "pocs"
          }]
        }
      }
    }, {
      "id": "1",
      "type": "projects",
      "attributes": {
        "title": "A New Hope",
        "extension": "0001",
        "description": "The Imperial Forces under orders from cruel\n  Darth Vader hold Princess Leia hostage, in their efforts to quell\n  the rebellion against the Galactic Empire. Luke Skywalker and Han\n  Solo, captain of the Millennium Falcon, work together with the\n  companionable droid duo R2-D2 and C-3PO to rescue the beautiful\n  princess, help the Rebel Alliance, and restore freedom and justice\n  to the Galaxy.",
        "tag-poc": "Obi Wan Kenobi"
      },
      "relationships": {
        "location": {
          "data": {
            "id": "1",
            "type": "locations"
          }
        },
        "deliveries": {
          "data": [{
            "id": "1",
            "type": "deliveries"
          }]
        }
      }
    }, {
      "id": "1",
      "type": "locations",
      "attributes": {
        "name": "Sierra One",
        "latitude": 34,
        "longitude": 9
      },
      "relationships": {
        "deliveries": {
          "data": [{
            "id": "1",
            "type": "deliveries"
          }]
        },
        "roles": {
          "data": []
        },
        "site": {
          "data": {
            "id": "1",
            "type": "sites"
          }
        }
      }
    }, {
      "id": "2",
      "type": "locations",
      "attributes": {
        "name": "Stinger Gate",
        "latitude": 90,
        "longitude": 0
      },
      "relationships": {
        "deliveries": {
          "data": [{
            "id": "1",
            "type": "deliveries"
          }]
        },
        "roles": {
          "data": []
        },
        "site": {
          "data": {
            "id": "1",
            "type": "sites"
          }
        }
      }
    }, {
      "id": "3",
      "type": "locations",
      "attributes": {
        "name": "Sally Port",
        "latitude": 40.6769,
        "longitude": 117.2319
      },
      "relationships": {
        "deliveries": {
          "data": [{
            "id": "1",
            "type": "deliveries"
          }]
        },
        "roles": {
          "data": []
        },
        "site": {
          "data": {
            "id": "1",
            "type": "sites"
          }
        }
      }
    }, {
      "id": "4",
      "type": "locations",
      "attributes": {
        "name": "Warehouse",
        "latitude": 40.6769,
        "longitude": 117.2319
      },
      "relationships": {
        "deliveries": {
          "data": [{
            "id": "1",
            "type": "deliveries"
          }]
        },
        "roles": {
          "data": []
        },
        "site": {
          "data": {
            "id": "1",
            "type": "sites"
          }
        }
      }
    }, {
      "id": "5",
      "type": "locations",
      "attributes": {
        "name": "PA",
        "latitude": 40.6769,
        "longitude": 117.2319
      },
      "relationships": {
        "deliveries": {
          "data": [{
            "id": "1",
            "type": "deliveries"
          }]
        },
        "roles": {
          "data": []
        },
        "site": {
          "data": {
            "id": "1",
            "type": "sites"
          }
        }
      }
    },




    {
      "id": "1",
      "type": "workflows",
      "attributes": {
        "step": 1,
        "processing-time": 60,
        "started-at": "2016-06-20T12:00:43.921Z",
        "ended-at": "2016-06-20T14:00:43.921Z",
        "eta": "2016-06-20T13:00:43.921Z",
        "estimated-processing-time": 120,
        "arrived-at": "2016-06-20T13:00:43.921Z",
        "nonsearch-end": "2016-06-20T13:20:43.921Z",
        "search-end": "2016-06-20T13:45:43.921Z",
        "nonsearch-estimated-processing-time": 30,
        "search-estimated-processing-time": 75,
        "release-estimated-processing-time": 15
      },
      "relationships": {
        "location": {
          "data": {
            "id": "1",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "1",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "2",
      "type": "workflows",
      "attributes": {
        "step": 2,
        "processing-time": null,
        "started-at": "2016-06-20T14:00:37.689Z",
        "ended-at": null,
        "eta": "2016-06-20T15:00:44.052Z",
        "estimated-processing-time": 60,
        "arrived-at": "2016-06-20T14:12:37.689Z"
      },
      "relationships": {
        "location": {
          "data": {
            "id": "2",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "1",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "3",
      "type": "workflows",
      "attributes": {
        "step": 3,
        "processing-time": null,
        "started-at": null,
        "ended-at": null,
        "eta": "2016-06-20T16:00:44.092Z",
        "estimated-processing-time": 45,
        "arrived-at": null,
        "nonsearch-end": null,
        "search-end": null,
        "nonsearch-estimated-processing-time": 15,
        "search-estimated-processing-time": 15,
        "release-estimated-processing-time": 15
      },
      "relationships": {
        "location": {
          "data": {
            "id": "3",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "1",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "4",
      "type": "workflows",
      "attributes": {
        "step": 4,
        "processing-time": null,
        "started-at": null,
        "ended-at": null,
        "eta": "2016-06-20T16:45:44.092Z",
        "estimated-processing-time": 45,
        "arrived-at": null
      },
      "relationships": {
        "location": {
          "data": {
            "id": "4",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "1",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "5",
      "type": "workflows",
      "attributes": {
        "step": 5,
        "processing-time": null,
        "started-at": null,
        "ended-at": null,
        "eta": "2016-06-20T17:30:44.092Z",
        "estimated-processing-time": 45,
        "arrived-at": null
      },
      "relationships": {
        "location": {
          "data": {
            "id": "5",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "1",
            "type": "deliveries"
          }
        }
      }
    },


    {
      "id": "6",
      "type": "workflows",
      "attributes": {
        "step": 1,
        "processing-time": null,
        "started-at": "2016-06-20T14:00:43.921Z",
        "ended-at": null,
        "arrived-at": "2016-06-20T13:45:00.000Z",
        "eta": "2016-06-20T14:00:43.921Z",
        "estimated-processing-time": 120,
        "step": 1,
        "nonsearch-end": "2016-06-20T14:15:43.921Z",
        "search-end": null,
        "nonsearch-estimated-processing-time": 30,
        "search-estimated-processing-time": 75,
        "release-estimated-processing-time": 15
      },
      "relationships": {
        "location": {
          "data": {
            "id": "1",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "2",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "7",
      "type": "workflows",
      "attributes": {
        "processing-time": null,
        "started-at": null,
        "ended-at": null,
        "arrived-at": null,
        "eta": "2016-06-20T16:00:44.052Z",
        "estimated-processing-time": 60,
        "step": 2
      },
      "relationships": {
        "location": {
          "data": {
            "id": "2",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "2",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "8",
      "type": "workflows",
      "attributes": {
        "processing-time": null,

        "started-at": null,
        "ended-at": null,
        "arrived-at": null,
        "eta": "2016-06-20T17:00:44.092Z",
        "estimated-processing-time": 45,
        "step": 3,
        "nonsearch-end": null,
        "search-end": null,
        "nonsearch-estimated-processing-time": 15,
        "search-estimated-processing-time": 15,
        "release-estimated-processing-time": 15
      },
      "relationships": {
        "location": {
          "data": {
            "id": "3",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "2",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "9",
      "type": "workflows",
      "attributes": {
        "processing-time": null,
        "started-at": null,
        "ended-at": null,
        "arrived-at": null,
        "eta": "2016-06-20T17:45:44.092Z",
        "estimated-processing-time": 60,
        "step": 4
      },
      "relationships": {
        "location": {
          "data": {
            "id": "4",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "2",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "10",
      "type": "workflows",
      "attributes": {
        "processing-time": null,
        "started-at": null,
        "ended-at": null,
        "arrived-at": null,
        "eta": "2016-06-20T18:45:44.092Z",
        "estimated-processing-time": 60,
        "step": 5
      },
      "relationships": {
        "location": {
          "data": {
            "id": "5",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "2",
            "type": "deliveries"
          }
        }
      }
    },





    {
      "id": "11",
      "type": "workflows",
      "attributes": {
        "processing-time": null,
        "started-at": "2016-06-20T08:15:43.921Z",
        "ended-at": "2016-06-20T10:18:43.921Z",
        "arrived-at": "2016-06-20T08:05:00.000Z",
        "eta": "2016-06-20T08:00:43.921Z",
        "estimated-processing-time": 120,
        "step": 1,
        "nonsearch-end": "2016-06-20T08:35:00.000Z",
        "search-end": "2016-06-20T09:30:00.000Z",
        "nonsearch-estimated-processing-time": 30,
        "search-estimated-processing-time": 75,
        "release-estimated-processing-time": 15
      },
      "relationships": {
        "location": {
          "data": {
            "id": "1",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "3",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "12",
      "type": "workflows",
      "attributes": {
        "processing-time": null,
        "started-at": "2016-06-20T10:18:43.921Z",
        "ended-at": "2016-06-20T11:15:43.921Z",
        "arrived-at": "2016-06-20T10:22:00.000Z",
        "eta": "2016-06-20T10:00:44.052Z",
        "estimated-processing-time": 60,
        "step": 2
      },
      "relationships": {
        "location": {
          "data": {
            "id": "2",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "3",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "13",
      "type": "workflows",
      "attributes": {
        "processing-time": null,
        "started-at": "2016-06-20T11:15:43.921Z",
        "ended-at": "2016-06-20T12:15:43.921Z",
        "arrived-at": "2016-06-20T11:22:43.921Z",
        "eta": "2016-06-20T11:00:44.092Z",
        "estimated-processing-time": 45,
        "step": 3,
        "nonsearch-end": "2016-06-20T11:50:43.921Z",
        "search-end": "2016-06-20T12:02:43.921Z",
        "nonsearch-estimated-processing-time": 15,
        "search-estimated-processing-time": 15,
        "release-estimated-processing-time": 15
      },
      "relationships": {
        "location": {
          "data": {
            "id": "3",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "3",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "14",
      "type": "workflows",
      "attributes": {
        "processing-time": null,
        "started-at": "2016-06-20T12:15:43.921Z",
        "ended-at": "2016-06-20T13:17:43.921Z",
        "arrived-at": "2016-06-20T12:17:43.921Z",
        "eta": "2016-06-20T11:45:44.092Z",
        "estimated-processing-time": 60,
        "step": 4
      },
      "relationships": {
        "location": {
          "data": {
            "id": "4",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "3",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "15",
      "type": "workflows",
      "attributes": {
        "processing-time": null,
        "started-at": "2016-06-20T13:17:43.921Z",
        "ended-at": "2016-06-20T14:25:43.921Z",
        "arrived-at": "2016-06-20T13:20:43.921Z",
        "eta": "2016-06-20T12:45:44.092Z",
        "estimated-processing-time": 60,
        "step": 5
      },
      "relationships": {
        "location": {
          "data": {
            "id": "5",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "3",
            "type": "deliveries"
          }
        }
      }
    },





    {
      "id": "16",
      "type": "workflows",
      "attributes": {
        "processing-time": null,
        "started-at": "2016-06-20T10:00:43.921Z",
        "ended-at": "2016-06-20T12:00:44.052Z",
        "arrived-at": "2016-06-20T10:00:43.921Z",
        "eta": "2016-06-20T10:00:43.921Z",
        "estimated-processing-time": 120,
        "step": 1,
        "nonsearch-end": "2016-06-20T10:45:43.921Z",
        "search-end": "2016-06-20T11:30:00.000Z",
        "nonsearch-estimated-processing-time": 30,
        "search-estimated-processing-time": 75,
        "release-estimated-processing-time": 15
      },
      "relationships": {
        "location": {
          "data": {
            "id": "1",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "4",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "17",
      "type": "workflows",
      "attributes": {
        "processing-time": null,
        "started-at": "2016-06-20T12:00:44.052Z",
        "ended-at": "2016-06-20T13:00:44.092Z",
        "arrived-at": "2016-06-20T12:00:44.052Z",
        "eta": "2016-06-20T12:00:44.052Z",
        "estimated-processing-time": 60,
        "step": 2
      },
      "relationships": {
        "location": {
          "data": {
            "id": "2",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "4",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "18",
      "type": "workflows",
      "attributes": {
        "processing-time": null,
        "started-at": "2016-06-20T13:00:44.092Z",
        "ended-at": "2016-06-20T13:45:44.092Z",
        "arrived-at": "2016-06-20T13:00:44.092Z",
        "eta": "2016-06-20T13:00:44.092Z",
        "estimated-processing-time": 45,
        "step": 3,
        "nonsearch-end": "2016-06-20T13:15:44.092Z",
        "search-end": "2016-06-20T13:30:44.092Z",
        "nonsearch-estimated-processing-time": 15,
        "search-estimated-processing-time": 15,
        "release-estimated-processing-time": 15
      },
      "relationships": {
        "location": {
          "data": {
            "id": "3",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "4",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "19",
      "type": "workflows",
      "attributes": {
        "processing-time": null,
        "started-at": "2016-06-20T13:45:44.092Z",
        "ended-at": "2016-06-20T14:45:44.092Z",
        "arrived-at": "2016-06-20T13:45:44.092Z",
        "eta": "2016-06-20T13:45:44.092Z",
        "estimated-processing-time": 60,
        "step": 4
      },
      "relationships": {
        "location": {
          "data": {
            "id": "4",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "4",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "20",
      "type": "workflows",
      "attributes": {
        "processing-time": null,
        "started-at": "2016-06-20T14:45:44.092Z",
        "ended-at": null,
        "arrived-at": "2016-06-20T14:45:44.092Z",
        "eta": "2016-06-20T14:45:44.092Z",
        "estimated-processing-time": 60,
        "step": 5
      },
      "relationships": {
        "location": {
          "data": {
            "id": "5",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "4",
            "type": "deliveries"
          }
        }
      }
    },





    {
      "id": "21",
      "type": "workflows",
      "attributes": {
        "processing-time": null,
        "started-at": "2016-06-20T13:00:43.921Z",
        "ended-at": "2016-06-20T14:00:43.921Z",
        "arrived-at": "2016-06-20T13:00:43.921Z",
        "eta": "2016-06-20T12:40:43.921Z",
        "estimated-processing-time": 120,
        "step": 1,
        "nonsearch-end": "2016-06-20T13:20:43.921Z",
        "search-end": "2016-06-20T13:40:43.921Z",
        "nonsearch-estimated-processing-time": 30,
        "search-estimated-processing-time": 75,
        "release-estimated-processing-time": 15
      },
      "relationships": {
        "location": {
          "data": {
            "id": "1",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "5",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "22",
      "type": "workflows",
      "attributes": {
        "processing-time": null,
        "started-at": "2016-06-20T14:00:47.777Z",
        "ended-at": null,
        "arrived-at": "2016-06-20T14:12:37.689Z",
        "eta": "2016-06-20T14:40:44.052Z",
        "estimated-processing-time": 60,
        "step": 2
      },
      "relationships": {
        "location": {
          "data": {
            "id": "2",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "5",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "23",
      "type": "workflows",
      "attributes": {
        "processing-time": null,
        "started-at": null,
        "ended-at": null,
        "arrived-at": null,
        "eta": "2016-06-20T16:00:44.092Z",
        "estimated-processing-time": 45,
        "step": 3,
        "nonsearch-end": null,
        "search-end": null,
        "nonsearch-estimated-processing-time": 15,
        "search-estimated-processing-time": 15,
        "release-estimated-processing-time": 15
      },
      "relationships": {
        "location": {
          "data": {
            "id": "3",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "5",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "24",
      "type": "workflows",
      "attributes": {
        "processing-time": null,
        "started-at": null,
        "ended-at": null,
        "arrived-at": null,
        "eta": "2016-06-20T16:45:44.092Z",
        "estimated-processing-time": 60,
        "step": 4
      },
      "relationships": {
        "location": {
          "data": {
            "id": "4",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "5",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "25",
      "type": "workflows",
      "attributes": {
        "processing-time": null,
        "started-at": null,
        "ended-at": null,
        "arrived-at": null,
        "eta": "2016-06-20T17:45:44.092Z",
        "estimated-processing-time": 60,
        "step": 5
      },
      "relationships": {
        "location": {
          "data": {
            "id": "5",
            "type": "locations"
          }
        },
        "delivery": {
          "data": {
            "id": "5",
            "type": "deliveries"
          }
        }
      }
    }


    , {
      "id": "1",
      "type": "events",
      "attributes": {
        "created-at": "2016-06-20T13:03:40.921Z",
        "is-request": true,
        "uuid": "2",
        // "senderId": 1,
        "role":"POC"
      },
      "relationships": {
        "eventable": {
          "data": {
            "id": "1",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "2",
      "type": "events",
      "attributes": {
        "created-at": "2016-06-20T13:44:56.921Z",
        "is-request": false,
        "uuid": "2"
      },
      "relationships": {
        "eventable": {
          "data": {
            "id": "1",
            "type": "deliveries"
          }
        }
      }
    }


    , {
      "id": "3",
      "type": "events",
      "attributes": {
        "created-at": "2016-06-20T13:46:00.000Z",
        "is-request": true,
        "uuid": "4",
        // "senderId": 2
        "role":"D10"
      },
      "relationships": {
        "eventable": {
          "data": {
            "id": "2",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "4",
      "type": "events",
      "attributes": {
                "uuid": "4",
        "created-at": "2016-06-20T13:48:40.921Z",
        "is-request": false
      },
      "relationships": {
        "eventable": {
          "data": {
            "id": "2",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "17",
      "type": "events",
      "attributes": {
        "created-at": "2016-06-20T14:23:40.921Z",
        "is-request": true,
        "uuid": null,
        // "senderId": 17
        "role":"POC"
      },
      "relationships": {
        "eventable": {
          "data": {
            "id": "2",
            "type": "deliveries"
          }
        }
      }
    }


    , {
      "id": "5",
      "type": "events",
      "attributes": {
        "created-at": "2016-06-20T08:05:02.000Z",
        "is-request": true,
        "uuid": "6",
        // "senderId": 4
        "role":"D10"
      },
      "relationships": {
        "eventable": {
          "data": {
            "id": "3",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "6",
      "type": "events",
      "attributes": {
        "created-at": "2016-06-20T09:05:02.000Z",
        "is-request": false,
        "uuid": "6",
        "role":"D10"
      },
      "relationships": {
        "eventable": {
          "data": {
            "id": "3",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "7",
      "type": "events",
      "attributes": {
        "created-at": "2016-06-20T11:22:43.921Z",
        "is-request": true,
        "uuid": "8",
        // "senderId": 5
        "role":"POC"
      },
      "relationships": {
        "eventable": {
          "data": {
            "id": "3",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "8",
      "type": "events",
      "attributes": {
        "created-at": "2016-06-20T11:26:43.921Z",
        "is-request": false,
        "uuid": "8",
        "role":"D10"
      },
      "relationships": {
        "eventable": {
          "data": {
            "id": "3",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "9",
      "type": "events",
      "attributes": {
        "created-at": "2016-06-20T12:19:43.921Z",
        "is-request": true,
        "uuid": "10",
        // "senderId": 5
        "role":"D10"
      },
      "relationships": {
        "eventable": {
          "data": {
            "id": "3",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "10",
      "type": "events",
      "attributes": {
        "created-at": "2016-06-20T12:21:43.921Z",
        "is-request": false,
        "uuid": "10"
      },
      "relationships": {
        "eventable": {
          "data": {
            "id": "3",
            "type": "deliveries"
          }
        }
      }
    }



    , {
      "id": "11",
      "type": "events",
      "attributes": {
        "created-at": "2016-06-20T10:22:43.921Z",
        "is-request": true,
        "uuid": "12",
        // "senderId": 6
        "role":"Officer"
      },
      "relationships": {
        "eventable": {
          "data": {
            "id": "4",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "12",
      "type": "events",
      "attributes": {
        "created-at": "2016-06-20T10:29:43.921Z",
        "is-request": false,
        "uuid": "12"
      },
      "relationships": {
        "eventable": {
          "data": {
            "id": "4",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "13",
      "type": "events",
      "attributes": {
        "created-at": "2016-06-20T10:30:13.921Z",
        "is-request": true,
        "uuid": "14",
        // "senderId": 6
        "role":"D10"
      },
      "relationships": {
        "eventable": {
          "data": {
            "id": "4",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "14",
      "type": "events",
      "attributes": {
        "created-at": "2016-06-20T10:33:43.921Z",
        "is-request": false,
                "uuid": "14"
      },
      "relationships": {
        "eventable": {
          "data": {
            "id": "4",
            "type": "deliveries"
          }
        }
      }
    }




    , {
      "id": "15",
      "type": "events",
      "attributes": {
        "created-at": "2016-06-20T12:58:43.921Z",
        "is-request": true,
        "uuid": "16",
        // "senderId": 7
        "role":"POC"
      },
      "relationships": {
        "eventable": {
          "data": {
            "id": "5",
            "type": "deliveries"
          }
        }
      }
    }, {
      "id": "16",
      "type": "events",
      "attributes": {
        "created-at": "2016-06-20T13:22:43.921Z",
        "is-request": false,
                "uuid": "16",
        "acceptedResponseId": null,
        "role":"POC"
      },
      "relationships": {
        "eventable": {
          "data": {
            "id": "5",
            "type": "deliveries"
          }
        }
      }
    },





    {
      "id": "1",
      "type": "drivers",
      "attributes": {
        "name": "Han Solo",
        "company": "Hutt Clan",
        "hazmat-authorized": true,
        "frequent": true,
        "email": null,
        "password": null,
        "password-confirmation": null,
        "badge-number": null,
        "password-expires": "2016-06-29"
      },
      "relationships": {
        "deliveries": {
          "data": [{
            "id": "1",
            "type": "deliveries"
          }]
        }
      }
    }, {
      "id": "1",
      "type": "pocs",
      "attributes": {
        "first-name": "Obi Wan",
        "last-name": "Kenobi",
        "phone": "555-0001",
        "extension": "0001"
      },
      "relationships": {
        "deliveries": {
          "data": [{
            "id": "1",
            "type": "deliveries"
          }]
        },
        "site": {
          "data": {
            "id": "1",
            "type": "sites"
          }
        }
      }
    }
  ]
};
