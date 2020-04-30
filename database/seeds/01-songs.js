
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('songs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        {song_info: 'Blinding Lights - The Weekend', song_id: 'a'},

        {song_info: 'The Box - Roddy Ricch', song_id: '11'},
        
        {song_info: 'Dont Start Now - Dua Lipa', song_id: '12'},
        
        {song_info: 'Say So - Doja Cat', song_id: '13'},
        
        {song_info: 'Circles - Post Malone', song_id: '14'},
        
        {song_info: 'Adore You - Harry Styles', song_id: '15'},
        
        {song_info: 'Intentions - Justin Bieber (featuring Quavo)', song_id: '16'},
        
        {song_info: 'ROCKSTAR - Da Baby (featuring Roddy Ricch)', song_id: '17'},
        
       { song_info: 'Life Is Good - Future (featuring Drake)', song_id: '18'},
        
        {song_info: 'everything i wanted - Billie Eilish', song_id: '19'},
        
        {song_info: 'Blueberry Faygo - Lil Mosey', song_id: '20'}
      ]);
    });
};
