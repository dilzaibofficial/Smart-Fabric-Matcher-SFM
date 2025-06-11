 
const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    result: { type: Object, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('History', historySchema);