exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('mountains')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('mountains').insert([
        {
          id: 0,
          name: 'Mount California',
          continent: 'North America',
          height: '34000'
        },
        {
          id: 1,
          name: 'Mount Foo',
          continent: 'Europe',
          height: '28000'
        },
        {
          id: 2,
          name: 'Mount Bear',
          continent: 'Asia',
          height: '14000'
        },
        {
          id: 3,
          name: 'Mount Snoo',
          continent: 'Asia',
          height: '12000'
        }
      ])
    })
}
