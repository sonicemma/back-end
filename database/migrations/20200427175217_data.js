
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl.string('email', 128).notNullable().unique();
      tbl.string('password', 128).notNullable();
  })

  .createTable('songs', tbl => {
      tbl.increments();
      tbl.string('song_info').notNullable();
      tbl.string('song_id').notNullable();
  })

  .createTable('saveSong', tbl => {
      tbl.increments();
      tbl.string('song_id').notNullable().references('id').inTable('song').onDelete('CASCADE').onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('songs')
    .dropTableIfExists('saveSong');
};
