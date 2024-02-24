const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const userAuth = require('../middleware/user')


router.get('/', userController.getallMechanics);
router.get('/profile', userAuth, userController.getuserprofile);
router.post('/makeOrder', userAuth, userController.makeOrder);
router.get('/order-history', userAuth, userController.orderhistory);


//make reviews

router.get('/feedback',  userController.feedback);
router.post('/feedBack/:id', userAuth, userController.submitFeedback);

module.exports = router;
