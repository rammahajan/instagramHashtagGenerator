module.exports = {

  get(req, res, next) { 
      return res.view('main/hashtag-generator/hashtag-generator');
  }
};