
var fakeRealAPIDeliveries = 
{
    "data": [
        {
            "id": "11204",
            "type": "deliveries",
            "attributes": {
                "cargo": "Packages",
                "cargo-quantity": null,
                "notes": null,
                "arrive-at": "2017-05-08T12:04:39.000-04:00",
                "escort": false,
                "priority": false,
                "processing-time": null,
                "current-location": {
                    "id": 10001,
                    "name": "Stinger Gate",
                    "latitude": 34,
                    "longitude": 9,
                    "created_at": "2016-07-10T01:00:13.000-04:00",
                    "updated_at": "2016-07-10T01:00:13.000-04:00",
                    "site_id": 10000,
                    "driver_instructions": [
                        {
                            "step": 1,
                            "text": "Please wait patiently, an officer has been informed of your arrival and they will open the gate for you shortly"
                        }
                    ]
                },
                "escort-badge-number": null,
                "driver-badge-number": null,
                "current-workflow": {
                    "id": 14054,
                    "location-id": 10001,
                    "delivery-id": 11204,
                    "step": 2,
                    "created-at": "2017-05-08T10:43:35.000-04:00",
                    "updated-at": "2017-05-08T12:29:12.000-04:00",
                    "processing-time": null,
                    "started-at": "2017-05-08T12:29:12.000-04:00",
                    "ended-at": null,
                    "eta": null,
                    "estimated-processing-time": null,
                    "arrived-at": null,
                    "nonsearch-end": null,
                    "search-end": null,
                    "nonsearch-ept": null,
                    "search-ept": null,
                    "release-ept": null
                },
                "lane-assignment": null,
                "eta": "2017-05-08T10:42:41.000-04:00",
                "deny-entry-reason": null,
                "destination": {
                    "name": "warehouse",
                    "display-name": "Warehouse",
                    "locations": [
                        "Sierra 1",
                        "Stinger Gate",
                        "Warehouse",
                        "Exit",
                        "Stinger Gate"
                    ]
                },
                "exited-at": null
            },
            "relationships": {
                "vehicle": {
                    "data": {
                        "id": "11207",
                        "type": "vehicles"
                    }
                },
                "site": {
                    "data": {
                        "id": "10000",
                        "type": "sites"
                    }
                },
                "project": {
                    "data": null
                },
                "workflows": {
                    "data": [
                        {
                            "id": "14053",
                            "type": "workflows"
                        },
                        {
                            "id": "14054",
                            "type": "workflows"
                        },
                        {
                            "id": "14055",
                            "type": "workflows"
                        },
                        {
                            "id": "14056",
                            "type": "workflows"
                        },
                        {
                            "id": "14057",
                            "type": "workflows"
                        }
                    ]
                },
                "driver": {
                    "data": {
                        "id": "10000",
                        "type": "drivers"
                    }
                },
                "primary-poc": {
                    "data": {
                        "id": "11370",
                        "type": "pocs"
                    }
                },
                "secondary-poc": {
                    "data": null
                },
                "events": {
                    "data": [
                        {
                            "id": "21007",
                            "type": "events"
                        },
                        {
                            "id": "21014",
                            "type": "events"
                        },
                        {
                            "id": "21015",
                            "type": "events"
                        },
                        {
                            "id": "21017",
                            "type": "events"
                        },
                        {
                            "id": "21018",
                            "type": "events"
                        },
                        {
                            "id": "21020",
                            "type": "events"
                        },
                        {
                            "id": "21021",
                            "type": "events"
                        },
                        {
                            "id": "21022",
                            "type": "events"
                        },
                        {
                            "id": "21040",
                            "type": "events"
                        },
                        {
                            "id": "21041",
                            "type": "events"
                        },
                        {
                            "id": "21043",
                            "type": "events"
                        },
                        {
                            "id": "21051",
                            "type": "events"
                        },
                        {
                            "id": "21013",
                            "type": "events"
                        },
                        {
                            "id": "21016",
                            "type": "events"
                        },
                        {
                            "id": "21023",
                            "type": "events"
                        },
                        {
                            "id": "21045",
                            "type": "events"
                        },
                        {
                            "id": "21046",
                            "type": "events"
                        },
                        {
                            "id": "21019",
                            "type": "events"
                        },
                        {
                            "id": "21006",
                            "type": "events"
                        },
                        {
                            "id": "21039",
                            "type": "events"
                        },
                        {
                            "id": "21044",
                            "type": "events"
                        }
                    ]
                },
                "boa": {
                    "data": {
                        "id": "11779",
                        "type": "boas"
                    }
                }
            }
        },
        {
            "id": "11203",
            "type": "deliveries",
            "attributes": {
                "cargo": "Packages",
                "cargo-quantity": null,
                "notes": null,
                "arrive-at": "2017-05-08T11:30:21.000-04:00",
                "escort": false,
                "priority": false,
                "processing-time": null,
                "current-location": {
                    "id": 10022,
                    "name": "Warehouse",
                    "latitude": null,
                    "longitude": null,
                    "created_at": "2016-08-23T11:10:22.000-04:00",
                    "updated_at": "2016-08-23T11:10:22.000-04:00",
                    "site_id": 10000,
                    "driver_instructions": {}
                },
                "escort-badge-number": null,
                "driver-badge-number": null,
                "current-workflow": {
                    "id": 14050,
                    "location-id": 10022,
                    "delivery-id": 11203,
                    "step": 3,
                    "created-at": "2017-05-08T10:42:13.000-04:00",
                    "updated-at": "2017-05-08T12:05:00.000-04:00",
                    "processing-time": 90,
                    "started-at": "2017-05-08T12:05:00.000-04:00",
                    "ended-at": null,
                    "eta": null,
                    "estimated-processing-time": null,
                    "arrived-at": null,
                    "nonsearch-end": null,
                    "search-end": null,
                    "nonsearch-ept": null,
                    "search-ept": null,
                    "release-ept": null
                },
                "lane-assignment": null,
                "eta": "2017-05-08T10:41:24.000-04:00",
                "deny-entry-reason": null,
                "destination": {
                    "name": "warehouse",
                    "display-name": "Warehouse",
                    "locations": [
                        "Sierra 1",
                        "Stinger Gate",
                        "Warehouse",
                        "Exit",
                        "Stinger Gate"
                    ]
                },
                "exited-at": null
            },
            "relationships": {
                "vehicle": {
                    "data": {
                        "id": "11206",
                        "type": "vehicles"
                    }
                },
                "site": {
                    "data": {
                        "id": "10000",
                        "type": "sites"
                    }
                },
                "project": {
                    "data": null
                },
                "workflows": {
                    "data": [
                        {
                            "id": "14048",
                            "type": "workflows"
                        },
                        {
                            "id": "14049",
                            "type": "workflows"
                        },
                        {
                            "id": "14050",
                            "type": "workflows"
                        },
                        {
                            "id": "14051",
                            "type": "workflows"
                        },
                        {
                            "id": "14052",
                            "type": "workflows"
                        }
                    ]
                },
                "driver": {
                    "data": {
                        "id": "10000",
                        "type": "drivers"
                    }
                },
                "primary-poc": {
                    "data": {
                        "id": "11369",
                        "type": "pocs"
                    }
                },
                "secondary-poc": {
                    "data": null
                },
                "events": {
                    "data": [
                        {
                            "id": "20982",
                            "type": "events"
                        },
                        {
                            "id": "20983",
                            "type": "events"
                        },
                        {
                            "id": "20984",
                            "type": "events"
                        },
                        {
                            "id": "20985",
                            "type": "events"
                        },
                        {
                            "id": "20988",
                            "type": "events"
                        },
                        {
                            "id": "20990",
                            "type": "events"
                        },
                        {
                            "id": "20993",
                            "type": "events"
                        },
                        {
                            "id": "20994",
                            "type": "events"
                        },
                        {
                            "id": "20995",
                            "type": "events"
                        },
                        {
                            "id": "20997",
                            "type": "events"
                        },
                        {
                            "id": "21000",
                            "type": "events"
                        },
                        {
                            "id": "21002",
                            "type": "events"
                        },
                        {
                            "id": "21003",
                            "type": "events"
                        },
                        {
                            "id": "21008",
                            "type": "events"
                        },
                        {
                            "id": "20986",
                            "type": "events"
                        },
                        {
                            "id": "20987",
                            "type": "events"
                        },
                        {
                            "id": "20991",
                            "type": "events"
                        },
                        {
                            "id": "20992",
                            "type": "events"
                        },
                        {
                            "id": "20999",
                            "type": "events"
                        },
                        {
                            "id": "21001",
                            "type": "events"
                        },
                        {
                            "id": "21004",
                            "type": "events"
                        },
                        {
                            "id": "20989",
                            "type": "events"
                        },
                        {
                            "id": "20996",
                            "type": "events"
                        },
                        {
                            "id": "20998",
                            "type": "events"
                        }
                    ]
                },
                "boa": {
                    "data": {
                        "id": "11778",
                        "type": "boas"
                    }
                }
            }
        },
        {
            "id": "11200",
            "type": "deliveries",
            "attributes": {
                "cargo": "Water",
                "cargo-quantity": null,
                "notes": null,
                "arrive-at": "2017-05-08T07:16:58.000-04:00",
                "escort": false,
                "priority": false,
                "processing-time": null,
                "current-location": {
                    "id": 10022,
                    "name": "Warehouse",
                    "latitude": null,
                    "longitude": null,
                    "created_at": "2016-08-23T11:10:22.000-04:00",
                    "updated_at": "2016-08-23T11:10:22.000-04:00",
                    "site_id": 10000,
                    "driver_instructions": {}
                },
                "escort-badge-number": null,
                "driver-badge-number": null,
                "current-workflow": {
                    "id": 14035,
                    "location-id": 10022,
                    "delivery-id": 11200,
                    "step": 3,
                    "created-at": "2017-05-08T07:16:34.000-04:00",
                    "updated-at": "2017-05-08T10:00:48.000-04:00",
                    "processing-time": null,
                    "started-at": "2017-05-08T10:00:48.000-04:00",
                    "ended-at": null,
                    "eta": null,
                    "estimated-processing-time": null,
                    "arrived-at": null,
                    "nonsearch-end": null,
                    "search-end": null,
                    "nonsearch-ept": null,
                    "search-ept": null,
                    "release-ept": null
                },
                "lane-assignment": null,
                "eta": "2017-05-08T07:16:33.000-04:00",
                "deny-entry-reason": null,
                "destination": {
                    "name": "warehouse",
                    "display-name": "Warehouse",
                    "locations": [
                        "Sierra 1",
                        "Stinger Gate",
                        "Warehouse",
                        "Exit",
                        "Stinger Gate"
                    ]
                },
                "exited-at": null
            },
            "relationships": {
                "vehicle": {
                    "data": {
                        "id": "11203",
                        "type": "vehicles"
                    }
                },
                "site": {
                    "data": {
                        "id": "10000",
                        "type": "sites"
                    }
                },
                "project": {
                    "data": null
                },
                "workflows": {
                    "data": [
                        {
                            "id": "14033",
                            "type": "workflows"
                        },
                        {
                            "id": "14034",
                            "type": "workflows"
                        },
                        {
                            "id": "14035",
                            "type": "workflows"
                        },
                        {
                            "id": "14036",
                            "type": "workflows"
                        },
                        {
                            "id": "14037",
                            "type": "workflows"
                        }
                    ]
                },
                "driver": {
                    "data": {
                        "id": "10181",
                        "type": "drivers"
                    }
                },
                "primary-poc": {
                    "data": {
                        "id": "11034",
                        "type": "pocs"
                    }
                },
                "secondary-poc": {
                    "data": {
                        "id": "11367",
                        "type": "pocs"
                    }
                },
                "events": {
                    "data": [
                        {
                            "id": "20918",
                            "type": "events"
                        },
                        {
                            "id": "20920",
                            "type": "events"
                        },
                        {
                            "id": "20922",
                            "type": "events"
                        },
                        {
                            "id": "20928",
                            "type": "events"
                        },
                        {
                            "id": "20930",
                            "type": "events"
                        },
                        {
                            "id": "20931",
                            "type": "events"
                        },
                        {
                            "id": "20934",
                            "type": "events"
                        },
                        {
                            "id": "20937",
                            "type": "events"
                        },
                        {
                            "id": "20960",
                            "type": "events"
                        },
                        {
                            "id": "20919",
                            "type": "events"
                        },
                        {
                            "id": "20921",
                            "type": "events"
                        },
                        {
                            "id": "20924",
                            "type": "events"
                        },
                        {
                            "id": "20925",
                            "type": "events"
                        },
                        {
                            "id": "20932",
                            "type": "events"
                        },
                        {
                            "id": "20933",
                            "type": "events"
                        },
                        {
                            "id": "20936",
                            "type": "events"
                        },
                        {
                            "id": "20923",
                            "type": "events"
                        },
                        {
                            "id": "20926",
                            "type": "events"
                        },
                        {
                            "id": "20927",
                            "type": "events"
                        },
                        {
                            "id": "20929",
                            "type": "events"
                        },
                        {
                            "id": "20935",
                            "type": "events"
                        },
                        {
                            "id": "20961",
                            "type": "events"
                        }
                    ]
                },
                "boa": {
                    "data": {
                        "id": "11773",
                        "type": "boas"
                    }
                }
            }
        },
        {
            "id": "11210",
            "type": "deliveries",
            "attributes": {
                "cargo": "Empty",
                "cargo-quantity": null,
                "notes": null,
                "arrive-at": null,
                "escort": false,
                "priority": false,
                "processing-time": null,
                "current-location": {
                    "id": 10000,
                    "name": "Sierra 1",
                    "latitude": 34,
                    "longitude": 9,
                    "created_at": "2016-07-10T01:00:13.000-04:00",
                    "updated_at": "2016-07-10T01:00:13.000-04:00",
                    "site_id": 10000,
                    "driver_instructions": [
                        {
                            "step": 1,
                            "text": "Turn off engine; if cannot, chock wheels"
                        },
                        {
                            "step": 2,
                            "text": "Open hood and compartments"
                        },
                        {
                            "step": 3,
                            "text": "Have documentation and driver license ready"
                        }
                    ]
                },
                "escort-badge-number": null,
                "driver-badge-number": null,
                "current-workflow": null,
                "lane-assignment": null,
                "eta": "2017-05-08T13:30:18.000-04:00",
                "deny-entry-reason": null,
                "destination": {
                    "name": "oca",
                    "display-name": "oca",
                    "locations": [
                        "Sierra 1",
                        "Exit"
                    ]
                },
                "exited-at": null
            },
            "relationships": {
                "vehicle": {
                    "data": {
                        "id": "11213",
                        "type": "vehicles"
                    }
                },
                "site": {
                    "data": {
                        "id": "10000",
                        "type": "sites"
                    }
                },
                "project": {
                    "data": null
                },
                "workflows": {
                    "data": [
                        {
                            "id": "14077",
                            "type": "workflows"
                        },
                        {
                            "id": "14078",
                            "type": "workflows"
                        }
                    ]
                },
                "driver": {
                    "data": {
                        "id": "10000",
                        "type": "drivers"
                    }
                },
                "primary-poc": {
                    "data": {
                        "id": "10641",
                        "type": "pocs"
                    }
                },
                "secondary-poc": {
                    "data": null
                },
                "events": {
                    "data": []
                },
                "boa": {
                    "data": {
                        "id": "11787",
                        "type": "boas"
                    }
                }
            }
        },
        {
            "id": "11206",
            "type": "deliveries",
            "attributes": {
                "cargo": "Boxes",
                "cargo-quantity": null,
                "notes": null,
                "arrive-at": "2017-05-08T12:10:25.000-04:00",
                "escort": false,
                "priority": false,
                "processing-time": null,
                "current-location": {
                    "id": 10022,
                    "name": "Warehouse",
                    "latitude": null,
                    "longitude": null,
                    "created_at": "2016-08-23T11:10:22.000-04:00",
                    "updated_at": "2016-08-23T11:10:22.000-04:00",
                    "site_id": 10000,
                    "driver_instructions": {}
                },
                "escort-badge-number": null,
                "driver-badge-number": null,
                "current-workflow": {
                    "id": 14065,
                    "location-id": 10022,
                    "delivery-id": 11206,
                    "step": 3,
                    "created-at": "2017-05-08T12:10:02.000-04:00",
                    "updated-at": "2017-05-08T12:22:13.000-04:00",
                    "processing-time": null,
                    "started-at": "2017-05-08T12:22:13.000-04:00",
                    "ended-at": null,
                    "eta": null,
                    "estimated-processing-time": null,
                    "arrived-at": null,
                    "nonsearch-end": null,
                    "search-end": null,
                    "nonsearch-ept": null,
                    "search-ept": null,
                    "release-ept": null
                },
                "lane-assignment": null,
                "eta": "2017-05-08T12:10:02.000-04:00",
                "deny-entry-reason": null,
                "destination": {
                    "name": "warehouse",
                    "display-name": "Warehouse",
                    "locations": [
                        "Sierra 1",
                        "Stinger Gate",
                        "Warehouse",
                        "Exit",
                        "Stinger Gate"
                    ]
                },
                "exited-at": null
            },
            "relationships": {
                "vehicle": {
                    "data": {
                        "id": "11209",
                        "type": "vehicles"
                    }
                },
                "site": {
                    "data": {
                        "id": "10000",
                        "type": "sites"
                    }
                },
                "project": {
                    "data": null
                },
                "workflows": {
                    "data": [
                        {
                            "id": "14063",
                            "type": "workflows"
                        },
                        {
                            "id": "14064",
                            "type": "workflows"
                        },
                        {
                            "id": "14065",
                            "type": "workflows"
                        },
                        {
                            "id": "14066",
                            "type": "workflows"
                        },
                        {
                            "id": "14067",
                            "type": "workflows"
                        }
                    ]
                },
                "driver": {
                    "data": {
                        "id": "10181",
                        "type": "drivers"
                    }
                },
                "primary-poc": {
                    "data": {
                        "id": "11034",
                        "type": "pocs"
                    }
                },
                "secondary-poc": {
                    "data": {
                        "id": "11371",
                        "type": "pocs"
                    }
                },
                "events": {
                    "data": [
                        {
                            "id": "21009",
                            "type": "events"
                        },
                        {
                            "id": "21012",
                            "type": "events"
                        },
                        {
                            "id": "21024",
                            "type": "events"
                        },
                        {
                            "id": "21026",
                            "type": "events"
                        },
                        {
                            "id": "21028",
                            "type": "events"
                        },
                        {
                            "id": "21029",
                            "type": "events"
                        },
                        {
                            "id": "21032",
                            "type": "events"
                        },
                        {
                            "id": "21033",
                            "type": "events"
                        },
                        {
                            "id": "21035",
                            "type": "events"
                        },
                        {
                            "id": "21037",
                            "type": "events"
                        },
                        {
                            "id": "21038",
                            "type": "events"
                        },
                        {
                            "id": "21042",
                            "type": "events"
                        },
                        {
                            "id": "21047",
                            "type": "events"
                        },
                        {
                            "id": "21066",
                            "type": "events"
                        },
                        {
                            "id": "21010",
                            "type": "events"
                        },
                        {
                            "id": "21036",
                            "type": "events"
                        },
                        {
                            "id": "21031",
                            "type": "events"
                        },
                        {
                            "id": "21048",
                            "type": "events"
                        },
                        {
                            "id": "21011",
                            "type": "events"
                        },
                        {
                            "id": "21025",
                            "type": "events"
                        },
                        {
                            "id": "21027",
                            "type": "events"
                        },
                        {
                            "id": "21030",
                            "type": "events"
                        },
                        {
                            "id": "21034",
                            "type": "events"
                        }
                    ]
                },
                "boa": {
                    "data": {
                        "id": "11781",
                        "type": "boas"
                    }
                }
            }
        },
        {
            "id": "11207",
            "type": "deliveries",
            "attributes": {
                "cargo": "Empty",
                "cargo-quantity": null,
                "notes": null,
                "arrive-at": null,
                "escort": false,
                "priority": false,
                "processing-time": null,
                "current-location": {
                    "id": 10000,
                    "name": "Sierra 1",
                    "latitude": 34,
                    "longitude": 9,
                    "created_at": "2016-07-10T01:00:13.000-04:00",
                    "updated_at": "2016-07-10T01:00:13.000-04:00",
                    "site_id": 10000,
                    "driver_instructions": [
                        {
                            "step": 1,
                            "text": "Turn off engine; if cannot, chock wheels"
                        },
                        {
                            "step": 2,
                            "text": "Open hood and compartments"
                        },
                        {
                            "step": 3,
                            "text": "Have documentation and driver license ready"
                        }
                    ]
                },
                "escort-badge-number": null,
                "driver-badge-number": null,
                "current-workflow": null,
                "lane-assignment": null,
                "eta": "2017-05-08T12:37:12.000-04:00",
                "deny-entry-reason": null,
                "destination": {
                    "name": "warehouse",
                    "display-name": "Warehouse",
                    "locations": [
                        "Sierra 1",
                        "Stinger Gate",
                        "Warehouse",
                        "Exit",
                        "Stinger Gate"
                    ]
                },
                "exited-at": null
            },
            "relationships": {
                "vehicle": {
                    "data": {
                        "id": "11210",
                        "type": "vehicles"
                    }
                },
                "site": {
                    "data": {
                        "id": "10000",
                        "type": "sites"
                    }
                },
                "project": {
                    "data": null
                },
                "workflows": {
                    "data": [
                        {
                            "id": "14068",
                            "type": "workflows"
                        },
                        {
                            "id": "14069",
                            "type": "workflows"
                        },
                        {
                            "id": "14070",
                            "type": "workflows"
                        },
                        {
                            "id": "14071",
                            "type": "workflows"
                        },
                        {
                            "id": "14072",
                            "type": "workflows"
                        }
                    ]
                },
                "driver": {
                    "data": {
                        "id": "10000",
                        "type": "drivers"
                    }
                },
                "primary-poc": {
                    "data": {
                        "id": "10641",
                        "type": "pocs"
                    }
                },
                "secondary-poc": {
                    "data": null
                },
                "events": {
                    "data": []
                },
                "boa": {
                    "data": {
                        "id": "11784",
                        "type": "boas"
                    }
                }
            }
        },
        {
            "id": "11209",
            "type": "deliveries",
            "attributes": {
                "cargo": "Packages",
                "cargo-quantity": null,
                "notes": null,
                "arrive-at": null,
                "escort": false,
                "priority": false,
                "processing-time": null,
                "current-location": {
                    "id": 10000,
                    "name": "Sierra 1",
                    "latitude": 34,
                    "longitude": 9,
                    "created_at": "2016-07-10T01:00:13.000-04:00",
                    "updated_at": "2016-07-10T01:00:13.000-04:00",
                    "site_id": 10000,
                    "driver_instructions": [
                        {
                            "step": 1,
                            "text": "Turn off engine; if cannot, chock wheels"
                        },
                        {
                            "step": 2,
                            "text": "Open hood and compartments"
                        },
                        {
                            "step": 3,
                            "text": "Have documentation and driver license ready"
                        }
                    ]
                },
                "escort-badge-number": null,
                "driver-badge-number": null,
                "current-workflow": null,
                "lane-assignment": null,
                "eta": "2017-05-08T13:29:16.000-04:00",
                "deny-entry-reason": null,
                "destination": {
                    "name": "oca",
                    "display-name": "oca",
                    "locations": [
                        "Sierra 1",
                        "Exit"
                    ]
                },
                "exited-at": null
            },
            "relationships": {
                "vehicle": {
                    "data": {
                        "id": "11212",
                        "type": "vehicles"
                    }
                },
                "site": {
                    "data": {
                        "id": "10000",
                        "type": "sites"
                    }
                },
                "project": {
                    "data": null
                },
                "workflows": {
                    "data": [
                        {
                            "id": "14075",
                            "type": "workflows"
                        },
                        {
                            "id": "14076",
                            "type": "workflows"
                        }
                    ]
                },
                "driver": {
                    "data": {
                        "id": "10000",
                        "type": "drivers"
                    }
                },
                "primary-poc": {
                    "data": {
                        "id": "10641",
                        "type": "pocs"
                    }
                },
                "secondary-poc": {
                    "data": null
                },
                "events": {
                    "data": []
                },
                "boa": {
                    "data": {
                        "id": "11786",
                        "type": "boas"
                    }
                }
            }
        }
    ],
    "included": [
        {
            "id": "11207",
            "type": "vehicles",
            "attributes": {
                "model": null,
                "escort": false,
                "priority": false,
                "vehicle-type": "common_carrier",
                "status": null,
                "number-of-axles": null
            },
            "relationships": {
                "vendor": {
                    "data": {
                        "id": "10820",
                        "type": "vendors"
                    }
                },
                "images": {
                    "data": []
                }
            }
        },
        {
            "id": "10820",
            "type": "vendors",
            "attributes": {
                "name": "Test 4"
            }
        },
        {
            "id": "10000",
            "type": "sites",
            "attributes": {
                "name": "Limerick"
            }
        },
        {
            "id": "14053",
            "type": "workflows",
            "attributes": {
                "step": 1,
                "processing-time": 15,
                "started-at": "2017-05-08T12:04:39.000-04:00",
                "ended-at": "2017-05-08T12:29:12.000-04:00",
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": "2017-05-08T12:12:13.000-04:00",
                "search-end": "2017-05-08T12:13:36.000-04:00",
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10000",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "10000",
            "type": "locations",
            "attributes": {
                "name": "Sierra 1",
                "latitude": 34,
                "longitude": 9,
                "driver-instructions": [
                    {
                        "step": 1,
                        "text": "Turn off engine; if cannot, chock wheels"
                    },
                    {
                        "step": 2,
                        "text": "Open hood and compartments"
                    },
                    {
                        "step": 3,
                        "text": "Have documentation and driver license ready"
                    }
                ]
            },
            "relationships": {
                "site": {
                    "data": {
                        "id": "10000",
                        "type": "sites"
                    }
                }
            }
        },
        {
            "id": "14054",
            "type": "workflows",
            "attributes": {
                "step": 2,
                "processing-time": null,
                "started-at": "2017-05-08T12:29:12.000-04:00",
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10001",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "10001",
            "type": "locations",
            "attributes": {
                "name": "Stinger Gate",
                "latitude": 34,
                "longitude": 9,
                "driver-instructions": [
                    {
                        "step": 1,
                        "text": "Please wait patiently, an officer has been informed of your arrival and they will open the gate for you shortly"
                    }
                ]
            },
            "relationships": {
                "site": {
                    "data": {
                        "id": "10000",
                        "type": "sites"
                    }
                }
            }
        },
        {
            "id": "14055",
            "type": "workflows",
            "attributes": {
                "step": 3,
                "processing-time": 60,
                "started-at": null,
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10022",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "10022",
            "type": "locations",
            "attributes": {
                "name": "Warehouse",
                "latitude": null,
                "longitude": null,
                "driver-instructions": {}
            },
            "relationships": {
                "site": {
                    "data": {
                        "id": "10000",
                        "type": "sites"
                    }
                }
            }
        },
        {
            "id": "14056",
            "type": "workflows",
            "attributes": {
                "step": 4,
                "processing-time": 15,
                "started-at": null,
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10021",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "10021",
            "type": "locations",
            "attributes": {
                "name": "Exit",
                "latitude": null,
                "longitude": null,
                "driver-instructions": {}
            },
            "relationships": {
                "site": {
                    "data": {
                        "id": "10000",
                        "type": "sites"
                    }
                }
            }
        },
        {
            "id": "14057",
            "type": "workflows",
            "attributes": {
                "step": 5,
                "processing-time": null,
                "started-at": null,
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10001",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "10000",
            "type": "drivers",
            "attributes": {
                "first-name": "John",
                "last-name": "Cranford",
                "company": null,
                "hazmat-authorized": true,
                "frequent": true,
                "email": "john@gmail.com",
                "badge-number": null,
                "password-expires": "2016-11-14T12:53:41.000-05:00",
                "password-confirmation": null,
                "confirmed": false,
                "estimated-wait-time": 0,
                "driver-instructions": {
                    "location": "Stinger Gate",
                    "instructions": [
                        {
                            "step": 1,
                            "text": "Please wait patiently, an officer has been informed of your arrival and they will open the gate for you shortly"
                        }
                    ]
                },
                "phone-number": "(610) 718-4545",
                "name": "John Cranford"
            },
            "relationships": {
                "driver-vehicle-detail": {
                    "data": null
                },
                "driver-workorder-detail": {
                    "data": null
                },
                "images": {
                    "data": []
                }
            }
        },
        {
            "id": "11370",
            "type": "pocs",
            "attributes": {
                "first-name": "King",
                "last-name": null,
                "phone": "(610) 718-4545",
                "extension": "4545",
                "name": "King "
            },
            "relationships": {
                "site": {
                    "data": {
                        "id": "10000",
                        "type": "sites"
                    }
                }
            }
        },
        {
            "id": "21007",
            "type": "events",
            "attributes": {
                "name": "s1_sas_arrived",
                "message": "Test 4 vehicle has arrived at Sierra 1.",
                "created-at": "2017-05-08T12:04:39.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "fc4e3f98-04ba-46aa-b8c1-b2c42048949b",
                "is-request": true,
                "role": null,
                "title": "Sierra 1 Arrival"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21014",
            "type": "events",
            "attributes": {
                "name": "s1_d10_cover_response",
                "message": "D10: Acknowledged. I'll cover you.",
                "created-at": "2017-05-08T12:12:34.000-04:00",
                "reply": "Yes",
                "reason": null,
                "uuid": "015e5074-c7ea-416c-b871-8764562dfa67",
                "is-request": false,
                "role": null,
                "title": "Overwatch Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21015",
            "type": "events",
            "attributes": {
                "name": "s1_d10_stop_cover",
                "message": "Sierra 1 has completed the search of Test 4, do you acknowledge?",
                "created-at": "2017-05-08T12:13:02.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "4264324e-ea19-453f-813d-17d2c20a8380",
                "is-request": true,
                "role": null,
                "title": "Overwatch Request"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21017",
            "type": "events",
            "attributes": {
                "name": "s1_search_completed",
                "message": "Search of Test 4 was completed successfully.",
                "created-at": "2017-05-08T16:13:34.000Z",
                "reply": null,
                "reason": null,
                "uuid": "3abd9cac-942f-44b0-a7d8-d9fb191e4c73",
                "is-request": true,
                "role": null,
                "title": "Search Complete"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21018",
            "type": "events",
            "attributes": {
                "name": "s1_sas_release_vehicle",
                "message": "Sierra 1 is ready to release the Test 4 truck. Please Acknowledge.",
                "created-at": "2017-05-08T12:13:49.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "c4d61200-8a85-48cd-85e4-5e86a8bb1908",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21020",
            "type": "events",
            "attributes": {
                "name": "s1_d10_release_vehicle",
                "message": "Sierra 1 is ready to release the Test 4 truck. Please Acknowledge.",
                "created-at": "2017-05-08T12:13:49.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "61c92240-4825-4b25-a0bf-0b47afadda2a",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21021",
            "type": "events",
            "attributes": {
                "name": "s1_poc_release_vehicle",
                "message": "Sierra 1 is ready to release the Test 4 vehicle. Text 'Y' to acknowledge",
                "created-at": "2017-05-08T12:13:49.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "7c946000-24b8-44df-aac2-d51747ec3d5f",
                "is-request": true,
                "role": null,
                "title": "POC Delivery Release"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21022",
            "type": "events",
            "attributes": {
                "name": "s1_d1_release_vehicle",
                "message": "Sierra 1 is ready to release the Test 4 truck. Please Acknowledge.",
                "created-at": "2017-05-08T12:13:49.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "0dbe2ab7-5d4a-44b9-848d-107bf47b2ff0",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21040",
            "type": "events",
            "attributes": {
                "name": "s1_d10_release_vehicle_response",
                "message": "D10: Acknowledged. Release Test 4.",
                "created-at": "2017-05-08T12:15:30.000-04:00",
                "reply": "Yes",
                "reason": null,
                "uuid": "61c92240-4825-4b25-a0bf-0b47afadda2a",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21041",
            "type": "events",
            "attributes": {
                "name": "s1_d1_release_vehicle_response",
                "message": "D1: Acknowledged. Release Test 4.",
                "created-at": "2017-05-08T16:15:59.000Z",
                "reply": "Yes",
                "reason": null,
                "uuid": "0dbe2ab7-5d4a-44b9-848d-107bf47b2ff0",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21043",
            "type": "events",
            "attributes": {
                "name": "s1_vvro_release_vehicle_response",
                "message": "VVRO: Acknowledged. Release Test 4.",
                "created-at": "2017-05-08T16:16:10.000Z",
                "reply": "Yes",
                "reason": null,
                "uuid": "c492f51c-609a-4d32-aa34-c50888b2b5f6",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21051",
            "type": "events",
            "attributes": {
                "name": "s1_release_confirmed",
                "message": "Sierra 1 released Test 4 to Stinger Gate.",
                "created-at": "2017-05-08T12:29:13.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "9d7213ab-9a1e-46f7-a924-0c437b251e7e",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21013",
            "type": "events",
            "attributes": {
                "name": "s1_d10_cover",
                "message": "Sierra 1 is going to engage in search of Test 4, do you have their cover?",
                "created-at": "2017-05-08T16:12:13.000Z",
                "reply": null,
                "reason": null,
                "uuid": "015e5074-c7ea-416c-b871-8764562dfa67",
                "is-request": true,
                "role": null,
                "title": "Overwatch Request"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21016",
            "type": "events",
            "attributes": {
                "name": "s1_d10_stop_cover_response",
                "message": "D10: Acknowledged. I'm finshed covering you.",
                "created-at": "2017-05-08T16:13:34.000Z",
                "reply": "Yes",
                "reason": null,
                "uuid": "4264324e-ea19-453f-813d-17d2c20a8380",
                "is-request": false,
                "role": null,
                "title": "Search Complete"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21023",
            "type": "events",
            "attributes": {
                "name": "s1_vvro_release_vehicle",
                "message": "Sierra 1 is ready to release the Test 4 truck. Please Acknowledge.",
                "created-at": "2017-05-08T12:13:49.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "c492f51c-609a-4d32-aa34-c50888b2b5f6",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21045",
            "type": "events",
            "attributes": {
                "name": "s1_sas_release_vehicle_response",
                "message": "SAS: Acknowledged. Release Test 4.",
                "created-at": "2017-05-08T16:16:35.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "c4d61200-8a85-48cd-85e4-5e86a8bb1908",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21046",
            "type": "events",
            "attributes": {
                "name": "s1_poc_release_vehicle_response",
                "message": "POC: Acknowledged. Release Test 4.",
                "created-at": "2017-05-08T12:16:38.000-04:00",
                "reply": "y",
                "reason": null,
                "uuid": "7c946000-24b8-44df-aac2-d51747ec3d5f",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21019",
            "type": "events",
            "attributes": {
                "name": "s1_sp_release_vehicle",
                "message": "Sierra 1 is ready to release the Test 4 truck. Please Acknowledge.",
                "created-at": "2017-05-08T12:13:49.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "a2afdda3-eb72-46eb-839a-c8bccbab3da9",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21006",
            "type": "events",
            "attributes": {
                "name": "s1_poc_arrived",
                "message": "Test 4 vehicle has arrived at Sierra 1, please acknowledge. Text ???Y??? if you are ready to receive your delivery or text ???N??? if you are not ready to receive it. If you have a stand-in who can recieve it, text 'S'.",
                "created-at": "2017-05-08T12:04:39.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "ba157041-7d38-47c3-a82a-0fecb3614511",
                "is-request": true,
                "role": null,
                "title": "Sierra 1 Arrival"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21039",
            "type": "events",
            "attributes": {
                "name": "s1_d10_stop_cover_response",
                "message": "D10: Acknowledged. I'm finshed covering you.",
                "created-at": "2017-05-08T16:15:20.000Z",
                "reply": "Yes",
                "reason": null,
                "uuid": "4264324e-ea19-453f-813d-17d2c20a8380",
                "is-request": false,
                "role": null,
                "title": "Search Complete"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21044",
            "type": "events",
            "attributes": {
                "name": "s1_sp_release_vehicle_response",
                "message": "Sally Port: Acknowledged. Release Test 4.",
                "created-at": "2017-05-08T12:16:15.000-04:00",
                "reply": "y",
                "reason": null,
                "uuid": "a2afdda3-eb72-46eb-839a-c8bccbab3da9",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "11779",
            "type": "boas",
            "attributes": {
                "name": null,
                "boa": {
                    "delivery.destination": {
                        "name": "warehouse",
                        "locations": [
                            "Sierra 1",
                            "Stinger Gate",
                            "Warehouse",
                            "Exit",
                            "Stinger Gate"
                        ],
                        "display-name": "Warehouse"
                    },
                    "delivery.sleeper-cab": "false",
                    "delivery.cargo": "Packages",
                    "driver.name": "John Cranford",
                    "delivery.sleeper-cab-verification": "Verified",
                    "vehicle.number-of-axles": null,
                    "secondary-poc.phone-verification": "NotVerified",
                    "primary-poc.first-name": "King",
                    "primary-poc.last-name": null,
                    "driver.driver-instructions": {
                        "location": "Stinger Gate",
                        "instructions": [
                            {
                                "step": 1,
                                "text": "Please wait patiently, an officer has been informed of your arrival and they will open the gate for you shortly"
                            }
                        ]
                    },
                    "boa.jockey-truck-verification": "Verified",
                    "primary-poc.phone": "(610) 718-4545",
                    "driver.estimated-wait-time": 0,
                    "boa.license-plate-number-verification": "Alert",
                    "driver.first-name": "John",
                    "driver.last-name": "Cranford",
                    "delivery.deny-entry-reason": null,
                    "delivery.exited-at": null,
                    "delivery.cargo-verification": "Verified",
                    "destination.name": "warehouse",
                    "driver.phone-number": "(610) 718-4545",
                    "delivery.driver-badge-number": null,
                    "vehicle.escort": false,
                    "entry-time": "2017-05-08T11:29:12.537-05:00",
                    "search-owner": null,
                    "delivery.cargo-quantity": null,
                    "driver.email": "john@gmail.com",
                    "driver.hazmat-authorized": true,
                    "delivery.current-workflow": null,
                    "driver.frequent": true,
                    "delivery.eta": "2017-05-08T10:42:41.928-04:00",
                    "site.name": "Limerick",
                    "primary-poc.extension-verification": "Verified",
                    "workflow-status": {
                        "sierra-1": "Arrived"
                    },
                    "vehicle.status": null,
                    "boa.workgroup-verification": "Verified",
                    "boa.random-search": "false",
                    "delivery.escort-badge-number": null,
                    "driver.badge-number": null,
                    "driver.company": null,
                    "delivery.arrive-at-verification": "Verified",
                    "secondary-poc.name-verification": "Alert",
                    "delivery.arrive-at": null,
                    "boa.workgroup": "Whse",
                    "delivery.current-location": {
                        "site-id": 10000,
                        "longitude": 9,
                        "id": 10000,
                        "driver-instructions": [
                            {
                                "step": 1,
                                "text": "Turn off engine; if cannot, chock wheels"
                            },
                            {
                                "step": 2,
                                "text": "Open hood and compartments"
                            },
                            {
                                "step": 3,
                                "text": "Have documentation and driver license ready"
                            }
                        ],
                        "created-at": "2016-07-10T01:00:13.000-04:00",
                        "latitude": 34,
                        "name": "Sierra 1",
                        "updated-at": "2016-07-10T01:00:13.000-04:00"
                    },
                    "vendor.name": "Test 4",
                    "boa.search-completedby-mso": "Murrph",
                    "vehicle.vehicle-type": "common_carrier",
                    "driver.name-verification": "Verified",
                    "driver.password-confirmation": null,
                    "delivery.escort": false,
                    "delivery.escort-verification": "Verified",
                    "primary-poc.phone-verification": "Verified",
                    "boa.jockey-truck": "false",
                    "vehicle.vehicle-type-verification": "Verified",
                    "primary-poc.name-verification": "Verified",
                    "driver.email-verification": "Verified",
                    "delivery.notes": null,
                    "delivery.priority": false,
                    "primary-poc.name": "King ",
                    "driver.phone-number-verification": "Verified",
                    "primary-poc.extension": "4545",
                    "delivery.processing-time": null,
                    "delivery.lane-assignment": "Lane 4",
                    "vendor.name-verification": "Verified",
                    "boa.officer-name-verification": "Alert",
                    "boa.seals-verification": "Verified",
                    "boa.seals": "false",
                    "boa.random-search-verification": "Verified",
                    "driver.password-expires": "2016-11-14T12:53:41.000-05:00",
                    "vehicle.model": null,
                    "driver.confirmed": false,
                    "secondary-poc.extension-verification": "Alert",
                    "vehicle.priority": false
                }
            },
            "relationships": {
                "storable": {
                    "data": {
                        "id": "11204",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "11206",
            "type": "vehicles",
            "attributes": {
                "model": null,
                "escort": false,
                "priority": false,
                "vehicle-type": "common_carrier",
                "status": null,
                "number-of-axles": null
            },
            "relationships": {
                "vendor": {
                    "data": {
                        "id": "10819",
                        "type": "vendors"
                    }
                },
                "images": {
                    "data": []
                }
            }
        },
        {
            "id": "10819",
            "type": "vendors",
            "attributes": {
                "name": "Test 3"
            }
        },
        {
            "id": "14048",
            "type": "workflows",
            "attributes": {
                "step": 1,
                "processing-time": 30,
                "started-at": "2017-05-08T11:30:21.000-04:00",
                "ended-at": "2017-05-08T11:46:14.000-04:00",
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": "2017-05-08T11:32:02.000-04:00",
                "search-end": "2017-05-08T11:33:17.000-04:00",
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10000",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "14049",
            "type": "workflows",
            "attributes": {
                "step": 2,
                "processing-time": null,
                "started-at": "2017-05-08T11:46:14.000-04:00",
                "ended-at": "2017-05-08T12:05:00.000-04:00",
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10001",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "14050",
            "type": "workflows",
            "attributes": {
                "step": 3,
                "processing-time": 90,
                "started-at": "2017-05-08T12:05:00.000-04:00",
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10022",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "14051",
            "type": "workflows",
            "attributes": {
                "step": 4,
                "processing-time": 15,
                "started-at": null,
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10021",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "14052",
            "type": "workflows",
            "attributes": {
                "step": 5,
                "processing-time": null,
                "started-at": null,
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10001",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "11369",
            "type": "pocs",
            "attributes": {
                "first-name": "Cranford",
                "last-name": null,
                "phone": "(610) 718-4545",
                "extension": "4545",
                "name": "Cranford "
            },
            "relationships": {
                "site": {
                    "data": {
                        "id": "10000",
                        "type": "sites"
                    }
                }
            }
        },
        {
            "id": "20982",
            "type": "events",
            "attributes": {
                "name": "s1_poc_arrived",
                "message": "Test 3 vehicle has arrived at Sierra 1, please acknowledge. Text ???Y??? if you are ready to receive your delivery or text ???N??? if you are not ready to receive it. If you have a stand-in who can recieve it, text 'S'.",
                "created-at": "2017-05-08T11:30:21.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "06d13645-61c9-4712-9acc-e6a23720b188",
                "is-request": true,
                "role": null,
                "title": "Sierra 1 Arrival"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20983",
            "type": "events",
            "attributes": {
                "name": "s1_sas_arrived",
                "message": "Test 3 vehicle has arrived at Sierra 1.",
                "created-at": "2017-05-08T11:30:21.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "b0aeb1d6-0f40-4d63-ad44-c7ab0f75584e",
                "is-request": true,
                "role": null,
                "title": "Sierra 1 Arrival"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20984",
            "type": "events",
            "attributes": {
                "name": "s1_d10_cover",
                "message": "Sierra 1 is going to engage in search of Test 3, do you have their cover?",
                "created-at": "2017-05-08T15:32:02.000Z",
                "reply": null,
                "reason": null,
                "uuid": "a35f0399-2ab2-4838-9db9-40d53af706e8",
                "is-request": true,
                "role": null,
                "title": "Overwatch Request"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20985",
            "type": "events",
            "attributes": {
                "name": "s1_d10_cover_response",
                "message": "D10: Acknowledged. I'll cover you.",
                "created-at": "2017-05-08T11:32:26.000-04:00",
                "reply": "y",
                "reason": null,
                "uuid": "a35f0399-2ab2-4838-9db9-40d53af706e8",
                "is-request": false,
                "role": null,
                "title": "Overwatch Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20988",
            "type": "events",
            "attributes": {
                "name": "s1_search_completed",
                "message": "Search of Test 3 was completed successfully.",
                "created-at": "2017-05-08T11:33:18.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "3c570075-5e15-4994-b898-7702807fc439",
                "is-request": true,
                "role": null,
                "title": "Search Complete"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20990",
            "type": "events",
            "attributes": {
                "name": "s1_sp_release_vehicle",
                "message": "Sierra 1 is ready to release the Test 3 truck. Please Acknowledge.",
                "created-at": "2017-05-08T15:33:35.000Z",
                "reply": null,
                "reason": null,
                "uuid": "343c70a5-019d-4a66-abbd-d1bcab470bd3",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20993",
            "type": "events",
            "attributes": {
                "name": "s1_d1_release_vehicle",
                "message": "Sierra 1 is ready to release the Test 3 truck. Please Acknowledge.",
                "created-at": "2017-05-08T15:33:35.000Z",
                "reply": null,
                "reason": null,
                "uuid": "74d273a1-0904-45f5-b300-0e4a3c274375",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20994",
            "type": "events",
            "attributes": {
                "name": "s1_vvro_release_vehicle",
                "message": "Sierra 1 is ready to release the Test 3 truck. Please Acknowledge.",
                "created-at": "2017-05-08T15:33:35.000Z",
                "reply": null,
                "reason": null,
                "uuid": "05e09f87-664a-4e44-966f-2fefadf30e2c",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20995",
            "type": "events",
            "attributes": {
                "name": "s1_sas_release_vehicle_response",
                "message": "SAS: Acknowledged. Release Test 3.",
                "created-at": "2017-05-08T11:42:13.000-04:00",
                "reply": "y",
                "reason": null,
                "uuid": "417ca1a2-11d7-4d71-b54c-2ed2e1e4ad89",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20997",
            "type": "events",
            "attributes": {
                "name": "s1_poc_release_vehicle_response",
                "message": "POC: Acknowledged. Release Test 3.",
                "created-at": "2017-05-08T15:42:17.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "cdbf55c6-0ee5-42c0-824f-3f2d24f9e778",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21000",
            "type": "events",
            "attributes": {
                "name": "s1_vvro_release_vehicle_response",
                "message": "VVRO: Acknowledged. Release Test 3.",
                "created-at": "2017-05-08T11:42:22.000-04:00",
                "reply": "y",
                "reason": null,
                "uuid": "05e09f87-664a-4e44-966f-2fefadf30e2c",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21002",
            "type": "events",
            "attributes": {
                "name": "s1_sas_release_vehicle_response",
                "message": "SAS: Acknowledged. Release Test 3.",
                "created-at": "2017-05-08T15:48:38.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "417ca1a2-11d7-4d71-b54c-2ed2e1e4ad89",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21003",
            "type": "events",
            "attributes": {
                "name": "s1_sp_release_vehicle_response",
                "message": "Sally Port: Acknowledged. Release Test 3.",
                "created-at": "2017-05-08T15:48:40.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "343c70a5-019d-4a66-abbd-d1bcab470bd3",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21008",
            "type": "events",
            "attributes": {
                "name": "vvro_release_confirmed",
                "message": "Stinger Gate released Test 3 to Sally Port.",
                "created-at": "2017-05-08T12:05:01.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "743e05c3-d85e-4cc9-828e-f5be74ec11bf",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20986",
            "type": "events",
            "attributes": {
                "name": "s1_d10_stop_cover",
                "message": "Sierra 1 has completed the search of Test 3, do you acknowledge?",
                "created-at": "2017-05-08T15:33:12.000Z",
                "reply": null,
                "reason": null,
                "uuid": "1e4e1d53-bbdb-4c7d-a6e3-ff3c950c760a",
                "is-request": true,
                "role": null,
                "title": "Overwatch Request"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20987",
            "type": "events",
            "attributes": {
                "name": "s1_d10_stop_cover_response",
                "message": "D10: Acknowledged. I'm finshed covering you.",
                "created-at": "2017-05-08T15:33:17.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "1e4e1d53-bbdb-4c7d-a6e3-ff3c950c760a",
                "is-request": false,
                "role": null,
                "title": "Search Complete"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20991",
            "type": "events",
            "attributes": {
                "name": "s1_poc_release_vehicle",
                "message": "Sierra 1 is ready to release the Test 3 vehicle. Text 'Y' to acknowledge",
                "created-at": "2017-05-08T15:33:35.000Z",
                "reply": null,
                "reason": null,
                "uuid": "cdbf55c6-0ee5-42c0-824f-3f2d24f9e778",
                "is-request": true,
                "role": null,
                "title": "POC Delivery Release"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20992",
            "type": "events",
            "attributes": {
                "name": "s1_d10_release_vehicle",
                "message": "Sierra 1 is ready to release the Test 3 truck. Please Acknowledge.",
                "created-at": "2017-05-08T15:33:35.000Z",
                "reply": null,
                "reason": null,
                "uuid": "16aeb34f-e5f4-44d1-92fe-41750ef2e222",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20999",
            "type": "events",
            "attributes": {
                "name": "s1_d1_release_vehicle_response",
                "message": "D1: Acknowledged. Release Test 3.",
                "created-at": "2017-05-08T15:42:20.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "74d273a1-0904-45f5-b300-0e4a3c274375",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21001",
            "type": "events",
            "attributes": {
                "name": "s1_release_confirmed",
                "message": "Sierra 1 released Test 3 to Stinger Gate.",
                "created-at": "2017-05-08T11:46:14.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "327a390d-70ed-4dd5-8f43-6708cedf98cd",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21004",
            "type": "events",
            "attributes": {
                "name": "s1_poc_release_vehicle_response",
                "message": "POC: Acknowledged. Release Test 3.",
                "created-at": "2017-05-08T11:48:43.000-04:00",
                "reply": "y",
                "reason": null,
                "uuid": "cdbf55c6-0ee5-42c0-824f-3f2d24f9e778",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20989",
            "type": "events",
            "attributes": {
                "name": "s1_sas_release_vehicle",
                "message": "Sierra 1 is ready to release the Test 3 truck. Please Acknowledge.",
                "created-at": "2017-05-08T15:33:35.000Z",
                "reply": null,
                "reason": null,
                "uuid": "417ca1a2-11d7-4d71-b54c-2ed2e1e4ad89",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20996",
            "type": "events",
            "attributes": {
                "name": "s1_sp_release_vehicle_response",
                "message": "Sally Port: Acknowledged. Release Test 3.",
                "created-at": "2017-05-08T15:42:15.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "343c70a5-019d-4a66-abbd-d1bcab470bd3",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20998",
            "type": "events",
            "attributes": {
                "name": "s1_d10_release_vehicle_response",
                "message": "D10: Acknowledged. Release Test 3.",
                "created-at": "2017-05-08T15:42:18.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "16aeb34f-e5f4-44d1-92fe-41750ef2e222",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "11778",
            "type": "boas",
            "attributes": {
                "name": null,
                "boa": {
                    "delivery.destination": {
                        "name": "warehouse",
                        "locations": [
                            "Sierra 1",
                            "Stinger Gate",
                            "Warehouse",
                            "Exit",
                            "Stinger Gate"
                        ],
                        "display-name": "Warehouse"
                    },
                    "delivery.sleeper-cab": "false",
                    "delivery.cargo": "Packages",
                    "driver.name": "John Cranford",
                    "delivery.sleeper-cab-verification": "Verified",
                    "vehicle.number-of-axles": null,
                    "secondary-poc.phone-verification": "NotVerified",
                    "primary-poc.first-name": "Cranford",
                    "primary-poc.last-name": null,
                    "driver.driver-instructions": {
                        "location": "Stinger Gate",
                        "instructions": [
                            {
                                "step": 1,
                                "text": "Please wait patiently, an officer has been informed of your arrival and they will open the gate for you shortly"
                            }
                        ]
                    },
                    "boa.jockey-truck-verification": "Verified",
                    "primary-poc.phone": "(610) 718-4545",
                    "driver.estimated-wait-time": 0,
                    "boa.license-plate-number-verification": "Verified",
                    "driver.first-name": "John",
                    "driver.last-name": "Cranford",
                    "delivery.deny-entry-reason": null,
                    "delivery.exited-at": null,
                    "delivery.cargo-verification": "Verified",
                    "destination.name": "warehouse",
                    "driver.phone-number": "(610) 718-4545",
                    "delivery.driver-badge-number": null,
                    "vehicle.escort": false,
                    "search-owner": null,
                    "delivery.cargo-quantity": null,
                    "driver.email": "john@gmail.com",
                    "driver.hazmat-authorized": true,
                    "boa.license-plate-number": "PA4747",
                    "delivery.current-workflow": null,
                    "driver.frequent": true,
                    "delivery.eta": "2017-05-08T10:41:24.360-04:00",
                    "site.name": "Limerick",
                    "boa.officer-name": "Murphy",
                    "primary-poc.extension-verification": "Verified",
                    "workflow-status": {
                        "sierra-1": "Released"
                    },
                    "vehicle.status": null,
                    "boa.workgroup-verification": "Verified",
                    "boa.random-search": "false",
                    "delivery.escort-badge-number": null,
                    "driver.badge-number": null,
                    "driver.company": null,
                    "delivery.arrive-at-verification": "Verified",
                    "secondary-poc.name-verification": "Alert",
                    "delivery.arrive-at": null,
                    "boa.workgroup": "Whse",
                    "delivery.current-location": {
                        "site-id": 10000,
                        "longitude": 9,
                        "id": 10000,
                        "driver-instructions": [
                            {
                                "step": 1,
                                "text": "Turn off engine; if cannot, chock wheels"
                            },
                            {
                                "step": 2,
                                "text": "Open hood and compartments"
                            },
                            {
                                "step": 3,
                                "text": "Have documentation and driver license ready"
                            }
                        ],
                        "created-at": "2016-07-10T01:00:13.000-04:00",
                        "latitude": 34,
                        "name": "Sierra 1",
                        "updated-at": "2016-07-10T01:00:13.000-04:00"
                    },
                    "vendor.name": "Test 3",
                    "boa.search-completedby-mso": "Murphy",
                    "vehicle.vehicle-type": "common_carrier",
                    "driver.name-verification": "Verified",
                    "driver.password-confirmation": null,
                    "delivery.escort": false,
                    "delivery.escort-verification": "Alert",
                    "primary-poc.phone-verification": "Verified",
                    "boa.jockey-truck": "false",
                    "vehicle.vehicle-type-verification": "Verified",
                    "primary-poc.name-verification": "Verified",
                    "driver.email-verification": "Verified",
                    "delivery.notes": null,
                    "delivery.priority": false,
                    "primary-poc.name": "Cranford ",
                    "driver.phone-number-verification": "Verified",
                    "primary-poc.extension": "4545",
                    "delivery.processing-time": null,
                    "delivery.lane-assignment": "Lane 3",
                    "vendor.name-verification": "Verified",
                    "boa.officer-name-verification": "Verified",
                    "boa.seals-verification": "Verified",
                    "boa.seals": "false",
                    "boa.random-search-verification": "Verified",
                    "driver.password-expires": "2016-11-14T12:53:41.000-05:00",
                    "vehicle.model": null,
                    "driver.confirmed": false,
                    "secondary-poc.extension-verification": "Alert",
                    "vehicle.priority": false
                }
            },
            "relationships": {
                "storable": {
                    "data": {
                        "id": "11203",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "11203",
            "type": "vehicles",
            "attributes": {
                "model": null,
                "escort": null,
                "priority": null,
                "vehicle-type": "common_carrier",
                "status": "enroute",
                "number-of-axles": null
            },
            "relationships": {
                "vendor": {
                    "data": {
                        "id": "10441",
                        "type": "vendors"
                    }
                },
                "images": {
                    "data": []
                }
            }
        },
        {
            "id": "10441",
            "type": "vendors",
            "attributes": {
                "name": "Water Guy"
            }
        },
        {
            "id": "14033",
            "type": "workflows",
            "attributes": {
                "step": 1,
                "processing-time": null,
                "started-at": "2017-05-08T07:16:57.000-04:00",
                "ended-at": "2017-05-08T07:24:39.000-04:00",
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": "2017-05-08T07:19:32.000-04:00",
                "search-end": "2017-05-08T07:23:24.000-04:00",
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10000",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "14034",
            "type": "workflows",
            "attributes": {
                "step": 2,
                "processing-time": null,
                "started-at": "2017-05-08T07:24:39.000-04:00",
                "ended-at": "2017-05-08T10:00:48.000-04:00",
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10001",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "14035",
            "type": "workflows",
            "attributes": {
                "step": 3,
                "processing-time": null,
                "started-at": "2017-05-08T10:00:48.000-04:00",
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10022",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "14036",
            "type": "workflows",
            "attributes": {
                "step": 4,
                "processing-time": null,
                "started-at": null,
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10021",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "14037",
            "type": "workflows",
            "attributes": {
                "step": 5,
                "processing-time": null,
                "started-at": null,
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10001",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "10181",
            "type": "drivers",
            "attributes": {
                "first-name": "Patrick",
                "last-name": "Smith",
                "company": null,
                "hazmat-authorized": true,
                "frequent": true,
                "email": "n/a",
                "badge-number": null,
                "password-expires": "2017-04-14T02:40:37.000-04:00",
                "password-confirmation": "5913d6",
                "confirmed": false,
                "estimated-wait-time": 0,
                "driver-instructions": {
                    "location": null,
                    "instructions": null
                },
                "phone-number": null,
                "name": "Patrick Smith"
            },
            "relationships": {
                "driver-vehicle-detail": {
                    "data": null
                },
                "driver-workorder-detail": {
                    "data": null
                },
                "images": {
                    "data": []
                }
            }
        },
        {
            "id": "11034",
            "type": "pocs",
            "attributes": {
                "first-name": "Bennett",
                "last-name": null,
                "phone": null,
                "extension": "3655",
                "name": "Bennett "
            },
            "relationships": {
                "site": {
                    "data": {
                        "id": "10000",
                        "type": "sites"
                    }
                }
            }
        },
        {
            "id": "11367",
            "type": "pocs",
            "attributes": {
                "first-name": null,
                "last-name": null,
                "phone": null,
                "extension": null,
                "name": " "
            },
            "relationships": {
                "site": {
                    "data": {
                        "id": "10000",
                        "type": "sites"
                    }
                }
            }
        },
        {
            "id": "20918",
            "type": "events",
            "attributes": {
                "name": "s1_poc_arrived",
                "message": "Water Guy vehicle has arrived at Sierra 1, please acknowledge. Text ???Y??? if you are ready to receive your delivery or text ???N??? if you are not ready to receive it. If you have a stand-in who can recieve it, text 'S'.",
                "created-at": "2017-05-08T07:16:58.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "7c5d35ec-3e7e-45df-8741-e10f495298b2",
                "is-request": true,
                "role": null,
                "title": "Sierra 1 Arrival"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20920",
            "type": "events",
            "attributes": {
                "name": "s1_d10_cover",
                "message": "Sierra 1 is going to engage in search of Water Guy, do you have their cover?",
                "created-at": "2017-05-08T11:19:31.000Z",
                "reply": null,
                "reason": null,
                "uuid": "a3827746-6bf9-474a-b244-2c89641b1142",
                "is-request": true,
                "role": null,
                "title": "Overwatch Request"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20922",
            "type": "events",
            "attributes": {
                "name": "s1_d10_stop_cover",
                "message": "Sierra 1 has completed the search of Water Guy, do you acknowledge?",
                "created-at": "2017-05-08T11:23:21.000Z",
                "reply": null,
                "reason": null,
                "uuid": "1907c692-f934-4f4c-9b03-eeb11790ca70",
                "is-request": true,
                "role": null,
                "title": "Overwatch Request"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20928",
            "type": "events",
            "attributes": {
                "name": "s1_poc_release_vehicle",
                "message": "Sierra 1 is ready to release the Water Guy vehicle. Text 'Y' to acknowledge",
                "created-at": "2017-05-08T07:23:39.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "0146c45b-ef0f-4e4e-a0e7-f6fed9104463",
                "is-request": true,
                "role": null,
                "title": "POC Delivery Release"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20930",
            "type": "events",
            "attributes": {
                "name": "s1_vvro_release_vehicle",
                "message": "Sierra 1 is ready to release the Water Guy truck. Please Acknowledge.",
                "created-at": "2017-05-08T07:23:39.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "3bde086e-e373-4004-a765-1846909c821b",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20931",
            "type": "events",
            "attributes": {
                "name": "s1_sas_release_vehicle_response",
                "message": "SAS: Acknowledged. Release Water Guy.",
                "created-at": "2017-05-08T11:23:58.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "86686a12-affe-499a-b618-35641b394545",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20934",
            "type": "events",
            "attributes": {
                "name": "s1_d10_release_vehicle_response",
                "message": "D10: Acknowledged. Release Water Guy.",
                "created-at": "2017-05-08T11:24:08.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "c4445235-ab5d-4639-9baf-a12dce1e0441",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20937",
            "type": "events",
            "attributes": {
                "name": "s1_release_confirmed",
                "message": "Sierra 1 released Water Guy to Stinger Gate.",
                "created-at": "2017-05-08T07:24:39.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "9811b066-4c17-4d19-b2b8-25415f2bd96f",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20960",
            "type": "events",
            "attributes": {
                "name": "vvro_driver_approaching_sg",
                "message": "The VVRO is coming to let you through the Stinger Gate.",
                "created-at": "2017-05-08T10:00:08.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "2179c5c3-7c8a-417b-9bc0-85197071caa9",
                "is-request": true,
                "role": null,
                "title": null
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20919",
            "type": "events",
            "attributes": {
                "name": "s1_sas_arrived",
                "message": "Water Guy vehicle has arrived at Sierra 1.",
                "created-at": "2017-05-08T07:16:58.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "4863df5f-bf7b-472f-bda3-2c9c655107e1",
                "is-request": true,
                "role": null,
                "title": "Sierra 1 Arrival"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20921",
            "type": "events",
            "attributes": {
                "name": "s1_d10_cover_response",
                "message": "D10: Acknowledged. I'll cover you.",
                "created-at": "2017-05-08T07:19:34.000-04:00",
                "reply": "y",
                "reason": null,
                "uuid": "a3827746-6bf9-474a-b244-2c89641b1142",
                "is-request": false,
                "role": null,
                "title": "Overwatch Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20924",
            "type": "events",
            "attributes": {
                "name": "s1_search_completed",
                "message": "Search of Water Guy was completed successfully.",
                "created-at": "2017-05-08T07:23:26.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "e2c9e9a3-2c28-4ff7-9fdc-1886ed872456",
                "is-request": true,
                "role": null,
                "title": "Search Complete"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20925",
            "type": "events",
            "attributes": {
                "name": "s1_sas_release_vehicle",
                "message": "Sierra 1 is ready to release the Water Guy truck. Please Acknowledge.",
                "created-at": "2017-05-08T07:23:39.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "86686a12-affe-499a-b618-35641b394545",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20932",
            "type": "events",
            "attributes": {
                "name": "s1_sp_release_vehicle_response",
                "message": "Sally Port: Acknowledged. Release Water Guy.",
                "created-at": "2017-05-08T11:24:07.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "b07e6a24-d053-448a-8f47-b285e83714fc",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20933",
            "type": "events",
            "attributes": {
                "name": "s1_poc_release_vehicle_response",
                "message": "POC: Acknowledged. Release Water Guy.",
                "created-at": "2017-05-08T11:24:07.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "0146c45b-ef0f-4e4e-a0e7-f6fed9104463",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20936",
            "type": "events",
            "attributes": {
                "name": "s1_vvro_release_vehicle_response",
                "message": "VVRO: Acknowledged. Release Water Guy.",
                "created-at": "2017-05-08T07:24:15.000-04:00",
                "reply": "y",
                "reason": null,
                "uuid": "3bde086e-e373-4004-a765-1846909c821b",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20923",
            "type": "events",
            "attributes": {
                "name": "s1_d10_stop_cover_response",
                "message": "D10: Acknowledged. I'm finshed covering you.",
                "created-at": "2017-05-08T11:23:24.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "1907c692-f934-4f4c-9b03-eeb11790ca70",
                "is-request": false,
                "role": null,
                "title": "Search Complete"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20926",
            "type": "events",
            "attributes": {
                "name": "s1_sp_release_vehicle",
                "message": "Sierra 1 is ready to release the Water Guy truck. Please Acknowledge.",
                "created-at": "2017-05-08T07:23:39.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "b07e6a24-d053-448a-8f47-b285e83714fc",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20927",
            "type": "events",
            "attributes": {
                "name": "s1_d10_release_vehicle",
                "message": "Sierra 1 is ready to release the Water Guy truck. Please Acknowledge.",
                "created-at": "2017-05-08T07:23:39.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "c4445235-ab5d-4639-9baf-a12dce1e0441",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20929",
            "type": "events",
            "attributes": {
                "name": "s1_d1_release_vehicle",
                "message": "Sierra 1 is ready to release the Water Guy truck. Please Acknowledge.",
                "created-at": "2017-05-08T07:23:39.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "ae81cf2b-ea1c-4b80-aedb-8a97fd51e28b",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20935",
            "type": "events",
            "attributes": {
                "name": "s1_d1_release_vehicle_response",
                "message": "D1: Acknowledged. Release Water Guy.",
                "created-at": "2017-05-08T11:24:14.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "ae81cf2b-ea1c-4b80-aedb-8a97fd51e28b",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "20961",
            "type": "events",
            "attributes": {
                "name": "vvro_release_confirmed",
                "message": "Stinger Gate released Water Guy to Sally Port.",
                "created-at": "2017-05-08T10:00:48.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "7afadfa7-16b0-4d32-b67e-b4548edcdaa4",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "11773",
            "type": "boas",
            "attributes": {
                "name": null,
                "boa": {
                    "delivery.sleeper-cab": "false",
                    "delivery.cargo": "Water",
                    "driver.name": "Bobby Wyatt",
                    "delivery.sleeper-cab-verification": "Verified",
                    "vehicle.number-of-axles": null,
                    "secondary-poc.phone-verification": "NotVerified",
                    "primary-poc.first-name": "Bennett",
                    "primary-poc.last-name": null,
                    "secondary-poc.phone": null,
                    "driver.driver-instructions": {
                        "location": null,
                        "instructions": null
                    },
                    "boa.jockey-truck-verification": "Verified",
                    "primary-poc.phone": null,
                    "driver.estimated-wait-time": 0,
                    "boa.license-plate-number-verification": "Verified",
                    "driver.first-name": "Bobby",
                    "driver.last-name": "Wyatt",
                    "delivery.cargo-verification": "Verified",
                    "driver.phone-number": null,
                    "secondary-poc.last-name": null,
                    "vehicle.escort": null,
                    "entry-time": "2017-05-08T07:24:38.862-04:00",
                    "search-owner": null,
                    "driver.email": "n/a",
                    "driver.hazmat-authorized": true,
                    "boa.license-plate-number": "Zhb 7355. Pa",
                    "secondary-poc.first-name": null,
                    "driver.frequent": true,
                    "site.name": "Limerick",
                    "boa.officer-name": "Guinther",
                    "primary-poc.extension-verification": "Verified",
                    "workflow-status": {
                        "vvro": "Arrived",
                        "sierra-1": "Arrived"
                    },
                    "vehicle.status": "enroute",
                    "boa.workgroup-verification": "Verified",
                    "boa.random-search": "false",
                    "driver.badge-number": null,
                    "driver.company": null,
                    "delivery.arrive-at-verification": "Verified",
                    "secondary-poc.name-verification": "Alert",
                    "boa.workgroup": "Whse",
                    "secondary-poc.extension": null,
                    "vendor.name": "Water Guy",
                    "boa.search-completedby-mso": "Guinther",
                    "vehicle.vehicle-type": "common_carrier",
                    "driver.name-verification": "Verified",
                    "driver.password-confirmation": "5913d6",
                    "delivery.escort": "false",
                    "delivery.escort-verification": "Verified",
                    "primary-poc.phone-verification": "NotVerified",
                    "boa.jockey-truck": "false",
                    "vehicle.vehicle-type-verification": "Verified",
                    "primary-poc.name-verification": "Verified",
                    "driver.email-verification": "Verified",
                    "driver.phone-number-verification": "Alert",
                    "primary-poc.name": "Bennett ",
                    "primary-poc.extension": "3655",
                    "delivery.lane-assignment": "Lane 2",
                    "vendor.name-verification": "Verified",
                    "boa.officer-name-verification": "Verified",
                    "boa.seals-verification": "Verified",
                    "boa.seals": "false",
                    "secondary-poc.name": " ",
                    "boa.random-search-verification": "Verified",
                    "driver.password-expires": "2017-04-14T02:40:37.000-04:00",
                    "vehicle.model": null,
                    "driver.confirmed": false,
                    "secondary-poc.extension-verification": "Alert",
                    "vehicle.priority": null
                }
            },
            "relationships": {
                "storable": {
                    "data": {
                        "id": "11200",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "11213",
            "type": "vehicles",
            "attributes": {
                "model": null,
                "escort": false,
                "priority": false,
                "vehicle-type": "passenger_imp",
                "status": null,
                "number-of-axles": null
            },
            "relationships": {
                "vendor": {
                    "data": {
                        "id": "10812",
                        "type": "vendors"
                    }
                },
                "images": {
                    "data": []
                }
            }
        },
        {
            "id": "10812",
            "type": "vendors",
            "attributes": {
                "name": "Test 9"
            }
        },
        {
            "id": "14077",
            "type": "workflows",
            "attributes": {
                "step": 1,
                "processing-time": 15,
                "started-at": null,
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10000",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11210",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "14078",
            "type": "workflows",
            "attributes": {
                "step": 2,
                "processing-time": 15,
                "started-at": null,
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10021",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11210",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "10641",
            "type": "pocs",
            "attributes": {
                "first-name": "John",
                "last-name": "Cranford",
                "phone": "(610) 718-4545",
                "extension": "4545",
                "name": "John Cranford"
            },
            "relationships": {
                "site": {
                    "data": {
                        "id": "10000",
                        "type": "sites"
                    }
                }
            }
        },
        {
            "id": "11787",
            "type": "boas",
            "attributes": {
                "name": null,
                "boa": {
                    "destination.name": "oca"
                }
            },
            "relationships": {
                "storable": {
                    "data": {
                        "id": "11210",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "11209",
            "type": "vehicles",
            "attributes": {
                "model": null,
                "escort": null,
                "priority": null,
                "vehicle-type": "common_carrier",
                "status": "enroute",
                "number-of-axles": null
            },
            "relationships": {
                "vendor": {
                    "data": {
                        "id": "10429",
                        "type": "vendors"
                    }
                },
                "images": {
                    "data": []
                }
            }
        },
        {
            "id": "10429",
            "type": "vendors",
            "attributes": {
                "name": "Ups"
            }
        },
        {
            "id": "14063",
            "type": "workflows",
            "attributes": {
                "step": 1,
                "processing-time": null,
                "started-at": "2017-05-08T12:10:24.000-04:00",
                "ended-at": "2017-05-08T12:16:03.000-04:00",
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": "2017-05-08T12:11:44.000-04:00",
                "search-end": "2017-05-08T12:14:33.000-04:00",
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10000",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "14064",
            "type": "workflows",
            "attributes": {
                "step": 2,
                "processing-time": null,
                "started-at": "2017-05-08T12:16:03.000-04:00",
                "ended-at": "2017-05-08T12:22:13.000-04:00",
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10001",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "14065",
            "type": "workflows",
            "attributes": {
                "step": 3,
                "processing-time": null,
                "started-at": "2017-05-08T12:22:13.000-04:00",
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10022",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "14066",
            "type": "workflows",
            "attributes": {
                "step": 4,
                "processing-time": null,
                "started-at": null,
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10021",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "14067",
            "type": "workflows",
            "attributes": {
                "step": 5,
                "processing-time": null,
                "started-at": null,
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10001",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "11371",
            "type": "pocs",
            "attributes": {
                "first-name": null,
                "last-name": null,
                "phone": null,
                "extension": null,
                "name": " "
            },
            "relationships": {
                "site": {
                    "data": {
                        "id": "10000",
                        "type": "sites"
                    }
                }
            }
        },
        {
            "id": "21009",
            "type": "events",
            "attributes": {
                "name": "s1_poc_arrived",
                "message": "Ups vehicle has arrived at Sierra 1, please acknowledge. Text ???Y??? if you are ready to receive your delivery or text ???N??? if you are not ready to receive it. If you have a stand-in who can recieve it, text 'S'.",
                "created-at": "2017-05-08T12:10:24.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "a418129a-4eeb-448f-b5f6-ddef95e87b75",
                "is-request": true,
                "role": null,
                "title": "Sierra 1 Arrival"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21012",
            "type": "events",
            "attributes": {
                "name": "s1_d10_cover_response",
                "message": "D10: Acknowledged. I'll cover you.",
                "created-at": "2017-05-08T12:11:46.000-04:00",
                "reply": "y",
                "reason": null,
                "uuid": "6dae7bbb-0198-427c-b328-9fedc9a2c5e2",
                "is-request": false,
                "role": null,
                "title": "Overwatch Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21024",
            "type": "events",
            "attributes": {
                "name": "s1_d10_stop_cover",
                "message": "Sierra 1 has completed the search of Ups, do you acknowledge?",
                "created-at": "2017-05-08T16:14:31.000Z",
                "reply": null,
                "reason": null,
                "uuid": "2b902fae-463e-4ffb-9264-1b9c8b2c896d",
                "is-request": true,
                "role": null,
                "title": "Overwatch Request"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21026",
            "type": "events",
            "attributes": {
                "name": "s1_search_completed",
                "message": "Search of Ups was completed successfully.",
                "created-at": "2017-05-08T12:14:34.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "05d7c8e9-c5e2-4ee5-a5d6-5f87f722b554",
                "is-request": true,
                "role": null,
                "title": "Search Complete"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21028",
            "type": "events",
            "attributes": {
                "name": "s1_sp_release_vehicle",
                "message": "Sierra 1 is ready to release the Ups truck. Please Acknowledge.",
                "created-at": "2017-05-08T12:14:51.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "9b14db03-e8b3-48f1-bc9c-60f1c8f4e979",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21029",
            "type": "events",
            "attributes": {
                "name": "s1_d10_release_vehicle",
                "message": "Sierra 1 is ready to release the Ups truck. Please Acknowledge.",
                "created-at": "2017-05-08T12:14:51.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "ceab5ce3-9e08-461a-a79a-1b414e76bd56",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21032",
            "type": "events",
            "attributes": {
                "name": "s1_vvro_release_vehicle",
                "message": "Sierra 1 is ready to release the Ups truck. Please Acknowledge.",
                "created-at": "2017-05-08T12:14:52.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "e0e736ce-afe0-4bf1-90e5-2dcd16191aad",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21033",
            "type": "events",
            "attributes": {
                "name": "s1_sas_release_vehicle_response",
                "message": "SAS: Acknowledged. Release Ups.",
                "created-at": "2017-05-08T16:15:08.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "d6befe77-c300-4795-bf0a-379395353fbf",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21035",
            "type": "events",
            "attributes": {
                "name": "s1_poc_release_vehicle_response",
                "message": "POC: Acknowledged. Release Ups.",
                "created-at": "2017-05-08T16:15:11.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "f89958c4-cf97-4816-84bd-6d9c44bb2641",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21037",
            "type": "events",
            "attributes": {
                "name": "s1_d1_release_vehicle_response",
                "message": "D1: Acknowledged. Release Ups.",
                "created-at": "2017-05-08T16:15:15.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "202489f3-4d04-49fb-89d2-b24889b0cc17",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21038",
            "type": "events",
            "attributes": {
                "name": "s1_vvro_release_vehicle_response",
                "message": "VVRO: Acknowledged. Release Ups.",
                "created-at": "2017-05-08T16:15:17.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "e0e736ce-afe0-4bf1-90e5-2dcd16191aad",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21042",
            "type": "events",
            "attributes": {
                "name": "s1_release_confirmed",
                "message": "Sierra 1 released Ups to Stinger Gate.",
                "created-at": "2017-05-08T16:16:04.000Z",
                "reply": null,
                "reason": null,
                "uuid": "dcfca873-b3e3-4cd1-829b-76f5225d0c5f",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21047",
            "type": "events",
            "attributes": {
                "name": "vvro_driver_approaching_sg",
                "message": "The VVRO is coming to let you through the Stinger Gate.",
                "created-at": "2017-05-08T12:19:35.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "3f41fc0a-75cd-4876-94af-4c1ae913331f",
                "is-request": true,
                "role": null,
                "title": null
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21066",
            "type": "events",
            "attributes": {
                "name": "s1_vvro_release_vehicle_response",
                "message": "VVRO: Acknowledged. Release Ups.",
                "created-at": "2017-05-08T12:52:13.000-04:00",
                "reply": "Yes",
                "reason": null,
                "uuid": "e0e736ce-afe0-4bf1-90e5-2dcd16191aad",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21010",
            "type": "events",
            "attributes": {
                "name": "s1_sas_arrived",
                "message": "Ups vehicle has arrived at Sierra 1.",
                "created-at": "2017-05-08T12:10:25.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "52cbc2ab-6254-47d9-9727-981cb4b0e33f",
                "is-request": true,
                "role": null,
                "title": "Sierra 1 Arrival"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21036",
            "type": "events",
            "attributes": {
                "name": "s1_d10_release_vehicle_response",
                "message": "D10: Acknowledged. Release Ups.",
                "created-at": "2017-05-08T16:15:13.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "ceab5ce3-9e08-461a-a79a-1b414e76bd56",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21031",
            "type": "events",
            "attributes": {
                "name": "s1_d1_release_vehicle",
                "message": "Sierra 1 is ready to release the Ups truck. Please Acknowledge.",
                "created-at": "2017-05-08T12:14:52.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "202489f3-4d04-49fb-89d2-b24889b0cc17",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21048",
            "type": "events",
            "attributes": {
                "name": "vvro_release_confirmed",
                "message": "Stinger Gate released Ups to Sally Port.",
                "created-at": "2017-05-08T12:22:14.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "3a2bca39-133b-46fd-a9c3-5df4f5a6615d",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21011",
            "type": "events",
            "attributes": {
                "name": "s1_d10_cover",
                "message": "Sierra 1 is going to engage in search of Ups, do you have their cover?",
                "created-at": "2017-05-08T16:11:44.000Z",
                "reply": null,
                "reason": null,
                "uuid": "6dae7bbb-0198-427c-b328-9fedc9a2c5e2",
                "is-request": true,
                "role": null,
                "title": "Overwatch Request"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21025",
            "type": "events",
            "attributes": {
                "name": "s1_d10_stop_cover_response",
                "message": "D10: Acknowledged. I'm finshed covering you.",
                "created-at": "2017-05-08T16:14:33.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "2b902fae-463e-4ffb-9264-1b9c8b2c896d",
                "is-request": false,
                "role": null,
                "title": "Search Complete"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21027",
            "type": "events",
            "attributes": {
                "name": "s1_sas_release_vehicle",
                "message": "Sierra 1 is ready to release the Ups truck. Please Acknowledge.",
                "created-at": "2017-05-08T12:14:51.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "d6befe77-c300-4795-bf0a-379395353fbf",
                "is-request": true,
                "role": null,
                "title": "Release Vehicle Clearance"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21030",
            "type": "events",
            "attributes": {
                "name": "s1_poc_release_vehicle",
                "message": "Sierra 1 is ready to release the Ups vehicle. Text 'Y' to acknowledge",
                "created-at": "2017-05-08T12:14:51.000-04:00",
                "reply": null,
                "reason": null,
                "uuid": "f89958c4-cf97-4816-84bd-6d9c44bb2641",
                "is-request": true,
                "role": null,
                "title": "POC Delivery Release"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "21034",
            "type": "events",
            "attributes": {
                "name": "s1_sp_release_vehicle_response",
                "message": "Sally Port: Acknowledged. Release Ups.",
                "created-at": "2017-05-08T16:15:09.000Z",
                "reply": "y",
                "reason": null,
                "uuid": "9b14db03-e8b3-48f1-bc9c-60f1c8f4e979",
                "is-request": false,
                "role": null,
                "title": "Release Vehicle Clearance Response"
            },
            "relationships": {
                "eventable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "11781",
            "type": "boas",
            "attributes": {
                "name": null,
                "boa": {
                    "delivery.sleeper-cab": "false",
                    "delivery.cargo": "Boxes",
                    "driver.name": "Patrick Smith",
                    "delivery.sleeper-cab-verification": "Verified",
                    "vehicle.number-of-axles": null,
                    "secondary-poc.phone-verification": "NotVerified",
                    "primary-poc.first-name": "Bennett",
                    "primary-poc.last-name": null,
                    "secondary-poc.phone": null,
                    "driver.driver-instructions": {
                        "location": null,
                        "instructions": null
                    },
                    "boa.jockey-truck-verification": "Verified",
                    "primary-poc.phone": null,
                    "driver.estimated-wait-time": 0,
                    "boa.license-plate-number-verification": "Verified",
                    "driver.first-name": "Patrick",
                    "driver.last-name": "Smith",
                    "delivery.cargo-verification": "Verified",
                    "driver.phone-number": null,
                    "secondary-poc.last-name": null,
                    "vehicle.escort": null,
                    "entry-time": "2017-05-08T12:16:03.719-04:00",
                    "search-owner": null,
                    "driver.email": "n/a",
                    "driver.hazmat-authorized": true,
                    "boa.license-plate-number": "Zdl 0922 PA",
                    "secondary-poc.first-name": null,
                    "driver.frequent": true,
                    "site.name": "Limerick",
                    "boa.officer-name": "Guinther",
                    "primary-poc.extension-verification": "Verified",
                    "workflow-status": {
                        "vvro": "Arrived",
                        "sierra-1": "Arrived"
                    },
                    "vehicle.status": "enroute",
                    "boa.workgroup-verification": "Verified",
                    "boa.random-search": "false",
                    "driver.badge-number": null,
                    "driver.company": null,
                    "delivery.arrive-at-verification": "Verified",
                    "secondary-poc.name-verification": "Alert",
                    "boa.workgroup": "Whse",
                    "secondary-poc.extension": null,
                    "vendor.name": "Ups",
                    "boa.search-completedby-mso": "Guinther",
                    "vehicle.vehicle-type": "common_carrier",
                    "driver.name-verification": "Verified",
                    "driver.password-confirmation": "5913d6",
                    "delivery.escort": "false",
                    "delivery.escort-verification": "Verified",
                    "primary-poc.phone-verification": "NotVerified",
                    "boa.jockey-truck": "false",
                    "vehicle.vehicle-type-verification": "Verified",
                    "primary-poc.name-verification": "Verified",
                    "driver.email-verification": "Verified",
                    "driver.phone-number-verification": "Alert",
                    "primary-poc.name": "Bennett ",
                    "primary-poc.extension": "3655",
                    "delivery.lane-assignment": "Lane 3",
                    "vendor.name-verification": "Verified",
                    "boa.officer-name-verification": "Verified",
                    "boa.seals-verification": "Verified",
                    "boa.seals": "false",
                    "secondary-poc.name": " ",
                    "boa.random-search-verification": "Verified",
                    "driver.password-expires": "2017-04-14T02:40:37.000-04:00",
                    "vehicle.model": null,
                    "driver.confirmed": false,
                    "secondary-poc.extension-verification": "Alert",
                    "vehicle.priority": null
                }
            },
            "relationships": {
                "storable": {
                    "data": {
                        "id": "11206",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "11210",
            "type": "vehicles",
            "attributes": {
                "model": null,
                "escort": false,
                "priority": false,
                "vehicle-type": "passenger_imp",
                "status": null,
                "number-of-axles": null
            },
            "relationships": {
                "vendor": {
                    "data": {
                        "id": "10810",
                        "type": "vendors"
                    }
                },
                "images": {
                    "data": []
                }
            }
        },
        {
            "id": "10810",
            "type": "vendors",
            "attributes": {
                "name": "Test 7"
            }
        },
        {
            "id": "14068",
            "type": "workflows",
            "attributes": {
                "step": 1,
                "processing-time": 15,
                "started-at": null,
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10000",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11207",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "14069",
            "type": "workflows",
            "attributes": {
                "step": 2,
                "processing-time": null,
                "started-at": null,
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10001",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11207",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "14070",
            "type": "workflows",
            "attributes": {
                "step": 3,
                "processing-time": 90,
                "started-at": null,
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10022",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11207",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "14071",
            "type": "workflows",
            "attributes": {
                "step": 4,
                "processing-time": 15,
                "started-at": null,
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10021",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11207",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "14072",
            "type": "workflows",
            "attributes": {
                "step": 5,
                "processing-time": null,
                "started-at": null,
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10001",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11207",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "11784",
            "type": "boas",
            "attributes": {
                "name": null,
                "boa": {
                    "destination.name": "warehouse"
                }
            },
            "relationships": {
                "storable": {
                    "data": {
                        "id": "11207",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "11212",
            "type": "vehicles",
            "attributes": {
                "model": null,
                "escort": false,
                "priority": false,
                "vehicle-type": "passenger_imp",
                "status": null,
                "number-of-axles": null
            },
            "relationships": {
                "vendor": {
                    "data": {
                        "id": "10811",
                        "type": "vendors"
                    }
                },
                "images": {
                    "data": []
                }
            }
        },
        {
            "id": "10811",
            "type": "vendors",
            "attributes": {
                "name": "Test 8"
            }
        },
        {
            "id": "14075",
            "type": "workflows",
            "attributes": {
                "step": 1,
                "processing-time": 30,
                "started-at": null,
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10000",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11209",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "14076",
            "type": "workflows",
            "attributes": {
                "step": 2,
                "processing-time": 15,
                "started-at": null,
                "ended-at": null,
                "eta": null,
                "estimated-processing-time": null,
                "arrived-at": null,
                "nonsearch-end": null,
                "search-end": null,
                "nonsearch-ept": null,
                "search-ept": null,
                "release-ept": null
            },
            "relationships": {
                "location": {
                    "data": {
                        "id": "10021",
                        "type": "locations"
                    }
                },
                "delivery": {
                    "data": {
                        "id": "11209",
                        "type": "deliveries"
                    }
                }
            }
        },
        {
            "id": "11786",
            "type": "boas",
            "attributes": {
                "name": null,
                "boa": {
                    "destination.name": "oca"
                }
            },
            "relationships": {
                "storable": {
                    "data": {
                        "id": "11209",
                        "type": "deliveries"
                    }
                }
            }
        }
    ]
}