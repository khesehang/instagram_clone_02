const { Register } = require('../components/auth/AuthComponents');

const router = require('express').Router();

router.post('/register',Register)

module.exports = router;
