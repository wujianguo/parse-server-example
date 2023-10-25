Parse.Cloud.define('health', async req => {
  var health = new Parse.Object("Health");
  health.id = req.params.healthId || 'xyz';
  health.set('content', new Date().toString());
  health.increment("checks");
  await health.save(null, { useMasterKey: true })
  return {"status": "ok"};
});

// Parse.Cloud.define('hello', req => {
//   req.log.info(req);
//   return 'Hi';
// });

// Parse.Cloud.define('asyncFunction', async req => {
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   req.log.info(req);
//   return 'Hi async';
// });

// Parse.Cloud.beforeSave('Test', () => {
//   throw new Parse.Error(9001, 'Saving test objects is not available.');
// });
