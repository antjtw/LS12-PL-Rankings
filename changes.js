// Implexus Powerlifting — change log (rolling 7-day window)
// Written automatically by scripts/scrape.mjs on each daily run.
// generated:      ISO timestamp of the run that produced this file.
// baselineDate:   when the current rank baseline was set (refreshed every 7 days).
// prevRankActive / prevRankAll: slug -> rank as of baselineDate, RE-RANKED over
//   the current roster so arrivals/departures don't create phantom arrows.
//   Position arrows compare current rank against these, so only genuine
//   lifting-driven movement shows — roster logistics net to zero.
// rosterActive / rosterAll: the slugs present at this run (roster-change basis).
// arrivals / departures:    who joined / left since the baseline (stored for
//   possible future use; not displayed). Arrivals show as NEW, not as movers.
// pbEvents:       personal-best improvements from the last 7 days, each stamped
//   with the date it hit the board. Shown as callout cards in dynamic mode,
//   ageing out after 7 days. A new PB for a lifter overrides their older one.

const CHANGES = {
  "generated": "2026-07-27T13:31:12.441Z",
  "baselineDate": "2026-07-22T12:20:23.189Z",
  "prevRankActive": {
    "wyliesung": 1,
    "mikejones1": 2,
    "genevievecollins": 3,
    "chrisjennings": 4,
    "benthornes": 5,
    "peterking1": 6,
    "anthonywhite1": 7,
    "nickjohnstone": 8,
    "taliafirth": 9,
    "stevewhittles": 10,
    "williamwebb1": 11,
    "leemccafferty": 12,
    "ashlingkeeble": 13,
    "joecurzon": 14,
    "chloeboomer": 15,
    "tobysolomon": 16,
    "matthewanderson2": 17,
    "owencrisp": 18,
    "johncousins1": 19,
    "robjacobs": 20,
    "jodiebarnsley": 21,
    "jacklarkinsthomas": 22,
    "laurajones6": 23
  },
  "prevRankAll": {
    "wyliesung": 1,
    "mikejones1": 2,
    "anneburns": 3,
    "maxguo": 4,
    "victoriahart": 5,
    "chrisonuoha": 6,
    "gerryleepierre": 7,
    "genevievecollins": 8,
    "chrisjennings": 9,
    "joshhinchcliffe": 10,
    "benthornes": 11,
    "karldaniel": 12,
    "kairichardson": 13,
    "peterking1": 14,
    "bradycrooks": 15,
    "anthonymclaughlin1": 16,
    "anthonywhite1": 17,
    "samriddharanjan": 18,
    "nickjohnstone": 19,
    "taliafirth": 20,
    "stevewhittles": 21,
    "leohannan": 22,
    "williamwebb1": 23,
    "leemccafferty": 24,
    "alexshortland": 25,
    "ashlingkeeble": 26,
    "joecurzon": 27,
    "chloeboomer": 28,
    "tobysolomon": 29,
    "finndavis": 30,
    "matthewanderson2": 31,
    "owencrisp": 32,
    "samlusher": 33,
    "johncousins1": 34,
    "robjacobs": 35,
    "roryturnbull": 36,
    "kellybroadbent": 37,
    "jodiebarnsley": 38,
    "jacklarkinsthomas": 39,
    "laurajones6": 40
  },
  "curRankActive": {
    "wyliesung": 1,
    "mikejones1": 2,
    "genevievecollins": 3,
    "chrisjennings": 4,
    "benthornes": 5,
    "peterking1": 6,
    "anthonywhite1": 7,
    "nickjohnstone": 8,
    "taliafirth": 9,
    "ashlingkeeble": 10,
    "stevewhittles": 11,
    "williamwebb1": 12,
    "leemccafferty": 13,
    "tobysolomon": 14,
    "joecurzon": 15,
    "chloeboomer": 16,
    "matthewanderson2": 17,
    "owencrisp": 18,
    "johncousins1": 19,
    "robjacobs": 20,
    "jodiebarnsley": 21,
    "jacklarkinsthomas": 22,
    "laurajones6": 23
  },
  "curRankAll": {
    "wyliesung": 1,
    "mikejones1": 2,
    "anneburns": 3,
    "maxguo": 4,
    "victoriahart": 5,
    "chrisonuoha": 6,
    "gerryleepierre": 7,
    "genevievecollins": 8,
    "chrisjennings": 9,
    "joshhinchcliffe": 10,
    "benthornes": 11,
    "karldaniel": 12,
    "kairichardson": 13,
    "peterking1": 14,
    "bradycrooks": 15,
    "anthonymclaughlin1": 16,
    "anthonywhite1": 17,
    "samriddharanjan": 18,
    "nickjohnstone": 19,
    "taliafirth": 20,
    "ashlingkeeble": 21,
    "stevewhittles": 22,
    "leohannan": 23,
    "williamwebb1": 24,
    "leemccafferty": 25,
    "alexshortland": 26,
    "tobysolomon": 27,
    "joecurzon": 28,
    "chloeboomer": 29,
    "finndavis": 30,
    "matthewanderson2": 31,
    "owencrisp": 32,
    "samlusher": 33,
    "johncousins1": 34,
    "robjacobs": 35,
    "roryturnbull": 36,
    "kellybroadbent": 37,
    "jodiebarnsley": 38,
    "jacklarkinsthomas": 39,
    "laurajones6": 40
  },
  "rosterActive": [
    "wyliesung",
    "mikejones1",
    "genevievecollins",
    "chrisjennings",
    "anthonywhite1",
    "nickjohnstone",
    "taliafirth",
    "stevewhittles",
    "williamwebb1",
    "ashlingkeeble",
    "joecurzon",
    "tobysolomon",
    "matthewanderson2",
    "owencrisp",
    "jodiebarnsley",
    "laurajones6",
    "jacklarkinsthomas",
    "peterking1",
    "benthornes",
    "robjacobs",
    "johncousins1",
    "leemccafferty",
    "chloeboomer"
  ],
  "rosterAll": [
    "wyliesung",
    "mikejones1",
    "genevievecollins",
    "chrisjennings",
    "anthonywhite1",
    "nickjohnstone",
    "taliafirth",
    "stevewhittles",
    "williamwebb1",
    "ashlingkeeble",
    "joecurzon",
    "tobysolomon",
    "finndavis",
    "matthewanderson2",
    "owencrisp",
    "jodiebarnsley",
    "laurajones6",
    "jacklarkinsthomas",
    "peterking1",
    "benthornes",
    "robjacobs",
    "johncousins1",
    "leemccafferty",
    "chloeboomer",
    "kairichardson",
    "leohannan",
    "samlusher",
    "chrisonuoha",
    "alexshortland",
    "kellybroadbent",
    "roryturnbull",
    "gerryleepierre",
    "karldaniel",
    "bradycrooks",
    "anthonymclaughlin1",
    "samriddharanjan",
    "anneburns",
    "maxguo",
    "victoriahart",
    "joshhinchcliffe"
  ],
  "arrivals": [],
  "departures": [
    "finndavis"
  ],
  "pbEvents": [
    {
      "slug": "nickjohnstone",
      "name": "Nick Johnstone",
      "improved": {
        "squat": {
          "from": 245,
          "to": 247.5
        }
      },
      "dots": {
        "from": 408.42,
        "to": 408.42
      },
      "date": "2026-07-27T13:31:12.441Z"
    },
    {
      "slug": "ashlingkeeble",
      "name": "Ash Keeble",
      "improved": {
        "squat": {
          "from": 145,
          "to": 155
        },
        "bench": {
          "from": 87.5,
          "to": 90
        },
        "deadlift": {
          "from": 162.5,
          "to": 167.5
        },
        "total": {
          "from": 390,
          "to": 412.5
        }
      },
      "dots": {
        "from": 378.95,
        "to": 400.64
      },
      "date": "2026-07-27T13:31:12.441Z",
      "placesUp": 3
    },
    {
      "slug": "tobysolomon",
      "name": "Toby Solomon",
      "improved": {
        "squat": {
          "from": 182.5,
          "to": 210
        },
        "bench": {
          "from": 127.5,
          "to": 130
        },
        "deadlift": {
          "from": 230,
          "to": 255
        },
        "total": {
          "from": 540,
          "to": 595
        }
      },
      "dots": {
        "from": 345.84,
        "to": 383.66
      },
      "date": "2026-07-27T13:31:12.441Z",
      "placesUp": 2
    },
    {
      "slug": "finndavis",
      "name": "Finn Davis",
      "improved": {
        "squat": {
          "from": 190,
          "to": 200
        },
        "bench": {
          "from": 120,
          "to": 125
        },
        "deadlift": {
          "from": 215,
          "to": 220
        },
        "total": {
          "from": 525,
          "to": 545
        }
      },
      "dots": {
        "from": 339.47,
        "to": 347.84
      },
      "date": "2026-07-27T13:31:12.441Z"
    }
  ]
};
