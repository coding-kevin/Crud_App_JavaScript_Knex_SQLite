exports.up = async knex => {
  await knex.schema.createTable('mountains', table => {
    table.increments('id')
    table.string('name', 64).notNullable()
    table.string('continent', 64).notNullable()
    table.integer('height', 8).notNullable()
  })
}

exports.down = async knex => {
  await knex.schema.dropTableIfExists('mountains') // Bobby Tables
}
