/**
 * Created by matt on 11/7/13.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId
    , config = require('../../config/config');

var referenceSchema = Schema({

    title   : String,
    url     : String,
    type    : String,
    source  : String,
    text    : String,
    vote    : Number,
    rating  : Number,

    subDate : {type: Date, default: Date.now},
    author  : [{type: Schema.Types.ObjectId, ref: 'User'}],
    user    : [{type: Schema.Types.ObjectId, ref: 'User'}],
    book    : [{type: Schema.Types.ObjectId, ref: 'Book'}]
});

/**
 * Validations
 */
referenceSchema.path('title').validate(function(title) {
    return title.length;
}, 'Title cannot be blank');

/**
 * Statics
 */
referenceSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user', 'name username').exec(cb);
    }
};

module.exports = mongoose.model('Reference', referenceSchema);