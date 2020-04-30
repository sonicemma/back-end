
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('songs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        {song_info: 'Blinding Lights - The Weekend'},

        {song_info: 'The Box - Roddy Ricch'},
        
        {song_info: 'Dont Start Now - Dua Lipa'},
        
        {song_info: 'Say So - Doja Cat'},
        
        {song_info: 'Circles - Post Malone'},
        
        {song_info: 'Adore You - Harry Styles'},
        
        {song_info: 'Intentions - Justin Bieber (featuring Quavo)'},
        
        {song_info: 'ROCKSTAR - Da Baby (featuring Roddy Ricch)'},
        
       { song_info: 'Life Is Good - Future (featuring Drake)'},
        
        {song_info: 'everything i wanted - Billie Eilish'},
        
        {song_info: 'Blueberry Faygo - Lil Mosey'},

        {song_info: 'aaaaaaaaaa'},

        {song_info: 'zzzzzzzzzzzzzzz'},
        
        {song_info: 'gdfgdfhgdh'},
        
        {song_info: 'qqqqqqqqqqqqq'},
        
        {song_info: 'vvvvvvvvvvvvvv'},
        
        {song_info: 'Afffffffffffles'},
        
        {song_info: 'ddddddddddddddffffffff)'},
        
        {song_info: 'qqqqqqqqqqqqqqqqqqqqwwwwwwwwwwwwwwwwww'},
        
        { song_info: 'fdfdfdggfgfg'},
        
        {song_info: 'fffffffffffffffffffff'},

        {song_info: 'aaa'},

        {song_info: 'zzzzzzzz'},
        
        {song_info: 'ggdh'},
        
        {song_info: 'qqqqqq'},
        
        {song_info: 'vvvvvvvv'},
        
        {song_info: 'Affffles'},
        
        {song_info: 'dddddddffffffff)'},
        
        {song_info: 'qqqqqqqqqqqwwwwwwwwwwwwwwwwww'},
        
        { song_info: 'fdfgfg'},
        
        {song_info: 'ffffffffffffff'}
      ]);
    });
};
