Package.describe({
  summary: "jQuery Truncation Plugin"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files(['trunk8/trunk8.js'], 'client');
});
