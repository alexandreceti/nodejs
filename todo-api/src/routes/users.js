const express = require('express')
const User = require('../models/users')
const Auth = require('../Middleware/auth')

const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)        
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/users', Auth, async (req, res) => {
    //console.log(req.user)
   try {
       const users = await User.find({})
       res.status(200).send(users)
   } catch (error) {
        res.status(500).send()
   }
})

router.get('/users/:id', Auth, async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    } catch (error) {
        res.status(500).send()
    }
})

router.patch('/users/:id', Auth, async (req, res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdate = ["name", "email", "password", "age"]
    const isValidOperation = updates.every((update) => allowedUpdate.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Esses campos não podem ser atualizados'})
    }

    try {
        //const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        const user = await User.findById(req.params.id)
        updates.forEach((update) => user[update] = req.body[update])

        await user.save()

        if(!user){
            return res.status(404).send()
        }

        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete('/users/:id', Auth, async (req, res) =>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if(!user){
            return res.send(404).send()
        }

        res.send(user)

    } catch (error) {
        res.status(500).send()
    }
})

router.post('/users/login', async (req, res) => {

    try {
    
    const user = await User.findByCredentials(req.body.email, req.body.password)
    
    const token = await user.generateAuthToken()

    res.send({ user, token })
    //res.send(user)
    
    } catch (e) {
    
    res.status(400).send()
    
    }
    
})

router.post('/users/logout', Auth, async (req, res) => {

    try {
        req.user.tokens = req.user.tokens.filter((token) => {
        return token.token !== req.token
        })
        await req.user.save()
        
        res.sendStatus(200)
        
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router