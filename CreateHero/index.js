module.exports = function(context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  if (req.body && req.body) {
    context.bindings.hero = JSON.stringify({
      id: req.body.id,
      name: req.body.name,
      saying: req.body.saying
    });
    context.res = {
      status: 200,
      body: 'Hero inserted successfully!'
    };
    context.done();
  } else {
    context.res = {
      status: 400,
      body: 'Please pass a todo in the request body'
    };
  }
};
