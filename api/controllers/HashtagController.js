/**
 * HashtagController
 *
 * @description :: Server-side logic for managing hashtags
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  findkeywords: function(req,res,next){
   

    sails.models.hashtag.create({'keyword':'himalaya'}).exec((err, result) => {
        if (err) {
          console.log(err);
        } else {
          err=null;
        }
      });

      sails.models.hashtag.find({'keyword':'himalaya'}).exec((err, result) => {
        if (err) {
          console.log(err);
        } else {
          err=result;
        }
      });

      return result;
    
  },

  insertkeywords: function(req,res,next){
   
      sails.models.users.create(options).exec((err, result) => {
        if (err) {
          console.log(err);
        } else {
          err=null;
        }
      });
    
  }
	
};

