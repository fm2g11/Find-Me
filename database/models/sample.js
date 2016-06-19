var mongoose = require('mongoose');

module.exports = mongoose.model('Sample', {
	title : String, 
  description : String,
});