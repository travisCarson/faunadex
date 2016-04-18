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
          animal: 'Grey Squirrel',
          scientificname: 'Sciurus carolinensis',
          description: 'I saw a squirrel and it bit me!',
          location: 'Central Park'
        },
        { 
          title: 'Silly rabbit', 
          animal: 'Pygmy Rabbit',
          scientificname: 'Brachylagus idahoensis',
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
          animal: '',
          scientificname: '',
          description: 'It shot my lamb with an arrow then ate it',
          location: 'The woods outside of Hogwarts',
        },
        { 
          title: 'Unicorn', 
          animal: '',
          scientificname: '',
          description: 'Im already hearing voices, just try to contradict me',
          location: 'Manhattan',
        },
        { 
          title: 'Griffin', 
          animal: '',
          scientificname: '',
          description: 'It was perched up high, on some cliffs somewhere',
          location: 'Mount Doom',
        },
        { 
          title: 'Manticore', 
          animal: '',
          scientificname: '',
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
          animal: 'Grizzly Bear',
          scientificname: 'Ursus arctos',
          description: 'There were three of them, a momma, a popa and a baby bear',
          location: 'Yellowstone',
        },
        { 
          title: 'Mouse', 
          animal: 'House Mouse',
          scientificname: 'Mus musculus',
          description: 'It was so cute',
          location: 'My house',
        },
        { 
          title: 'Moth', 
          animal: 'Atlas Moth',
          scientificname: 'Attacus atlas',
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
          animal: 'American Robin',
          scientificname: 'Turdus migratorius',
          description: 'It had a red breast',
          location: 'London',
        },
        { 
          title: 'Sparrow', 
          animal: 'Black-Striped Sparrow',
          scientificname: 'Arremonops conirostris',
          description: 'African or European?',
          location: 'Bridge of doom',
        },
        { 
          title: 'Kingfisher', 
          animal: 'Common Kingfisher',
          scientificname: 'Alcedo atthis',
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
          animal: 'Pterophyllum scalare',
          scientificname: 'Pterophyllum scalare',
          description: 'Totally cool!  Its got great colors',
          location: 'Bahamas',
        },
        { 
          title: 'Puffer Fish', 
          animal: 'Norther Puffer',
          scientificname: 'Sphoeroides maculatus',
          description: 'It had all kinds of tiny spines',
          location: 'Bahamas',
        },
        { 
          title: 'Shark', 
          animal: 'Great White Shark',
          scientificname: 'Carcharodon carcharias',
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
