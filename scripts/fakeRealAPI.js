
var fakeRealAPIDeliveries = {
  "data": [
    {
      "id": "1",
      "type": "deliveries",
      "attributes": {
        "cargo": "contraband",
        "cargo-quantity": 0,
        "notes": "I have a bad feeling about this",
        "arrive-at": "2016-03-31T12:00:43.646Z",
        "escort": null,
        "priority": null,
        "processing-time": 18000,
        "current-location": {
          "id": 2,
          "name": "Death Star",
          "latitude": 90,
          "longitude": 0,
          "created_at": "2016-03-31T13:00:42.780Z",
          "updated_at": "2016-03-31T13:00:42.780Z",
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
          "data": [
            {
              "id": "1",
              "type": "locations"
            },
            {
              "id": "2",
              "type": "locations"
            },
            {
              "id": "3",
              "type": "locations"
            }
          ]
        },
        "workflows": {
          "data": [
            {
              "id": "1",
              "type": "workflows"
            },
            {
              "id": "2",
              "type": "workflows"
            },
            {
              "id": "3",
              "type": "workflows"
            }
          ]
        },
        "driver": {
          "data": {
            "id": "1",
            "type": "drivers"
          }
        },
        "events": {
          "data": []
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
  "included": [
    {
      "id": "1",
      "type": "vehicles",
      "attributes": {
        "model": "Sandcrawler",
        "escort": false,
        "priority": false
      },
      "relationships": {
        "vendor": {
          "data": {
            "id": "1",
            "type": "vendors"
          }
        },
        "deliveries": {
          "data": [
            {
              "id": "1",
              "type": "deliveries"
            },
            {
              "id": "2",
              "type": "deliveries"
            }
          ]
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
        "name": "Tatooine"
      },
      "relationships": {
        "locations": {
          "data": [
            {
              "id": "1",
              "type": "locations"
            },
            {
              "id": "2",
              "type": "locations"
            },
            {
              "id": "3",
              "type": "locations"
            }
          ]
        },
        "deliveries": {
          "data": [
            {
              "id": "1",
              "type": "deliveries"
            }
          ]
        },
        "pocs": {
          "data": [
            {
              "id": "1",
              "type": "pocs"
            }
          ]
        }
      }
    },
    {
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
          "data": [
            {
              "id": "1",
              "type": "deliveries"
            }
          ]
        }
      }
    },
    {
      "id": "1",
      "type": "locations",
      "attributes": {
        "name": "Tatooine",
        "latitude": 34,
        "longitude": 9
      },
      "relationships": {
        "deliveries": {
          "data": [
            {
              "id": "1",
              "type": "deliveries"
            }
          ]
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
      "id": "2",
      "type": "locations",
      "attributes": {
        "name": "Death Star",
        "latitude": 90,
        "longitude": 0
      },
      "relationships": {
        "deliveries": {
          "data": [
            {
              "id": "1",
              "type": "deliveries"
            }
          ]
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
      "id": "3",
      "type": "locations",
      "attributes": {
        "name": "Great Temple",
        "latitude": 40.6769,
        "longitude": 117.2319
      },
      "relationships": {
        "deliveries": {
          "data": [
            {
              "id": "1",
              "type": "deliveries"
            }
          ]
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
        "started-at": "2016-03-31T12:00:43.921Z",
        "ended-at": "2016-03-31T14:00:43.921Z",
        "eta": "2016-03-31T13:00:43.921Z",
        "estimated-processing-time": 120,
        "arrived-at": "2016-03-31T13:00:43.921Z"
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
    },
    {
      "id": "2",
      "type": "workflows",
      "attributes": {
        "step": 2,
        "processing-time": null,
        "started-at": "2016-03-31T14:00:37.689Z",//updated
        "ended-at": null,
        "eta": "2016-03-31T15:00:44.052Z",
        "estimated-processing-time": 60,
        "arrived-at": "2016-03-31T14:12:37.689Z"//updated
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
    },
    {
      "id": "3",
      "type": "workflows",
      "attributes": {
        "step": 3,
        "processing-time": null,
        "started-at": null,
        "ended-at": null,
        "eta": "2016-03-31T16:00:44.092Z",
        "estimated-processing-time": 45,
        "arrived-at": null
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
          "data": [
            {
              "id": "1",
              "type": "deliveries"
            }
          ]
        }
      }
    },
    {
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
          "data": [
            {
              "id": "1",
              "type": "deliveries"
            }
          ]
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