const dotenv = require('dotenv')
const path = require('path')

process.env.NODE_ENV = "test"

dotenv.config({path : path.join(__dirname , `../environment/.${process.env.NODE_ENV}.env` ) })


module.exports ={
    port : process.env.PORT,
    contactPoints:process.env.contactPoints,
    localDataCenter:process.env.localDataCenter,
    keyspace:process.env.keyspace,
    hostname:process.env.hostname
}