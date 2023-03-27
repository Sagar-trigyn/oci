// const cassandra = require('cassandra-driver');
//
// const authProvider = new cassandra.auth.PlainTextAuthProvider(
//     '<username>',
//     '<password>'
// );
//
// const client = new cassandra.Client({
//     contactPoints: ['10.50.9.166'],
//     keyspace: '',
//     authProvider: authProvider
//
// });
// client.connect()
//     .then(() => console.log('Connected to Cassandra'))
//     .catch(err => console.error(err));
//
// module.exports = client