'use-strict'
const mongoose = require('mongoose')
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
const app = require('./app');
const db = 'marvel'
const portdb = 27017
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};
mongoose.connect(`mongodb://${hostname}:${portdb}/${db}`, options, (err) => {
    if (!err) {
        console.log(`mongo:::: db running on mongodb://${hostname}:${portdb}/${db}`)
        app.listen(port, () => {
            console.log(`server:::: server running on http://${hostname}:${port}`)
        });
    }
});