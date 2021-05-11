const express = require('express');
const { Mongoose } = require('mongoose');
const router = express.Router();
const Profile = require('./ProfileModel');

class crudController {
    // get all profiles
    static async getAll(req, res, next) {
        Profile.find()
        .select('_id name email country')
        .exec()
        .then(profiles => {
            if (profiles == '') {
                return res.status(404).json({
                    message: 'No profile data found'
                })
            }
            const response = {
                message: 'All profiles successfully fetched',
                profile: profiles.map(profile => {
                    return {
                        _id: profile._id,
                        name: profile.name,
                        email: profile.email,
                        country: profile.country
                    }
                })
            };
            res.status(200).send(response);
        }).catch(next);
    }

    // get a profile
    static async get(req, res, next) {
        Profile.findById({_id: req.params.id})
            .select('_id name email country')
            .then(profile => {
                if (!profile) {
                    return res.status(404).json({
                        message: 'Error! Profile not found'
                    })
                }
                const response = {
                    message: 'Profile successfully fetched',
                    profile: profile
                };
            res.status(200).send(response);
        }).catch(next);
    }

    // add a profile
    static async add(req, res, next) {
        Profile.create(req.body)
            .then(profile => {
                const response = {
                    message: 'Profile successfully created',
                    profile: {
                        _id: profile._id,
                        name: profile.name,
                        email: profile.email,
                        country: profile.country,
                    },
                }
            res.status(201).send(response);
        }).catch(next);
    }

    // edit a profile
    static async edit(req, res, next) {
        Profile.findOneAndUpdate({_id: req.params.id},req.body).then(profile => {
            Profile.findOne({_id: req.params.id})
            .select('_id name email country')
            .then(profile => {
                if (!profile) {
                    return res.status(404).json({
                        message: 'Error! Profile not found'
                    })
                }
                const response = {
                    message: 'Profile updated successfully',
                    profile: profile
                }
                res.status(200).send(response);
            });
        });
    }

    // delete a profile
    static async delete(req, res, next) {
        Profile.findOneAndDelete({_id: req.params.id})
            .select('_id name email country')
            .then(profile => {
                if (!profile) {
                    return res.status(404).json({
                        message: 'Error! Profile not found'
                    })
                }
                const response = {
                    message: 'Profile deleted successfully',
                    profile: 'item no longer exists'
                }
                res.status(200).send(response);
        });
    }
}


module.exports = crudController;