const express = require('express');
const routing = express.Router();
const User = require('../models/users');
const userValidation = require('./userValidation')

routing.get('/users', async ({ }, res) => {
    try {
        let data = await User.findAll();
        res.send({ message: "User List", status: true, data })
    } catch (e) {
        res.send({ message: "Somthing wrong in API.!", status: false, err: e })
    }
})

routing.get('/users/id/:id', async ({ params: { id } }, res) => {
    try {
        let data = await User.findOne({ where: { id: id } });
        res.send({ message: "User", status: true, data })
    } catch (e) {
        res.send({ message: "Somthing wrong in API.!", status: false, err: e })
    }
})

routing.get('/users/username/:username', async ({ params: { username } }, res) => {
    try {
        let data = await User.findOne({ where: { username: username } });
        res.send({ message: "User", status: true, data })
    } catch (e) {
        res.send({ message: "Somthing wrong in API.!", status: false, err: e })
    }
})

routing.post('/users', userValidation.createuser, async ({ body }, res) => {
    try {
        const emailExists = await User.findOne({ where: { useremail: body.useremail } });
        if (emailExists) {
            res.json({ message: "Email already registered", status: false })
        } else {
            await User.create(body);
            res.send({ message: "User created successfully", status: true })
        }
    } catch (e) {
        res.send({ message: "Somthing wrong in API.!", status: false, err: e })
    }
})


routing.post('/users/id/:id', async ({ params: { id }, body }, res) => {
    try {
        const emailExists = await User.findOne({ where: { useremail: body.useremail } });
        if (emailExists != null && id != emailExists.id) {
            res.json({ message: "Email already registered", status: false })
        } else {
            await User.update(body, { where: { id: id } });
            res.send({ message: "User update successfully", status: true })
        }
    } catch (e) {
        res.send({ message: "Somthing wrong in API.!", status: false, err: e })
    }
})


module.exports = routing;