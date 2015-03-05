module.exports = function (router) {
  router.get('/', function (req, res) {
    res.send('<html><head><link href="/css/main.css" media="all" rel="stylesheet"></head><body><h1>website</h1></body></html>');
  });
};
