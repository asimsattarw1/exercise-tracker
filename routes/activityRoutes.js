const express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const ActivityController = require('../controllers/activityController');
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/exercise_tracker');

var conn = mongoose.connection;

conn.on('connected', function () {
    console.log('Connected successfully');
})

conn.on('disconnected', function () {
    console.log('Disonnected successfully');
});

conn.on('error', function () {
    console.log('Error detected');
})

router.post('/add', ActivityController.addActivity);
router.get('/get', ActivityController.getActivity);
router.post('/delete', ActivityController.deleteActivity);

module.exports = router;