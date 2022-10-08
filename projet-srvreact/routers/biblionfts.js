var express = require('express')
var Biblionft = require('../models/biblionft')

var router = express.Router()

router.get('/', async (req,res) => {
    let biblionfts = await Biblionft.find({})
    res.json(biblionfts)
})

router.get('/:id', async (req,res) => {
    let biblionft = await Biblionft.findOne({_id: req.params.id})
    console.log(req.params.id)
    res.json(biblionft)
})

router.get('/nom/:nom', async (req,res) => {
    let biblionft = await Biblionft.findOne({nom: req.params.nom})
    res.json(biblionft)
})

router.post('/', async (req,res) =>{
    let biblionft = new Biblionft(req.body)
    biblionft.save()
    res.json(biblionft)
})

module.exports = router