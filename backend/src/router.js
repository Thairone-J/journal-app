const express = require ('express');
const journalsController = require ('./controllers/journalController');
const router = express.Router();


router.get('/journals', journalsController.getAll);


module.exports = router;