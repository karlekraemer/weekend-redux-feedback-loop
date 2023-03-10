const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//get request
router.get('/', (req, res) => {
    console.log('in GET request');
    let queryText = 'SELECT * from "feedback"';

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});    

//post request
router.post('/', (req, res) => {
    let feedbackResult = req.body;
    console.log('POST req.body', feedbackResult);
    let queryText = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);';
    pool.query(queryText, feedbackResult)
        .then((result) => {
            res.sendStatus(200);
        }).catch((err) => {
            console.log('error adding newFeedback', err);
            res.sendStatus(500);
        });
});

module.exports = router;