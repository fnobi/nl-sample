const uuidv1 = require('uuid/v1');

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: uuidv1(),
  })
}