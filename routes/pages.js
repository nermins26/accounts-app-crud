const express = require('express');
const router = express.Router();
const mongojs = require('mongojs')
const db = mongojs('accountsdb', ['accounts'])

router.get('/', (req,res)=>{
    db.accounts.find((err,data)=>{
        res.render('index', {accounts: data})
    })
})

router.get('/add_account', (req,res)=>{
    res.render('add_account')
})

router.get('/edit_accounts', (req,res)=>{
    db.accounts.find((err,data)=>{
        res.render('edit_accounts', {accounts: data})
    })
})

router.get('/edit/:id', (req, res)=> {
    let id = req.params.id
    db.accounts.findOne({"_id":db.ObjectId(id)}, (err,data)=> {
        res.render('edit', {one_account: data})
    })
})

module.exports = router