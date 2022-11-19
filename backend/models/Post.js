const mongoose = require('mongoose')
const PostsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
        validate: validImage
    },
    comments: {
        type: String,
        required: true
    },
    creatorId: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

function validImage(val) {
    if (val.startsWith("http://") || val.startsWith("https://")) {
        return true
    } else {
        return false
    }
}
module.exports = mongoose.model('Posts', PostsSchema);