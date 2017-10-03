var MongoClient = require('mongodb').MongoClient;
const url = 'your-connectio-string';
module.exports = function(context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  if (req.query) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      let heroId = parseInt(req.params.id);
      db.collection('Heroes').remove({ id: heroId }, function(err, result) {
        if (err) throw err;
        context.log(result);
        context.res = {
          status: 200,
          body: 'Hero deleted successfully!'
        };
        db.close();
        context.done();
      });
    });
  } else {
    context.res = {
      status: 400,
      body: 'Please pass a todo in the request body'
    };
  }
};
