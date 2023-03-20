
// const express = require('express');
// var router = express.Router();
// var mongoose = require('mongoose');
// const PostController = require('../controllers/postController');
// mongoose.set("strictQuery", false);
// mongoose.connect('mongodb://127.0.0.1:27017/my_fb');

// var conn = mongoose.connection;

// conn.on('connected', function () {
//     console.log('Connected successfully');
// })

// conn.on('disconnected', function () {
//     console.log('Disonnected successfully');
// });

// conn.on('error', function () {
//     console.log('Error detected');
// })

// router.get('/get', PostController.getPosts);
// router.post('/save', PostController.savePosts);
// router.post('/delete', PostController.deletePosts);
// router.post('/edit', PostController.editPosts);

// module.exports = router;