

const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
  

});

const User = mongoose.model('User', ReactFormDataSchema);

// export default ReactDataModel;

module.exports = User;