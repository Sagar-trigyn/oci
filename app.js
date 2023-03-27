const express = require('express')
const cors = require('cors')
const config = require('./config/config')
const { Client } = require('cassandra-driver');


const helmet = require('helmet')

const app = express()

app.use(express.json())
// logger
const logger = require('winston');
const router = require('./routes/cassandra_router');

port = config.port || 3000

const getObjectFromBucket = require('./controller/oci');

getObjectFromBucket()
    .then(() => console.log('Object retrieved successfully'))
    .catch(err => console.error(`Failed to retrieve object: ${err}`));

//  parses incoming requests with urlencoded payloads and is based on body-parser
app.use(express.urlencoded({ extended: true }))

app.use(cors())


// credintals needed
// require('./database/casandra-config')
// console.log(config)

//routes
app.use('/api',router) 

app.use((err, req, res, next) => {
    logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    next();
})

app.use(helmet())

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

app.get('/', (req, res) => {
    return res.status(200).json({
        message: "server responding "
    })
})

app.listen(port, () => {
    console.table([
        {
            port: `${port}`
        }
    ])
})