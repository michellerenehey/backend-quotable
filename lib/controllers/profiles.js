const { Router } = require('express');
// const Profile = require('../models/Profile')
// const fetch = require('cross-fetch')
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res) => {
  const profile = await ProfileService.create(req.body.name);
  // if you pass in req.body, you'll need to destructure name in Profile
  // if you pass in req.body.name, you will NOT need to destructure name in Profile
  res.send(profile);
});
