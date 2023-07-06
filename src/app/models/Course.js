const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String },
    slug: { type: String },
    videoID: { type: String, require: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
});

module.exports = mongoose.model('Course', Course);
