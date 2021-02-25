const schema = require('box-es4x/schema');

const SubSchema = new schema({
  a: {
    type: "number",
  },
  b: {
    type: "number",
  },
});

const MainSchema = new schema({
  title: {
    type: "string",
  },
  list: {
    type: 'array',
    schema: SubSchema
  },
});

module.exports = data => schema.parse(MainSchema, data);
