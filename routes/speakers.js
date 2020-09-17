const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params; // Same as => const speakersService = params.speakersService

  //exple => http://localhost:3000/speakers
  router.get('/', async (req, res) => {
    const speakers = await speakersService.getList(); //await must be used only in async function
    // return res.send(`Speakers list => ${speakers}`);
    return res.json(speakers);
  });

  //exple => http://localhost:3000/speakers/eli
  router.get('/:shortname', (req, res) => {
    return res.send(`Details of ${req.params.shortname}`);
  });

  return router;
};
