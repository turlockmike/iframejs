
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.response = function(req, res) {
  res.render("response", {token: req.query.token, error: req.query.error});
}