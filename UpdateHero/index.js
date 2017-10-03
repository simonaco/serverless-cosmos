module.exports = function(context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  if (req.body && req.body) {
    context.bindings.hero = JSON.stringify({
      id: req.body.id,
      name: req.body.name,
      saying: req.body.id
    });
    context.res = {
      status: 200,
      body: req.body
    };
    context.done();
  } else {
    context.res = {
      status: 400,
      body: 'Please pass a todo in the request body'
    };
  }
};
