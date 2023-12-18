const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Hip Hop',
  },
  {
    tag_name: 'R&B',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'yellow',
  },
  {
    tag_name: 'gray',
  },
  {
    tag_name: 'silver',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
