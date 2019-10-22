const express = require('express');
const router = express.Router();

//Load User model

const User = require('../../model/User');

// @route   GET api/users/test
// @desc    Test users route
// @acess   Public
router.get('/test', (req, res) => {
  const users = [
    { id: 1, firstName: 'Alen', lastName: 'Joseph' },
    { id: 2, firstName: 'Jane', lastName: 'Dain' },
    { id: 3, firstName: 'John', lastName: 'Doe' }
  ];

  res.status(200).json(users);
});

module.exports = router;
