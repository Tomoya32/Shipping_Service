const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/shoegroupDB';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

module.exports = db;
