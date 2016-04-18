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
          location: 'Central Park',
          photo: 'http://gallery.new-ecopsychology.org/photo/mammals/gray-squirrel_(sciurus_carolinensis)-3.jpg',
        },
        { 
          title: 'Silly rabbit', 
          animal: 'Pygmy Rabbit',
          scientificname: 'Brachylagus idahoensis',
          description: 'tricks are for kids, noooooooo',
          location: 'tv',
          photo: 'https://www.advocateswest.org/wp-content/uploads/2013/06/pygmy_rabbit_protect_environmental_law_Advocates_for_the_West.jpg'
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
          photo: 'http://images.vice.com/munchies/wp_upload/centaur3.jpg',
        },
        { 
          title: 'Unicorn', 
          animal: '',
          scientificname: '',
          description: 'Im already hearing voices, just try to contradict me',
          location: 'Manhattan',
          photo: 'http://i.livescience.com/images/i/000/034/023/i02/unicorn-121203.jpg',
        },
        { 
          title: 'Griffin', 
          animal: '',
          scientificname: '',
          description: 'It was perched up high, on some cliffs somewhere',
          location: 'Mount Doom',
          photo: 'http://myths.e2bn.org/library/1384974772/griffin1384974633.jpg',
        },
        { 
          title: 'Manticore', 
          animal: '',
          scientificname: '',
          description: 'It tried to eat me, but I ran away',
          location: 'The beach',
          photo: 'http://vignette1.wikia.nocookie.net/powerlisting/images/e/ea/Manticore.jpg',
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
          photo: 'http://www.juergen-spiess.de/gallery/d/43-2/bwa_060430_16090801_gallery.jpg',
        },
        { 
          title: 'Mouse', 
          animal: 'House Mouse',
          scientificname: 'Mus musculus',
          description: 'It was so cute',
          location: 'My house',
          photo: 'http://www.planet-mammiferes.org/Photos/Rongeur/Myomo/Murine/MusMus9.jpg',
        },
        { 
          title: 'Moth', 
          animal: 'Atlas Moth',
          scientificname: 'Attacus atlas',
          description: 'It was a big moth',
          location: 'My porch',
          photo: 'http://www.balalaralemi.kz/img/uploads/372722ca434c62095b3542cbf26c57b2.jpg',
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
          photo: 'https://s-media-cache-ak0.pinimg.com/736x/e3/72/10/e37210508f4a2110c0e26295846bfa8c.jpg',
        },
        { 
          title: 'Sparrow', 
          animal: 'Black-Striped Sparrow',
          scientificname: 'Arremonops conirostris',
          description: 'African or European?',
          location: 'Bridge of doom',
          photo: 'http://avise-birds.bio.uci.edu/passeriformes/emberizidae/arremonops_conirostris/images/1bssp_copy.jpg',
        },
        { 
          title: 'Kingfisher', 
          animal: 'Common Kingfisher',
          scientificname: 'Alcedo atthis',
          description: 'It was a big one',
          location: 'Pond',
          photo: 'http://orig01.deviantart.net/3d2c/f/2015/031/c/1/alcedo_atthis_by_darksoul4life-d8g3se7.jpg',
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
          photo: 'http://www.seriouslyfish.com/wp-content/uploads/2012/03/pterophyllum_scalare_golden_2.jpg',
        },
        { 
          title: 'Puffer Fish', 
          animal: 'Norther Puffer',
          scientificname: 'Sphoeroides maculatus',
          description: 'It had all kinds of tiny spines',
          location: 'Bahamas',
          photo: 'http://www.chesapeakebay.net/images/field_guide/Northern_Puffer_page_image.jpg',
        },
        { 
          title: 'Shark', 
          animal: 'Great White Shark',
          scientificname: 'Carcharodon carcharias',
          description: 'I almost died!!!!!',
          location: 'Bahamas',
          photo: 'http://i.dailymail.co.uk/i/pix/2011/08/18/article-0-0D74B4BD00000578-931_468x405.jpg',
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
