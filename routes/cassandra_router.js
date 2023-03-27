const express = require('express');
const router = express.Router();
const Cassandra = require('../controller/cassandra_controller')

router.post('/postdata', Cassandra.PostData)

router.get('/getData', Cassandra.getData)

module.exports = router