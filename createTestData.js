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
      avatar: 'https://i.ytimg.com/vi/Fwwn8kISBTE/hqdefault.jpg',
      encounters: [
        { 
          title: 'Mean squirrel',
          animal: 'Grey Squirrel',
          scientificname: 'Sciurus carolinensis',
          description: 'I saw a squirrel and it bit me!',
          location: 'Central Park',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sciurus_carolinensis_in_Hyde_Park,_London_spring_2013.JPG',
        },
        { 
          title: 'Silly rabbit', 
          animal: 'Pygmy Rabbit',
          scientificname: 'Brachylagus idahoensis',
          description: 'tricks are for kids, noooooooo',
          location: 'tv',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/BRACHYLAGUS_IDAHOENSIS.jpg'
        },
      ]
    },

    {
      username: 'mary',
      password: 'mary',
      description: 'mary had a little lamb',
      avatar: 'https://pixabay.com/static/uploads/photo/2015/07/11/19/18/woman-841164_960_720.jpg',
      encounters: [
        { 
          title: 'Centar', 
          animal: '',
          scientificname: '',
          description: 'It shot my lamb with an arrow then ate it',
          location: 'The woods outside of Hogwarts',
          photo: 'http://images.vice.com/munchies/wp_upload/centaur3.jpg',
        },
        { 
          title: 'Unicorn', 
          animal: '',
          scientificname: '',
          description: 'Im already hearing voices, just try to contradict me',
          location: 'Manhattan',
          photo: 'https://s-media-cache-ak0.pinimg.com/736x/e5/7e/51/e57e51be417ed775c051dea35cb0b7a8.jpg',
        },
        { 
          title: 'Griffin', 
          animal: '',
          scientificname: '',
          description: 'It was perched up high, on some cliffs somewhere',
          location: 'Mount Doom',
          photo: 'http://img04.deviantart.net/5f3a/i/2015/102/d/8/griffin_by_jade_soccer_dance-d8pin9j.jpg',
        },
        { 
          title: 'Manticore', 
          animal: '',
          scientificname: '',
          description: 'It tried to eat me, but I ran away',
          location: 'The beach',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Martigora_engraving.jpg',
        },
      ]
    },

    {
      username: 'vanessa',
      password: 'vanessa',
      description: 'vanessa lives in the woods',
      avatar: 'http://orig02.deviantart.net/e8c9/f/2015/139/6/f/tiger_lady_by_annemaria48-d8tzpjk.jpg',
      encounters: [
        { 
          title: 'Bear', 
          animal: 'Grizzly Bear',
          scientificname: 'Ursus arctos',
          description: 'There were three of them, a momma, a popa and a baby bear',
          location: 'Yellowstone',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Grizzly_bear_brown_bear.jpg',
        },
        { 
          title: 'Mouse', 
          animal: 'House Mouse',
          scientificname: 'Mus musculus',
          description: 'It was so cute',
          location: 'My house',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Apodemus_sylvaticus_bosmuis.jpg',
        },
        { 
          title: 'Moth', 
          animal: 'Atlas Moth',
          scientificname: 'Attacus atlas',
          description: 'It was a big moth',
          location: 'My porch',
          photo: 'https://c2.staticflickr.com/2/1305/860218865_779ab1cfe9_z.jpg',
        },
      ]
    },

    {
      username: 'bobby',
      password: 'bobby',
      description: 'bobby likes birds',
      avatar: 'https://pixabay.com/static/uploads/photo/2013/08/25/08/02/dog-and-man-175549_960_720.jpg',
      encounters: [
        { 
          title: 'Robin', 
          animal: 'American Robin',
          scientificname: 'Turdus migratorius',
          description: 'It had a red breast',
          location: 'London',
          photo: 'http://www.birdzilla.com/images/stories/amaze/american-robin-a500.jpg',
        },
        { 
          title: 'Sparrow', 
          animal: 'Black-Striped Sparrow',
          scientificname: 'Arremonops conirostris',
          description: 'African or European?',
          location: 'Bridge of doom',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Black-striped_Sparrow_(Arremonops_conirostris).jpg',
        },
        { 
          title: 'Kingfisher', 
          animal: 'Common Kingfisher',
          scientificname: 'Alcedo atthis',
          description: 'It was a big one',
          location: 'Pond',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Ceyx_erithaca.JPG',
        },
        ]
    },
    
    {
      username: 'jamie',
      password: 'jamie',
      description: 'jamie loves to go suba diving',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Kevin_Richardson_with_hyenas.jpg',
      encounters: [
        { 
          title: 'Angelfish', 
          animal: 'Pterophyllum scalare',
          scientificname: 'Pterophyllum scalare',
          description: 'Totally cool!  Its got great colors',
          location: 'Bahamas',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Pterophyllum_leopoldi.jpg',
        },
        { 
          title: 'Puffer Fish', 
          animal: 'Norther Puffer',
          scientificname: 'Sphoeroides maculatus',
          description: 'It had all kinds of tiny spines',
          location: 'Bahamas',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Arothron_meleagris_by_NPS_1.jpg',
        },
        { 
          title: 'Shark', 
          animal: 'Great White Shark',
          scientificname: 'Carcharodon carcharias',
          description: 'I almost died!!!!!',
          location: 'Bahamas',
          photo: 'https://c1.staticflickr.com/3/2822/10091027656_8b9bb7235b_b.jpg',
        },
      ]
    }
  ];

  var now = new Date().valueOf();
  users.forEach(function(u) {
    new User({
      username: u.username,
      password: u.password,
      description: u.description, 
      avatar: u.avatar,
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
