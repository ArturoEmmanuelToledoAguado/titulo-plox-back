const mongoose = require('mongoose');

const Connect = (node) => {
    mongoose.connect(node,{}).then(db => console.log('DB is connect')).catch( err => console.log(err))
}

module.exports = {
    Connect
}