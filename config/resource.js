var connectionRequest = require('../koneksi');
var config = require('./secret');
var mysql = require('mysql');
var jwt = require('jsonwebtoken');

exports.expandedResult = function (query, requests) {
    return new Promise(function (resolve, reject) {
        let connection = connectionRequest();
        connection.query(query, requests, function (err, result) {
            if (err) {
                connection.end();
                return reject(err);
            }
            else {
                connection.end();
                return resolve(result);
            }
        });
    });
}

exports.getToken = function (user) {
    return jwt.sign({user}, config.secret, {
        // expiresIn: '5m',
        algorithm: 'HS256'
    });
}