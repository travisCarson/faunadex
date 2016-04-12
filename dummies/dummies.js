exports.dummyUsers = [
  {
    id: 1,
    username: 'William',
    password: 'password',
    description: "hi, i'm William. i would love to encounter any animal besides a squirrel, but so far i've only seen a squirrel.",
    avatar: 'http://40.media.tumblr.com/tumblr_lge5u2vHaN1qdnbvko1_500.jpg'
  },
  {
    id: 2,
    username: 'Travis',
    password: '12345',
    description: "hi, i'm Travis. i would love to encounter a tree, but so far i've only seen a squirrel.",
    avatar: 'http://40.media.tumblr.com/tumblr_lge5u2vHaN1qdnbvko1_500.jpg'
  },
  {
    id: 3,
    username: 'Alexander',
    password: 'password',
    description: "hi, i'm Alexander. i would love to encounter a rhino, but so far i've only seen a squirrel.",
    avatar: 'http://40.media.tumblr.com/tumblr_lge5u2vHaN1qdnbvko1_500.jpg'
  }
];

exports.dummyEncounters = [
  {
    id: 1,
    title: 'Grey Squirrel',
    description: 'today i encountered a squirrel. luckily, he was not aggressive',
    location: 'the park',
    encounterTime: '2016-04-03 22:22',
    postTime: '2016-04-03 22:22',
    // how do we access the photos? don't have a collection setup for that
    // photo: 'http://i.telegraph.co.uk/multimedia/archive/02845/potd-squirrel_2845650b.jpg',
  },
  {
    id: 2,
    title: 'Elephant',
    description: 'why is there an elephant around here?',
    location: 'market',
    encounterTime: '2016-04-04 12:22',
    postTime: '2016-04-06 22:22',
    // how do we access the photos? don't have a collection setup for that
    // photo: 'http://i.telegraph.co.uk/multimedia/archive/02845/potd-squirrel_2845650b.jpg',
  },
  {
    id: 3,
    title: 'Grey African Parrot',
    description: 'it landed on my head!',
    location: 'Hack Reactor',
    encounterTime: '2016-04-07 04:22',
    postTime: '2016-04-07 22:22',
    // how do we access the photos? don't have a collection setup for that
    // photo: 'http://i.telegraph.co.uk/multimedia/archive/02845/potd-squirrel_2845650b.jpg',
  }
];

