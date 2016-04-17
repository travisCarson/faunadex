var db = require('./server/config/db.js');
var User = require('./server/models/user.js');
var Encounter = require('./server/models/encounter.js');
var fs = require('fs');

var populate = function() {
  var users = [
    {
      username: 'joan',
      password: 'joan',
      description: 'joan is of an arc',
      encounters: [
        { 
          title: 'Mean squirrel', 
          description: 'I saw a squirrel and it bit me!',
          location: 'Central Park'
        },
        { 
          title: 'Silly rabbit', 
          description: 'tricks are for kids, noooooooo',
          location: 'tv',
        },
      ]
    },

    {
      username: 'mary',
      password: 'mary',
      description: 'mary had a little lamb',
      encounters: [
        { 
          title: 'Centar', 
          description: 'It shot my lamb with an arrow then ate it',
          location: 'The woods outside of Hogwarts',
        },
        { 
          title: 'Unicorn', 
          description: 'Im already hearing voices, just try to contradict me',
          location: 'Manhattan',
        },
        { 
          title: 'Griffin', 
          description: 'It was perched up high, on some cliffs somewhere',
          location: 'Mount Doom',
        },
        { 
          title: 'Manticore', 
          description: 'It tried to eat me, but I ran away',
          location: 'The beach',
        },
      ]
    },

    {
      username: 'vanessa',
      password: 'vanessa',
      description: 'vanessa lives in the woods',
      encounters: [
        { 
          title: 'Bear', 
          description: 'There were three of them, a momma, a popa and a baby bear',
          location: 'Yellowstone',
        },
        { 
          title: 'Mouse', 
          description: 'It was so cute',
          location: 'My house',
        },
        { 
          title: 'Moth', 
          description: 'It was a big moth',
          location: 'My porch',
        },
      ]
    },

    {
      username: 'bobby',
      password: 'bobby',
      description: 'bobby likes birds',
      encounters: [
        { 
          title: 'Robin', 
          description: 'It had a red breast',
          location: 'London',
        },
        { 
          title: 'Sparrow', 
          description: 'African or European?',
          location: 'Bridge of doom',
        },
        { 
          title: 'Kingfisher', 
          description: 'It was a big one',
          location: 'Pond',
        },
        ]
    },
    
    {
      username: 'jamie',
      password: 'jamie',
      description: 'jamie loves to go suba diving',
      encounters: [
        { 
          title: 'Angelfish', 
          description: 'Totally cool!  Its got great colors',
          location: 'Bahamas',
        },
        { 
          title: 'Puffer Fish', 
          description: 'It had all kinds of tiny spines',
          location: 'Bahamas',
        },
        { 
          title: 'Shark', 
          description: 'I almost died!!!!!',
          location: 'Bahamas',
        },
      ]
    }
  ];

  var now = new Date().valueOf();
  users.forEach(function(u) {
    new User({
      username: u.username,
      password: u.password,
      description: u.description
    }).save().then(function(user) {
      u.encounters.forEach(function(e) {
        var t = new Date(Math.floor(Math.random() * now));
        e.encountertime = t;
        e.posttime = new Date();
        e.userid = user.id;
        new Encounter(e).save();
      });

    });
  });
};

var resetDb = function() {
  var sql = fs.readFileSync('./schema.sql').toString().toString().replace('\n', '');
  db.knex.raw(sql)
    .then(function(e) {
      if (e) { console.log(e.message); }
      populate();
    });
};

populate();
