const express = require('express');
const router = express.Router();
const Profile = require('./ProfileModel');

class crudController {
    static async getAll(req, res, next) {
        Profile.find({}).then(function(profiles){
            res.send(profiles);
        }).catch(next);
    }

    static async add(req, res, next) {
        Profile.find({}).then(function(profiles){
            res.send(profiles);
        }).catch(next);
    }

    static async edit(req, res, next) {
        Profile.find({}).then(function(profiles){
            res.send(profiles);
        }).catch(next);
    }

    static async delete(req, res, next) {
        Profile.find({}).then(function(profiles){
            res.send(profiles);
        }).catch(next);
    }
}


module.exports = crudController;