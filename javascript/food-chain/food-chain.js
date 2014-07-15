var FoodChain = {

  words: {
    start:  "I know an old lady who swallowed a #{creature}.\n",
    end:    "I don't know why she swallowed the fly. Perhaps she'll die.\n",
    spider: "It wriggled and jiggled and tickled inside her.\n" +
            "She swallowed the spider to catch the fly.\n",
    bird:   "How absurd to swallow a bird!\n" +
            "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
            "She swallowed the spider to catch the fly.\n",
    cat:    "Imagine that, to swallow a cat!\n" +
            "She swallowed the cat to catch the bird.\n" +
            "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
            "She swallowed the spider to catch the fly.\n",
    dog:    "What a hog, to swallow a dog!\n" +
            "She swallowed the dog to catch the cat.\n" +
            "She swallowed the cat to catch the bird.\n" +
            "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
            "She swallowed the spider to catch the fly.\n",
    goat:   "Just opened her throat and swallowed a goat!\n" +
            "She swallowed the goat to catch the dog.\n" +
            "She swallowed the dog to catch the cat.\n" +
            "She swallowed the cat to catch the bird.\n" +
            "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
            "She swallowed the spider to catch the fly.\n",
    cow:    "I don't know how she swallowed a cow!\n" +
            "She swallowed the cow to catch the goat.\n" +
            "She swallowed the goat to catch the dog.\n" +
            "She swallowed the dog to catch the cat.\n" +
            "She swallowed the cat to catch the bird.\n" +
            "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n" +
            "She swallowed the spider to catch the fly.\n",
    horse:  "She's dead, of course!\n"
  },

  createVerse: function(creature) {
    var words  = this.words,
        start  = words.start,
        middle = (words[creature]) ? words[creature] : '',
        end    = (creature === 'horse') ? '' : words.end;

    verse = start + middle + end;
    verse = verse.replace('#{creature}', creature);
    return verse;
  },

  fly:    function () { return this.createVerse('fly');    },
  spider: function () { return this.createVerse('spider'); },
  bird:   function () { return this.createVerse('bird');   },
  cat:    function () { return this.createVerse('cat');    },
  dog:    function () { return this.createVerse('dog');    },
  goat:   function () { return this.createVerse('goat');   },
  cow:    function () { return this.createVerse('cow');    },
  horse:  function () { return this.createVerse('horse');  },

  verse: function (n) {
    switch (n) {
      case 2:
        verse = this.spider();
        break;
      case 3:
        verse = this.bird();
        break;
      case 4:
        verse = this.cat();
        break;
      case 5:
        verse = this.dog();
        break;
      case 6:
        verse = this.goat();
        break;
      case 7:
        verse = this.cow();
        break;
      case 8:
        verse = this.horse();
        break;
      default:
        verse = this.fly();
        break;
    }

    return verse;
  },

  verses: function (start, finish) {
    var creatures = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'],
        verse = '',
        i;

    for (i = start - 1; i < finish; i += 1) {
      verse += this[creatures[i]]() + '\n';
    }

    return verse;
  },

  sing: function () {
    return this.verses(1, 8);
  }
};

module.exports = FoodChain;
