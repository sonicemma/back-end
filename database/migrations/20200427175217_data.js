
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl.string('email', 128).notNullable().unique();
      tbl.string('password', 128).notNullable();
  })

  .createTable('songs', tbl => {
      tbl.increments();
      tbl.string('song_name').notNullable();
      tbl.string('song_artist').notNullable();
      tbl.string('song_mood').notNullable().unique();
      tbl.string('song_id').notNullable().unique();
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('songs');
};
