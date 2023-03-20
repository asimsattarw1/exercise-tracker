var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
    name: String,
    text: String,
});

var postModel = mongoose.model('post', PostSchema);
module.exports = postModel;