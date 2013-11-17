/**
 * Created by matt on 11/16/13.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Reference = mongoose.model('Reference'),
    _= require('underscore');

/**
 * Find reference by id
 */
exports.reference = function(req, res, next, id) {
    Reference.load(id, function(err, reference) {
        if (err) return next(err);
        if (!reference) return next(new Error('Failed to load reference ' + id));
        req.reference = reference;
        next();
    });
};


exports.create = function(req, res) {
    console.log(req);
    var ref = new Reference(req.body);
    ref.user = req.user;

    ref.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                reference: ref
            });
        } else {
            res.jsonp(ref);
        }
    });
};

exports.update = function(req, res) {
    var ref = req.reference;

    ref = _.extend(ref, req.body);

    ref.save(function(err) {
        res.jsonp(ref);
    });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.jsonp(req.reference);
};